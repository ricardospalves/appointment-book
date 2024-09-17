import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ContentProps = {
  children?: ReactNode;
  className?: string;
};

export const Content = ({ children, className }: ContentProps) => {
  return (
    <div
      className={cn([
        "flex flex-col justify-center gap-2 p-2 col-span-8 sm:col-span-9 only:col-span-full",
        className,
      ])}
    >
      {children}
    </div>
  );
};
