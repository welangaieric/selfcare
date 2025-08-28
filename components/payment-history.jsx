import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { History, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock payment history data
const paymentHistory = [
  {
    id: "TXN001",
    date: "2024-02-20",
    amount: 2000,
    method: "M-Pesa",
    status: "Completed",
    reference: "QA12B3C4D5",
  },
  {
    id: "TXN002",
    date: "2024-01-15",
    amount: 4000,
    method: "M-Pesa",
    status: "Completed",
    reference: "QA98X7Y6Z5",
  },
  {
    id: "TXN003",
    date: "2023-12-15",
    amount: 1500,
    method: "M-Pesa",
    status: "Completed",
    reference: "QA55M4N3P2",
  },
  {
    id: "TXN004",
    date: "2023-12-10",
    amount: 2500,
    method: "M-Pesa",
    status: "Completed",
    reference: "QA77K8L9M0",
  },
  {
    id: "TXN005",
    date: "2023-11-15",
    amount: 4000,
    method: "M-Pesa",
    status: "Failed",
    reference: "QA33E4F5G6",
  },
]

export function PaymentHistory() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading flex items-center gap-2">
            <History className="w-5 h-5 text-primary" />
            Payment History
          </CardTitle>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paymentHistory.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">KES {payment.amount.toLocaleString()}</span>
                  <Badge
                    variant="secondary"
                    className={
                      payment.status === "Completed"
                        ? "bg-primary/10 text-primary"
                        : payment.status === "Failed"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-orange-100 text-orange-700"
                    }
                  >
                    {payment.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{payment.method}</p>
                <p className="text-xs text-muted-foreground">Ref: {payment.reference}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{payment.date}</p>
                <p className="text-xs text-muted-foreground">{payment.id}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">Load More Transactions</Button>
        </div>
      </CardContent>
    </Card>
  )
}
