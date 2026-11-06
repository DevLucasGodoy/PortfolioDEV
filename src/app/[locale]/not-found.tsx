import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="mx-auto flex min-h-[70dvh] w-full max-w-4xl flex-col items-center justify-center gap-3 border-x border-border px-5 text-center">
      <span className="font-mono text-sm text-primary italic">{"// 404"}</span>
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="text-muted-foreground">{t("description")}</p>
    </main>
  );
}
