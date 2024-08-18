import { setUserName } from "@/features/user/user-slice";
import { DialogDescription } from "@radix-ui/react-dialog";
import { ChevronsRight } from "lucide-react";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function NameInputDialog() {
  const [username, setusername] = useState<string>();
  const dispatch = useDispatch();

  function handlesubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!username) return;
    dispatch(setUserName(username));
  }

  return (
    <DialogContent className="sm:max-w-[340px]  md:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Enter Your Name</DialogTitle>
        <DialogDescription>
          Please enter your name to place your pizza order.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4">
        <Label htmlFor="name" className="text-base">
          User Name
        </Label>
        <Input
          id="name"
          placeholder="Enter the user name"
          className="col-span-3"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <DialogFooter>
        <Button type="submit" onClick={handlesubmit} className="rounded-sm">
          <ChevronsRight className="w-5 h-5 mr-1" />
          Save Changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
