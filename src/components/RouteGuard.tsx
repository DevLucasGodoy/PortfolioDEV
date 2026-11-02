"use client";

import NotFound from "@/app/[locale]/not-found";
import { usePathname } from "@/i18n/navigation";
import { protectedRoutes, routes } from "@/resources";
import { Button, Column, Flex, Heading, PasswordInput, Spinner } from "@once-ui-system/core";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
}

const isRouteEnabled = (pathname: string) => {
  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  const dynamicRoutes = ["/blog", "/work"] as const;
  return dynamicRoutes.some((route) => pathname.startsWith(route) && routes[route]);
};

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const t = useTranslations("RouteGuard");
  const isPasswordRequired = Boolean(protectedRoutes[pathname as keyof typeof protectedRoutes]);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(isPasswordRequired);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname re-checks auth per route
  useEffect(() => {
    setIsAuthenticated(false);
    if (!isPasswordRequired) {
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch("/api/check-auth").then((response) => {
      setIsAuthenticated(response.ok);
      setLoading(false);
    });
  }, [isPasswordRequired, pathname]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError(t("incorrect"));
    }
  };

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isRouteEnabled(pathname)) {
    return <NotFound />;
  }

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          {t("protectedTitle")}
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label={t("passwordLabel")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>{t("submit")}</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
