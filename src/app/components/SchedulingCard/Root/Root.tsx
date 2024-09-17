import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type RootProps = {
  href: LinkProps["href"];
  className?: string;
  children?: ReactNode;
};

export const Root = ({ href, className, children }: RootProps) => {
  return (
    <article className={cn([className])}>
      <Link
        href={href}
        className="group grid grid-cols-12 border border-gray-400 rounded transition-colors hover:bg-primary/10 hover:border-primary focus-visible:border-primary"
      >
        {children}
      </Link>
    </article>
  );
};
