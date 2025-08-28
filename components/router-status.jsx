import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Signal, Globe, Clock } from "lucide-react"

// Mock router data
const routerData = {
  status: "Online",
  model: "NetConnect Pro Router",
  uptime: "15 days, 8 hours",
  connectedDevices: 12,
  signalStrength: "Excellent",
  ipAddress: "192.168.1.1",
}

export function RouterStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Wifi className="w-5 h-5 text-primary" />
          Router Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Status</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {routerData.status}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Model</span>
            <span className="font-medium">{routerData.model}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Uptime
            </span>
            <span className="font-medium">{routerData.uptime}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Connected Devices</span>
            <span className="font-medium">{routerData.connectedDevices}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <Signal className="w-4 h-4" />
              Signal Strength
            </span>
            <span className="font-medium">{routerData.signalStrength}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <Globe className="w-4 h-4" />
              IP Address
            </span>
            <span className="font-medium">{routerData.ipAddress}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
