"use client";

import React from "react";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

import { AboutIcon, HomeIcon, TimelineIcon, SlideshowIcon, BackIcon, UserImage } from "@/components/utils";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    menuItems: [
      {
        icon: (<Image src={HomeIcon} alt="home icon"/>),
        label: "Home",
        route: "#"
      },
      {
        icon: (<Image src={AboutIcon} alt="about icon" width={22} height={22} />),
        label: "About",
        route: "#about",
      },
      {
        icon: (<Image  src={TimelineIcon} alt="timeline icon" />),
        label: "Timeline",
        route: "#timeline",
      },
      
      {
        icon: (<Image src={SlideshowIcon} alt="slideshow icon" /> ),
        label: "Slideshow",
        route: "#slideshow",
      },
    ],
  }
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col bg-blue duration-300 ease-linear dark:bg-darkmode-dark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 pt-5.5 lg:py-6.5">
          <div/>
          <button
            title="sidebar"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <Image src={BackIcon} alt="Back Icon"></Image>
          </button>
        </div>
        
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <Image className='m-auto z-10 top-44 right-72 rounded-full' src={UserImage} width={100} height={100} alt="Profile image"></Image>
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                  <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
