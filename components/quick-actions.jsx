import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Wifi, Phone, Settings, TrendingUp, AlertTriangle } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full justify-start bg-transparent" variant="outline">
          <CreditCard className="w-4 h-4 mr-3" />
          Pay Bill
        </Button>

        <Button className="w-full justify-start bg-transparent" variant="outline">
          <Wifi className="w-4 h-4 mr-3" />
          Change WiFi Settings
        </Button>

        <Button className="w-full justify-start bg-transparent" variant="outline">
          <Phone className="w-4 h-4 mr-3" />
          Update Phone Number
        </Button>

        <Button className="w-full justify-start bg-transparent" variant="outline">
          <TrendingUp className="w-4 h-4 mr-3" />
          Upgrade Plan
        </Button>

        <Button className="w-full justify-start bg-transparent" variant="outline">
          <Settings className="w-4 h-4 mr-3" />
          Account Settings
        </Button>

        <Button className="w-full justify-start bg-transparent" variant="outline">
          <AlertTriangle className="w-4 h-4 mr-3 text-destructive" />
          Request Termination
        </Button>
      </CardContent>
    </Card>
  )
}
