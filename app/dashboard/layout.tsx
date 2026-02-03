import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="app-wrapper">
      <AppSidebar />
      <main className="main-content">{children}</main>
    </div>
  )
}
