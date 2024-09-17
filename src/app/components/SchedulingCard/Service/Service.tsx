import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ServiceProps = {
  children?: ReactNode;
  className?: string;
};

export const Service = ({ children, className }: ServiceProps) => {
  return <p className={cn(className)}>{children}</p>;
};
