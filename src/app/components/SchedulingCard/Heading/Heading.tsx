import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

export type HeadingProps<E extends ElementType> = {
  as?: E;
  className?: string;
  children?: ReactNode;
};

export const Heading = <E extends ElementType>({
  as,
  className,
  children,
}: HeadingProps<E>) => {
  const Component = as || "h2";

  return (
    <Component className={cn(["font-bold", className])}>{children}</Component>
  );
};
