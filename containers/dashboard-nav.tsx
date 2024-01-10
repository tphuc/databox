"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"


import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
// import { useExpendableSidebar } from "../use-sidebar"

export interface NavItem {
  subMenu?: NavItem[],
  href?: any,
  disabled?: boolean,
  title: string,
  icon?: React.ReactNode

}
interface BusinessDashboardNavProps {
  title?: string;
  items: NavItem[]
}

export function Sidebar({ items, title }: BusinessDashboardNavProps) {
  const path = usePathname()

//   const { isOpen, toggleSidebar } = useExpendableSidebar();



  // Replace the matched pattern with an empty string
  let modifiedPath = path
    console.log(modifiedPath)

  if (!items?.length) {
    return null
  }

  return (
    <div
    style={{background:"hsla(224, 71.4%, 80.1%, .05)"}}
      className="relative to-secondary h-auto w-full border border-input pb-2 px-0 rounded-lg">

        <Accordion type="single" collapsible className="relative w-full ">
          <div className=" flex flex-col px-2">
            {items.map((navItem, index) => {
              if (navItem?.subMenu?.length) {
                return <AccordionItem className="pb-1 pt-1" key={`${navItem?.title}${index}`} value={`${navItem?.title}${index}`}>
                  <AccordionTrigger className={cn(
                    "group flex gap-2  backdrop-blur-lg rounded-md flex-nowrap hover:bg-secondary whitespace-nowrap items-center  px-4 py-1 text-sm font-medium",
                    // path === navItem?.href ? "hover:bg-secondary" : "transparent hover:bg-secondary",
                    navItem?.disabled && "cursor-not-allowed opacity-80",
                    navItem?.subMenu?.map(item => item.href)?.includes(modifiedPath) && "border  rounded-md"
                  )}>
                    <div className="flex items-center gap-2">
                      <div className={cn("p-2 rounded-[8px]",
                        path === navItem?.href ? "text-secondary dark:text-secondary-foreground" : "transparent hover:bg-secondary",
                        // navItem?.subMenu?.map(item => item.href)?.includes(modifiedPath) && "border"
                      )}>
                        {navItem?.icon}
                      </div>
                     {navItem?.title}
                    </div>
 


                  </AccordionTrigger>
                  <AccordionContent className="pt-1">
                    <div className="flex flex-col gap-1">
                      {navItem?.subMenu?.map((item, index) => {
                        return <Link key={`${item?.title}${index}`} className="w-full" prefetch={false} href={item?.disabled ? "/" : item?.href}>
                          <span
                            className={cn(
                              "group flex gap-2 flex-nowrap whitespace-nowrap items-center rounded-[12px] px-2 py-1 text-sm font-medium",
                              modifiedPath == item?.href ? "hover:bg-secondary rounded-md bg-secondary" : "transparent hover:bg-secondary",
                              item?.disabled && "cursor-not-allowed opacity-80"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <div className={cn("p-1 rounded-[8px]")}>
                                {item?.icon}
                              </div>
                              <span className="text-md">
                              {item?.title}
                              </span>
                             
                            </div>
                          </span>
                        </Link>
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              }

              else
                return (
           
                    <Link key={index} prefetch={false} href={navItem?.disabled ? "/" : navItem?.href} className="mt-2">
                      <span
                        className={cn(
                          "group flex gap-2 backdrop-blur-lg hover:bg-secondary   flex-nowrap whitespace-nowrap items-center rounded-[12px] rounded-md px-4 text-sm font-medium",
                          modifiedPath === navItem?.href ? " bg-secondary" : "transparent hover:bg-secondary",
                          navItem?.disabled && "cursor-not-allowed opacity-80"
                        )}
                      >
 
                        <div className="flex items-center gap-2 ">
                          <div className={cn("p-2 rounded-[8px] hover:bg-primary", modifiedPath === navItem?.href ? " text-secondary  dark:text-secondary-foreground" : "transparent hover:bg-secondary")}>
                            {navItem?.icon}
                          </div>
                          {navItem?.title}
                        </div>
                      </span>
                    </Link>
                  
                )
            })}
          </div>
        </Accordion>
    </div>
  )
}
