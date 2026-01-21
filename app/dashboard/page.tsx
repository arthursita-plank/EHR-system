import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Activity, FileText } from "lucide-react"

const recentPatients = [
  { name: "Alice Johnson", id: "P-1001", reason: "Annual Checkup", status: "Completed" },
  { name: "Bob Smith", id: "P-1002", reason: "Chest Pain", status: "In Progress" },
  { name: "Charlie Brown", id: "P-1003", reason: "Vaccination", status: "Scheduled" },
  { name: "Diana Prince", id: "P-1004", reason: "Follow-up", status: "No Show" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">4 completed today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Needs review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Wait Time</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14m</div>
            <p className="text-xs text-muted-foreground">-2m from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{patient.name}</p>
                    <p className="text-sm text-muted-foreground">{patient.id} - {patient.reason}</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
                        ${patient.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          patient.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          patient.status === 'No Show' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                      {patient.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
             <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                <p className="text-sm font-medium">New Patient Admission</p>
                <p className="text-xs text-muted-foreground">Register a new patient to the system.</p>
             </div>
             <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                <p className="text-sm font-medium">Generate Daily Report</p>
                <p className="text-xs text-muted-foreground">Download summary of today's activities.</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
