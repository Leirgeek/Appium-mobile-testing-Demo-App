import { 
  Home, 
  Users, 
  ImageIcon, 
  Mail, 
  Settings as SettingsIcon, 
  User 
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About Us", url: "/about", icon: Users },
  { title: "Gallery", url: "/gallery", icon: ImageIcon },
  { title: "Contact", url: "/contact", icon: Mail },
  { title: "Settings", url: "/settings", icon: SettingsIcon },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className={isCollapsed ? "w-16" : "w-64"}>
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex-shrink-0"></div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-sidebar-foreground">Demo App</h2>
                <p className="text-xs text-sidebar-foreground/60">Navigation Demo</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="flex-1">
          <SidebarGroupLabel className="text-sidebar-foreground/60 px-4 py-2">
            {!isCollapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive: navIsActive }) =>
                        `flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-smooth ${
                          navIsActive
                            ? "bg-sidebar-primary/10 text-sidebar-primary border-l-2 border-sidebar-primary"
                            : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}