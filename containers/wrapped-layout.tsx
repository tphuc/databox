import { Circle } from "lucide-react";
import { Sidebar } from "./dashboard-nav";
import { NavBar } from "./nav-bar";






export default function WrappedLayout({ children }: { children: any }) {

    return <div className="relative w-full">
        <header className="sticky backdrop-blur-lg w-full top-0  z-40 bg-background/90 border-b border-border">
            <div className="flex items-center max-w-screen-2xl mx-auto w-full justify-between py-3 md:py-4">

            </div>
        </header>
        <div className="w-full gap-4 grid grid-cols-12">

            <div className="relative">
                <Sidebar items={[
                    {
                        title: "Overview",
                        href: "/dashboard/overview"
                    },
                    {
                        title: "Human Capital",
                        subMenu: [
                            {
                                title: "Demographics",
                                href: "/dashboard/human-capital-demographics",
                                icon: <Circle />
                            },
                            {
                                title: "Skills",
                                href: "/dashboard/human-capital-skills",
                                icon: <Circle />
                            },
                            {
                                title: "Recruitments",
                                href: "/dashboard/human-capital-recruitment",
                                icon: <Circle />
                            },
                            {
                                title: "Human Capital Analysis",
                                href: "/dashboard/human-capital-Analysis",
                                icon: <Circle />
                            }
                        ]
                    },
                    {
                        title: "Delivery",
                        subMenu: [
                            {
                                title: "Process",
                                href: "/dashboard/delivery-process",
                                icon: <Circle />
                            },
                            {
                                title: "Quality",
                                href: "/dashboard/delivery-quality",
                                icon: <Circle />
                            },
                            {
                                title: "Customer",
                                href: "/dashboard/delivery-customer",
                                icon: <Circle />
                            }
                        ]
                    },
                    {
                        title: "Key Information",
                        href: "/dashboard/key-info"
                    }
                ]} />
            </div>

            <main className="relative">
                {children}
            </main>

        </div>
    
    </div>
}