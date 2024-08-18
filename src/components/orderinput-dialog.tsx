import { Search } from "lucide-react";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function OrderInputDialog({
  close,
}: {
  close: (open: boolean) => void;
}) {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  //? handle search
  function handlesubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (query.length <= 0) return;
    navigate(`/order/${query}`);
    close(false);
    setQuery("");
  }
  return (
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
  );
}
