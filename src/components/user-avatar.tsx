import { getUserName } from "@/features/user/user-slice";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function UserAvatar() {
  const userName = useSelector(getUserName);
  return (
    <Avatar className="h-8 w-8">
      {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
      <AvatarFallback className="bg-primary text-white text-sm">
        {userName.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
