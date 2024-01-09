"use client";

import { Bell, BellDot, ChevronDown, Menu, MenuSquare, X } from "lucide-react";

// import { Button } from "@ui/components/common";
// import "./layout.css";
// import ThemeButton from "../theme-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
// import Logo from '@images/AgileOffice-logo.svg'
// // import Geninvinci from '@images/geninvinci.svg'
// import clientlogo from '@images/clientlogo.svg'
import Image from "next/image";
import { format } from "date-fns";
// import { Sidebar } from "./sidebar";
// import { EmployeeSideBarItems } from "@/const/menus";

interface MenuT {
  icon: React.ReactNode;
  link: string;
  title: string;
}



export function NavBar(props): JSX.Element {


  return (
    <div className="relative md:px-0 h-24 w-full flex items-center">

      <div className="relative z-50 bg-secondary md:w-10/12 w-full h-full ">
        <div className="relative pt-0 h-full">
          <div className="flex bg-section pb-2 h-full pt-0 pr-4 rounded-tr-lg rounded-tl-lg md:rounded-bl-lg item-center justify-between">
            <div className="flex items-center md:items-start space-x-7">
              <Sheet>
                <SheetTrigger asChild>
                  <div className="flex md:hidden pl-2 items-center h-full">
                    <Menu />
                  </div>
                </SheetTrigger>
                <SheetContent side="left">
                  {/* <Sidebar items={EmployeeSideBarItems} /> */}
                </SheetContent>
              </Sheet>
              <div className="flex h-full  items-center">
                <h1 className="text-2xl">LOGO</h1>
                {/* <Image alt='' src={clientlogo} width={100} className="w-[100px] h-auto"></Image> */}
              </div>
              <div className="hidden md:flex h-full items-center">
                <h1 className="text-md text-center text-secondary-foreground">{format(new Date(), 'Pp')}</h1>
              </div>

            </div>
            <div className="flex space-x-10">
              <div className="flex space-x-3 items-center">
                {/* <ThemeButton /> */}
                {/* <Button className="hidden md:block w-fit whitespace-nowrap">
                  check in
                </Button> */}


              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-0  relative md:p-2 md:pt-0 bg-section  h-full flex items-center justify-center after:content-[''] after:absolute after:top-0 after:left-0 after:rounded-bl-lg after:w-full after:h-full after:bg-secondary ">
        <div className="relative flex items-center justify-center w-full h-full z-10 pl-1 pb-1">
          {/* <UserNavDropdown /> */}
        </div>
      </div>
    </div>
  );
}
