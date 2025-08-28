import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Calendar, AlertCircle, CheckCircle } from "lucide-react"

// Mock payment data
const paymentData = {
  currentAmount: 4000,
  amountPaid: 2000,
  dueDate: "2024-03-15",
  status: "Partially Paid",
  daysUntilDue: 18,
  lastPayment: {
    amount: 2000,
    date: "2024-02-20",
    method: "M-Pesa",
  },
}

export function PaymentOverview() {
  const paymentProgress = (paymentData.amountPaid / paymentData.currentAmount) * 100
  const isOverdue = paymentData.daysUntilDue < 0
  const isFullyPaid = paymentData.amountPaid >= paymentData.currentAmount

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" />
          Payment Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">KES {paymentData.currentAmount.toLocaleString()}</h3>
            <p className="text-muted-foreground">Monthly subscription</p>
          </div>
          <Badge
            variant="secondary"
            className={
              isFullyPaid
                ? "bg-primary/10 text-primary"
                : isOverdue
                  ? "bg-destructive/10 text-destructive"
                  : "bg-orange-100 text-orange-700"
            }
          >
            {isFullyPaid ? "Paid" : isOverdue ? "Overdue" : paymentData.status}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Payment Progress</span>
            <span className="font-medium">
              KES {paymentData.amountPaid.toLocaleString()} / KES {paymentData.currentAmount.toLocaleString()}
            </span>
          </div>
          <Progress value={paymentProgress} className="h-3" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Remaining: KES {(paymentData.currentAmount - paymentData.amountPaid).toLocaleString()}</span>
            <span>{paymentProgress.toFixed(1)}% paid</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Due Date</p>
              <p className="text-xs text-muted-foreground">{paymentData.dueDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            {isFullyPaid ? (
              <CheckCircle className="w-5 h-5 text-primary" />
            ) : (
              <AlertCircle className={`w-5 h-5 ${isOverdue ? "text-destructive" : "text-orange-500"}`} />
            )}
            <div>
              <p className="text-sm font-medium">
                {isFullyPaid ? "Fully Paid" : isOverdue ? "Overdue" : `${paymentData.daysUntilDue} days left`}
              </p>
              <p className="text-xs text-muted-foreground">
                {isFullyPaid ? "Thank you!" : isOverdue ? "Payment required" : "Until due date"}
              </p>
            </div>
          </div>
        </div>

        {paymentData.lastPayment && (
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Last Payment</h4>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                KES {paymentData.lastPayment.amount.toLocaleString()} via {paymentData.lastPayment.method}
              </span>
              <span className="font-medium">{paymentData.lastPayment.date}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
