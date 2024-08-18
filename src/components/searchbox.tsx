import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utills";
import { useState } from "react";
import { useSelector } from "react-redux";
import { User } from "types/types";
import { NameInputDialog } from "./nameinput-dialog";
import { OrderInputDialog } from "./orderinput-dialog";

export function SearchBox() {
  const [open, setopen] = useState<boolean>(false);
  const { userName } = useSelector((state: User) => state.user);

  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "relative h-8 w-full border-primary justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
          )}
        >
          <span className="hidden lg:inline-flex">Search your order...</span>
          <span className="inline-flex lg:hidden">Search your order...</span>
          <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border  bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">#</span>
          </kbd>
        </Button>
      </DialogTrigger>
      {!userName && <NameInputDialog />}
      {userName && <OrderInputDialog close={setopen}/>}
    </Dialog>
  );
}
