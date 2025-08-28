import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Activity, Download, Upload, Clock } from "lucide-react"

// Mock usage data
const usageData = {
  dataUsed: 85.2,
  dataLimit: 100,
  downloadSpeed: "95.3 Mbps",
  uploadSpeed: "45.7 Mbps",
  uptime: "99.8%",
  lastUpdated: "2 minutes ago",
}

export function UsageStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Usage Statistics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Data Usage</span>
            <span className="text-sm text-muted-foreground">
              {usageData.dataUsed}GB / {usageData.dataLimit}GB
            </span>
          </div>
          <Progress value={usageData.dataUsed} className="h-2" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Download className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Download</p>
            <p className="font-semibold">{usageData.downloadSpeed}</p>
          </div>

          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Upload className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Upload</p>
            <p className="font-semibold">{usageData.uploadSpeed}</p>
          </div>

          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Uptime</p>
            <p className="font-semibold">{usageData.uptime}</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center">Last updated {usageData.lastUpdated}</p>
      </CardContent>
    </Card>
  )
}
