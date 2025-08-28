import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Calendar, MapPin } from "lucide-react"

// Mock account data
const accountInfo = {
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+254 712 345 678",
  joinDate: "January 2023",
  accountType: "Individual",
  status: "Active",
  address: "Nairobi, Kenya",
  customerID: "NC-2023-001234",
}

export function AccountInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          Account Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{accountInfo.name}</h3>
            <p className="text-sm text-muted-foreground">Customer ID: {accountInfo.customerID}</p>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {accountInfo.status}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Email:</span>
            <span className="font-medium">{accountInfo.email}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Phone:</span>
            <span className="font-medium">{accountInfo.phone}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Location:</span>
            <span className="font-medium">{accountInfo.address}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Member since:</span>
            <span className="font-medium">{accountInfo.joinDate}</span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Account Type</span>
            <span className="font-medium">{accountInfo.accountType}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
