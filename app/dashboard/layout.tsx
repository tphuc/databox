
import { Sidebar } from "@/containers/dashboard-nav"
import WrappedLayout from "@/containers/wrapped-layout"
import { Dot, Key, LayoutDashboard, Package, UsersRound } from "lucide-react"
import Home from "../page"
import Image from "next/image"


interface LayoutProps {
    children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return <div className="flex min-h-screen bg-gradient-to-r from-gradientOne to-gradientTwo flex-col space-y-0 ">
        <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="w-[80vw] flex-none flex justify-end">

            </div>
        </div>
        <header className="sticky backdrop-blur-lg w-full top-0 px-4 z-40 bg-background/80 border-b border-border">
            <div className="flex items-center w-full justify-between py-3 px-4 md:py-4">
                <Image alt='' src={'/logo.png'} width={120} height={100} className="w-[120px] h-auto"></Image>
            </div>
        </header>
        <div className="flex flex-col md:grid px-4 flex-1 gap-0 md:grid-cols-[260px_1fr] pt-0 md:pt-6">

            <div className="relative border-gray-200 px-2 sm:w-full md:w-[260px] flex-col md:flex">
                <Sidebar items={
                    [
                        {
                            title: "Overview",
                            href: "/dashboard/overview",
                            icon: <LayoutDashboard />
                        },
                        {
                            title: "Human Capital",
                            icon: <UsersRound />,
                            subMenu: [
                                {
                                    title: "Demographics",
                                    href: "/dashboard/human-capital-demographics",
                                    icon: <Dot />
                                },
                                {
                                    title: "Skills",
                                    href: "/dashboard/human-capital-skills",
                                    icon: <Dot />
                                },
                                {
                                    title: "Recruitments",
                                    href: "/dashboard/human-capital-recruitment",
                                    icon: <Dot />
                                },
                                {
                                    title: "Human Capital Analysis",
                                    href: "/dashboard/human-capital-analysis",
                                    icon: <Dot />
                                }
                            ]
                        },
                        {
                            title: "Delivery",
                            icon: <Package />,
                            subMenu: [
                                {
                                    title: "Process",
                                    href: "/dashboard/delivery-process",
                                    icon: <Dot />
                                },
                                {
                                    title: "Quality",
                                    href: "/dashboard/delivery-quality",
                                    icon: <Dot />
                                },
                                {
                                    title: "Customer",
                                    href: "/dashboard/delivery-customer",
                                    icon: <Dot />
                                }
                            ]
                        },
                        {
                            title: "Key Information",
                            href: "/dashboard/key-info",
                            icon: <Key />
                        }
                    ]
                } />
            </div>

            <main className="flex pt-1 pb-10 relative w-full flex-1 flex-col overflow-hidden ">
                {children}
            </main>

        </div>
        {/* <SiteFooter className="border-t" /> */}
    </div>
}