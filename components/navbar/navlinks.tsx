"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Navlinks = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const params = useParams();
  const pathname = usePathname();

  const routes = [
    {
      label: "Settings",
      href: `/${params.storeId}/settings`,
      active: pathname === `/${params.storeId}/settings` ? true : false,
    },
  ];

  return (
    <div
      className={cn(
        "flex items-center text-sm space-x-4 lg:space-x-6",
        className
      )}
    >
      {routes.map((nav) => {
        return (
          <Link
            href={nav.href}
            key={nav.href}
            className={cn(
              "font-medium hover:text-primary",
              nav.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {nav.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
