import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utills";
import { Search } from "lucide-react";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBox() {
  const [query, setQuery] = useState<string>("");
  const [open, setopen] = useState<boolean>(false);

  const navigate = useNavigate();

  //? handle search
  function handlesubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (query.length <= 0) return;
    navigate(`/order/${query}`);
    setopen((value) => !value);
    setQuery("");
  }
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
      <DialogContent className=" sm:max-w-[90%] rounded-sm md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Track Your Pizza Order</DialogTitle>
          <DialogDescription>
            Enter your order ID to track the status of your pizza delivery.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="name" className="text-center text-lg">
              order id#
            </Label>
            <Input
              id="name"
              placeholder="Enter the order id#"
              className="col-span-3 rounded"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handlesubmit} className="rounded-sm">
            <Search className="w-5 h-5 mr-1" />
            Search Order
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
