import { iconLibrary } from "@/resources/icons";
import { getContent } from "@/resources";
import { getLocale, getTranslations } from "next-intl/server";

export async function Footer() {
  const locale = await getLocale();
  const { person, social } = getContent(locale);
  const t = await getTranslations("Footer");

  return (
    <footer className="flex flex-col items-center justify-between gap-4 px-5 py-8 pb-24 text-sm text-muted-foreground sm:flex-row sm:px-10 md:pb-8">
      <p>
        © {new Date().getFullYear()} {person.name} ·{" "}
        {t.rich("builtBy", {
          fcd: (chunks) => (
            <a
              href="https://www.firstclassdev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      <div className="flex gap-1">
        {social.map((item) => {
          const Icon = iconLibrary[item.icon];
          return (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
