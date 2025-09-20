
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { AppSidebar } from "./components/app-sidebar"
import { QueueProvider } from "../config/queueContext"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}>
      <QueueProvider>
       <SidebarProvider>
      <SidebarTrigger />
         <AppSidebar />  
          {children}
      </SidebarProvider>
      </QueueProvider>
  </ThemeProvider>
  )
}

