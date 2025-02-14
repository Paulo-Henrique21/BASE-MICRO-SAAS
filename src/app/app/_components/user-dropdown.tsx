import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LockClosedIcon,
  MixerVerticalIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Session } from "next-auth";
import Link from "next/link";

type UserDropdownProps = {
  user: Session["user"];
};

export function UserDropdown({ user }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="relative h-8 items-center justify-between w-full space-x-2 !px-0"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user?.image as string}
              alt={user?.name as string}
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1 space-y-1 text-left">
            {user?.name && (
              <p className="text-sm font-medium leading-none">{user?.name}</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <MixerVerticalIcon className="w-3 h-3 mr-3" />
            Configurações
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <RocketIcon className="w-3 h-3 mr-3" />
            Upgrade
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link href={"/"}>
          <DropdownMenuItem className="cursor-pointer">
            <LockClosedIcon className="w-3 h-3 mr-3" />
            Log out
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
