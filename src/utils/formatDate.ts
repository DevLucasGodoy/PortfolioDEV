export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  // Para:
  formattedDate = `há ${yearsAgo} ano${yearsAgo > 1 ? "s" : ""}`;
  formattedDate = `há ${monthsAgo} mês${monthsAgo > 1 ? "es" : ""}`;
  formattedDate = `há ${daysAgo} dia${daysAgo > 1 ? "s" : ""}`;
  formattedDate = "Hoje";

  const fullDate = targetDate.toLocaleString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
