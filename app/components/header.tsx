import { redirect } from "next/navigation";
import { ThemeToggle } from "./themeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="flex fixed top-0 left-0 w-full h-15">
      <div className="flex flex-row gap-2 items-center pl-5 w-[50%] h-full">
        <h1
          className="font-semibold text-xl cursor-pointer"
          onClick={() => redirect("/")}
        >
          Shortify
        </h1>
      </div>
      <div className="flex flex-row gap-3 justify-end items-center pr-5 w-[50%] h-full">
        <ThemeToggle />
        <div
          className="flex flex-row gap-1"
        >
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => redirect("/login")}
          >
            Sign In
          </Button>
          <Button
            variant="secondary"
            className="cursor-pointer hover:bg-[#222] bg-black text-white dark:bg-[#ffffff30] dark:hover:bg-[#ffffff60]"
            onClick={() => redirect("/sign-up")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
