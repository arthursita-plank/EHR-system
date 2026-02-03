import Link from "next/link"
import {
  BarChart3,
  Calendar,
  ClipboardList,
  FileText,
  Mail,
  User,
} from "lucide-react"

const dashboardCards = [
  { label: "Clinical Documents", icon: FileText },
  { label: "Appointments", icon: Calendar },
  { label: "Secure Messaging", icon: Mail },
  { label: "Health Snapshot", icon: ClipboardList },
  { label: "Medical Reports", icon: BarChart3, href: "/dashboard/reports", id: "nav-medical-reports" },
  { label: "Profile", icon: User },
]

export default function DashboardPage() {
  return (
    <>
      <header className="top-bar">
        <div className="page-title">
          <h1>Dashboard</h1>
        </div>
        <div className="user-profile">
          <span>Dr. Smith</span>
          <div className="user-avatar" />
        </div>
      </header>

      <div className="dashboard-container">
        <div className="grid-cards">
          {dashboardCards.map((card) => {
            const content = (
              <>
                <span className="feature-icon">
                  <card.icon className="h-6 w-6" />
                </span>
                <span className="feature-title">{card.label}</span>
              </>
            )

            if (card.href) {
              return (
                <Link
                  key={card.label}
                  href={card.href}
                  className="feature-card"
                  id={card.id}
                >
                  {content}
                </Link>
              )
            }

            return (
              <div key={card.label} className="feature-card">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
