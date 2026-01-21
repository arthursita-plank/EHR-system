"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  Calendar, 
  Home, 
  LogOut, 
  Settings, 
  Stethoscope, 
  Users 
} from "lucide-react"

const sidebarItems = [
  { icon: Home, label: "Overview", href: "/dashboard" },
  { icon: Users, label: "Patients", href: "/dashboard/patients" },
  { icon: Calendar, label: "Appointments", href: "/dashboard/appointments" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card shadow-sm">
      <div className="flex h-16 items-center px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-primary">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Stethoscope className="h-5 w-5" />
          </div>
          <span>MediCore</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1.5 px-3">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 px-3",
                    isActive && "font-medium text-primary shadow-sm"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="border-t p-4">
        <div className="mb-4 flex items-center gap-3 rounded-lg border bg-background p-3 shadow-sm">
          <div className="h-9 w-9 overflow-hidden rounded-full bg-muted">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="https://ui.shadcn.com/avatars/01.png" alt="Dr. Smith" />
          </div>
          <div className="overflow-hidden">
            <p className="truncate text-sm font-medium">Dr. Sarah Smith</p>
            <p className="truncate text-xs text-muted-foreground">Cardiology</p>
          </div>
        </div>
        <Link href="/login">
          <Button variant="outline" className="w-full justify-start gap-2 text-muted-foreground hover:text-destructive">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </Link>
      </div>
    </div>
  )
}
