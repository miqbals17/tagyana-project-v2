import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export const getTime = (unix: number): string => {
  const time = new Date(unix);

  return time.toLocaleString();
};

export function formatRelativeTime(unixTimeMs: number): string {
  const date = new Date(unixTimeMs * 1000);
  return formatDistanceToNow(date, { addSuffix: true, locale: id });
}
