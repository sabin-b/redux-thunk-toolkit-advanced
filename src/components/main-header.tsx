import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { SearchBox } from "@/components/searchbox";
import { getCartItemQuantity } from "@/features/cart/cart-slice";
import { getUserName } from "@/features/user/user-slice";
import { ShoppingCartIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { UserAvatar } from "./user-avatar";

// import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  const userName = useSelector(getUserName);
  const totalCartQuantity = useSelector(getCartItemQuantity);
  return (
    <header className="sticky top-0 z-50 w-full py-2 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-3 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchBox />
          </div>
          <nav className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full"
              asChild
            >
              <Link to="/cart">
                <ShoppingCartIcon className="w-7 h-7" />
                <span className="absolute w-5 h-5 flex justify-center items-center top-0 right-0 bg-primary text-primary-foreground rounded-full   text-xs font-medium">
                  {totalCartQuantity.toString()}
                </span>
              </Link>
            </Button>
            {userName && <UserAvatar />}
          </nav>
        </div>
      </div>
    </header>
  );
}
