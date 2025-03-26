export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return formatter.format(value);
}

export function countDateLess(date: Date): number {
  const now = new Date();
  console.log("date", date.toLocaleString());
  const diff = date.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24) - 1);
}
