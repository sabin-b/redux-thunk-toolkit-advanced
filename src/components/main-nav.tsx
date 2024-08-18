import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utills";
import { Link, useLocation } from "react-router-dom";

export function MainNav() {
  const { pathname } = useLocation();

  return (
    <div className="mr-4 hidden md:flex lg:gap-x-12 md:justify-between">
      <Link
        to="/"
        className="mr-4 flex items-center text-2xl lg:text-3xl space-x-2 lg:mr-6"
      >
        <span>🍕</span>
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-base lg:gap-6">
        <Link
          to="/menu"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/menu" ? "text-primary" : "text-foreground/70"
          )}
        >
          Menu
        </Link>
        {/* <Link
          to="/orders"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.endsWith("/orders")
              ? "text-primary"
              : "text-foreground/70"
          )}
        >
          Orders
        </Link> */}
        {/* <Link
          to="/order/new"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/order/new" ? "text-primary" : "text-foreground/70"
          )}
        >
          New Order
        </Link> */}
        <Link
          to="/cart"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/cart")
              ? "text-primary"
              : "text-foreground/70"
          )}
        >
          Cart
        </Link>
      </nav>
    </div>
  );
}
