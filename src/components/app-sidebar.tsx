import { Calendar, Home, Search, Settings, Building2, FolderCode,SquareArrowOutUpRight  } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Experience",
    url: "/experience",
    icon: Building2,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderCode,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const conectItems = [
  {
    title: "LinkedIn",
    url: "/experience",
    icon: Building2,
  },
  {
    title: "Twitter",
    url: "/projects",
    icon: Calendar,
  },
  {
    title: "GitHub",
    url: "#",
    icon: Search,
  },
  {
    title: "Instagram",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent>
        {/* Routes Section */}
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Connect Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {conectItems.map((item) => (
                <SidebarMenuItem key={item.title}  >
                  <SidebarMenuButton  asChild >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}