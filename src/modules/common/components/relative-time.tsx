import { formatRelativeTime } from "../utils/time";

const RelativeTime = ({
  unixTimeMs,
  className,
}: {
  unixTimeMs: number;
  className: string;
}): React.ReactNode => {
  const relativeTime = formatRelativeTime(unixTimeMs);
  return <p className={className}>{relativeTime}</p>;
};

export default RelativeTime;
