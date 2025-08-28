import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Package, DollarSign, Calendar, Zap, Download, Upload } from "lucide-react"

// Mock current plan data
const currentPlan = {
  name: "Premium Fiber 100Mbps",
  price: 4000,
  speed: "100 Mbps",
  downloadSpeed: "100 Mbps",
  uploadSpeed: "50 Mbps",
  dataLimit: "Unlimited",
  status: "Active",
  nextBilling: "2024-03-15",
  daysRemaining: 28,
  features: ["24/7 Customer Support", "Free Router Rental", "Static IP Available", "No Data Caps"],
}

export function CurrentPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          Current Plan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">{currentPlan.name}</h3>
            <p className="text-muted-foreground">High-speed fiber internet</p>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {currentPlan.status}
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Monthly Cost</p>
            <p className="font-semibold">KES {currentPlan.price.toLocaleString()}</p>
          </div>

          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Download className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Download Speed</p>
            <p className="font-semibold">{currentPlan.downloadSpeed}</p>
          </div>

          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Upload className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Upload Speed</p>
            <p className="font-semibold">{currentPlan.uploadSpeed}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Next Billing
            </span>
            <span className="font-medium">{currentPlan.nextBilling}</span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-muted-foreground">Billing Cycle</span>
              <span className="font-medium">{currentPlan.daysRemaining} days remaining</span>
            </div>
            <Progress value={(currentPlan.daysRemaining / 30) * 100} className="h-2" />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Plan Features</h4>
          <div className="grid gap-2 md:grid-cols-2">
            {currentPlan.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
