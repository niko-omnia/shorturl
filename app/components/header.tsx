import { redirect } from "next/navigation";

import { ThemeToggle } from "./ThemeToggle";
import { AuthButtons } from "./AuthButtons";

type HeaderProps = {
  signed_in?: boolean,
  show_branding?: boolean
};

type BrandingProps = {
  show_branding?: boolean
};

function Branding({ show_branding }: BrandingProps) {
  if (show_branding === false) return null;
  return (
    <div className="flex flex-row gap-2 items-center pl-5 w-[50%] h-full">
      <h1
        className="font-semibold text-xl cursor-pointer"
        onClick={() => redirect("/")}
      >
        Shortify
      </h1>
    </div>
  );
}

export function Header({ signed_in, show_branding }: HeaderProps) {
  return (
    <div className="flex fixed top-0 left-0 w-full h-15">
      <Branding show_branding={show_branding} />
      <div className="flex flex-row gap-3 justify-end items-center pr-5 w-[50%] h-full">
        <ThemeToggle />
        <AuthButtons is_authorized={signed_in === true} />
      </div>
    </div>
  );
}
