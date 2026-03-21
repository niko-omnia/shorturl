import { ThemeToggle } from "./ThemeToggle";

export function PageHeader() {
    return (
        <div className="flex flex-row gap-1 justify-end items-center w-full h-12 pr-2">
            <ThemeToggle />
        </div>
    );
}
