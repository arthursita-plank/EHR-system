import { ReportTable } from "@/components/report-table"

const reportData = [
  { id: "R-2024-001", patientName: "Alice Johnson", date: "2024-01-15", type: "Lab Results", doctor: "Dr. Smith", status: "Final" },
  { id: "R-2024-002", patientName: "Bob Smith", date: "2024-01-14", type: "Radiology", doctor: "Dr. Jones", status: "Pending" },
  { id: "R-2024-003", patientName: "Charlie Brown", date: "2024-01-14", type: "Checkup", doctor: "Dr. Smith", status: "Final" },
  { id: "R-2024-004", patientName: "Diana Prince", date: "2024-01-13", type: "Cardiology", doctor: "Dr. White", status: "Final" },
  { id: "R-2024-005", patientName: "Evan Wright", date: "2024-01-12", type: "Lab Results", doctor: "Dr. Smith", status: "Reviews" },
  { id: "R-2024-006", patientName: "Fiona Green", date: "2024-01-12", type: "General", doctor: "Dr. Jones", status: "Final" },
  { id: "R-2024-007", patientName: "George Black", date: "2024-01-11", type: "Surgery", doctor: "Dr. White", status: "Final" },
  { id: "R-2024-008", patientName: "Hannah Blue", date: "2024-01-10", type: "Pediatrics", doctor: "Dr. Smith", status: "Final" },
  { id: "R-2024-009", patientName: "Ian Grey", date: "2024-01-10", type: "Lab Results", doctor: "Dr. Jones", status: "Pending" },
  { id: "R-2024-010", patientName: "Jane Doe", date: "2024-01-09", type: "Cardiology", doctor: "Dr. Smith", status: "Final" },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          View and export detailed medical reports for patients.
        </p>
      </div>
      
      <ReportTable data={reportData} />
    </div>
  )
}
