import { cn } from "@/lib/utils";
import { formatRelative } from "date-fns";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";

export type DatetimeProps = {
  dateTime: string;
  className?: string;
  relative?: boolean;
};

export const Datetime = ({ dateTime, className, relative }: DatetimeProps) => {
  const date = new Date(dateTime);
  const absoluteDatetime = format(date, "d-MMMM-HH:mm", {
    locale: ptBR,
  }).split("-");
  const relativeDatetime = formatRelative(date, date, {
    locale: ptBR,
  }).split(" às ");

  return (
    <div
      className={cn([
        "flex flex-col justify-center gap-2 p-2 col-span-4 sm:col-span-3 border-l border-gray-400 text-center group-hover:border-inherit group-focus-visible:border-inherit",
        className,
      ])}
    >
      <p>
        <span className="block uppercase font-bold text-sm">
          {relative ? relativeDatetime[0] : absoluteDatetime[1]}
        </span>{" "}
        {!relative && (
          <span className="bock text-lg">{absoluteDatetime[0]}</span>
        )}
      </p>

      <p>{relative ? relativeDatetime[1] : absoluteDatetime[2]}</p>
    </div>
  );
};
