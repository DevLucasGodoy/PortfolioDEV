type DateLocale = "pt" | "en";

const intlLocale: Record<DateLocale, string> = {
  pt: "pt-BR",
  en: "en-US",
};

export function formatDate(date: string, locale: DateLocale = "pt", includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (locale === "en") {
    if (yearsAgo > 0) {
      formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
      formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
      formattedDate = `${daysAgo}d ago`;
    } else {
      formattedDate = "Today";
    }
  } else {
    if (yearsAgo > 0) {
      formattedDate = `há ${yearsAgo} ano${yearsAgo > 1 ? "s" : ""}`;
    } else if (monthsAgo > 0) {
      formattedDate = `há ${monthsAgo} ${monthsAgo > 1 ? "meses" : "mês"}`;
    } else if (daysAgo > 0) {
      formattedDate = `há ${daysAgo} dia${daysAgo > 1 ? "s" : ""}`;
    } else {
      formattedDate = "Hoje";
    }
  }

  const fullDate = targetDate.toLocaleString(intlLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
