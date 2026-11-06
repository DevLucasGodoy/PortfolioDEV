"use client";

import NotFound from "@/app/[locale]/not-found";
import { Button } from "@/components/ui/button";
import { usePathname } from "@/i18n/navigation";
import { protectedRoutes, routes } from "@/resources";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const isRouteEnabled = (pathname: string) => {
  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  const dynamicRoutes = ["/blog", "/work"] as const;
  return dynamicRoutes.some((route) => pathname.startsWith(route) && routes[route]);
};

export function RouteGuard({ children }: { children: React.ReactNode }) {
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

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="flex justify-center py-32">
        <span className="size-6 animate-spin rounded-full border-2 border-border border-t-primary" />
      </div>
    );
  }

  if (!isRouteEnabled(pathname)) {
    return <NotFound />;
  }

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <form
        onSubmit={handlePasswordSubmit}
        className="mx-auto flex max-w-sm flex-col items-center gap-4 px-5 py-32"
      >
        <h1 className="text-center text-2xl font-semibold text-balance">{t("protectedTitle")}</h1>
        <label className="flex w-full flex-col gap-1.5 text-sm">
          {t("passwordLabel")}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 rounded-xl border border-border bg-card px-3"
          />
        </label>
        {error && <p className="text-sm text-danger">{error}</p>}
        <Button type="submit" variant="primary">
          {t("submit")}
        </Button>
      </form>
    );
  }

  return <>{children}</>;
}
