import { LayoutDashboardIcon, LinkIcon } from "lucide-react";
import { redirect } from "next/navigation";

type SidebarItemProps = {
    selected?: boolean,
    icon: React.ReactNode,
    text: string,
    redirect_path?: string
};

export function SidebarItem({ selected, icon, text, redirect_path }: SidebarItemProps) {
    let itemClass = "flex flex-row gap-2 p-3 items-center w-full h-12 text-md rounded-xl cursor-pointer hover:bg-[#ffffff15]";
    if (selected) itemClass = `${itemClass} bg-[#ffffff10]`;

    return (
        <div
            className={itemClass}
            onClick={() => redirect(`/${(redirect_path ? redirect_path : text).toLowerCase()}`)}
        >
            {icon}
            <h1>{text}</h1>
        </div>
    );
}

export function Sidebar() {
    return (
        <div className="flex flex-col h-full gap-1 mb-3 border-r-[#cccccc40] border-r min-w-[15rem] w-[15%] pr-3">
            <div className="flex flex-row items-center w-full h-14 gap-1">
              <h1
                className="font-semibold p-3 text-2xl cursor-pointer"
                onClick={() => redirect("/")}
              >
                Shortify
              </h1>
            </div>
            <SidebarItem
                text="Dashboard" icon={<LayoutDashboardIcon size={18} />} selected={true}
            />
            <SidebarItem
                text="Links" icon={<LinkIcon size={18} />}
            />
        </div>
    );
}
