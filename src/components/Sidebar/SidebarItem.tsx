import React from "react";
import SidebarDropdown from "@/components/Sidebar/SidebarDropdown";
import { usePathname } from "next/navigation";


interface ItemProps{
  icon: React.JSX.Element;
  label: string;
  route: string;
  children?: any;
}

interface SidebarItem {
  item: ItemProps
  pageName: string
  setPageName: any
}

const SidebarItem = ({ item, pageName, setPageName }: SidebarItem) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: ItemProps) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <a
          href={item.route}
          onClick={handleClick}
          className={`${isItemActive ? "bg-lightblue dark:bg-blue-900" : ""} group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-lightblue dark:hover:bg-blue-950`}
        >
          {item.icon}
          {item.label}
          {item.children}
        </a>

        {item.children && (
          <div
            className={`translate transformn ${
              pageName !== item.label.toLowerCase() && "hidden"
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
