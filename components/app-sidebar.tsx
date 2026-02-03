"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Calendar,
  Home,
  LogOut,
  MessageCircle,
  Settings,
  Sparkles,
} from "lucide-react"

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Calendar, label: "Appointments", href: "/dashboard/appointments" },
  { icon: MessageCircle, label: "Messages", href: "/dashboard/messages" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports", id: "nav-medical-reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Sparkles className="h-5 w-5" />
      </div>

      <nav className="sidebar-nav">
        {sidebarItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn("nav-item", isActive && "active")}
              aria-label={item.label}
              id={item.id}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          )
        })}
      </nav>

      <Link href="/login" className="nav-item" aria-label="Sign out">
        <LogOut className="h-5 w-5" />
      </Link>
    </aside>
  )
}
