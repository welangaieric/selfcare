import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, DollarSign, Package, Phone, Mail } from "lucide-react"

// Mock account data - in real app this would come from API
const accountData = {
  package: "Premium Fiber 100Mbps",
  amount: "KES 4,000",
  expiry: "2024-03-15",
  phone: "+254 712 345 678",
  email: "john.doe@email.com",
  status: "Active",
  nextBilling: "2024-02-15",
}

export function AccountOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          Account Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Current Package</span>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {accountData.status}
              </Badge>
            </div>
            <p className="font-medium text-lg">{accountData.package}</p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              <span>{accountData.amount}/month</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <CalendarDays className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Expires:</span>
              <span className="font-medium">{accountData.expiry}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">{accountData.phone}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">{accountData.email}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
