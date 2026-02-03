import { Download, FolderLock, ClipboardList } from "lucide-react"

export default function ReportsPage() {
  return (
    <>
      <header className="top-bar">
        <div className="page-title">
          <h1>Medical Reports</h1>
        </div>
        <div className="user-profile">
          <span>Dr. Smith</span>
          <div className="user-avatar" />
        </div>
      </header>

      <div className="dashboard-container">
        <section className="panel">
          <h2 className="text-lg font-semibold">Patient Records</h2>
          <div className="grid-cards mt-5">
            <a
              href="/report.csv"
              download="summary_of_care.csv"
              className="feature-card feature-card--wide border border-dashed border-[hsl(var(--accent))] bg-transparent"
              id="download-summary-of-care"
            >
              <span className="feature-icon bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))]">
                <Download className="h-6 w-6" />
              </span>
              <span className="feature-title text-[hsl(var(--accent))]">
                Download Summary of Care
              </span>
            </a>

            <div className="feature-card feature-card--wide">
              <span className="feature-icon">
                <ClipboardList className="h-6 w-6" />
              </span>
              <span className="feature-title">Customized History</span>
            </div>

            <div className="feature-card feature-card--wide">
              <span className="feature-icon">
                <FolderLock className="h-6 w-6" />
              </span>
              <span className="feature-title">Record Documents</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
