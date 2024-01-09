




export type NavItem = {
  title: any
  href: string
  disabled?: boolean,
  laptopHidden?: boolean 
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  prefetch?: boolean
  icon?: any
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: any[]
    }
)

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[],
  newsNav: SidebarNavItem[],
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}
