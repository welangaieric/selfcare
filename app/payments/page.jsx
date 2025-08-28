import { PaymentOverview } from "@/components/payment-overview"
import { MpesaPayment } from "@/components/mpesa-payment"
import { PaymentHistory } from "@/components/payment-history"
import { Sidebar } from "@/components/sidebar"

export default function PaymentsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Payments</h1>
            <p className="text-muted-foreground mt-1">Manage your subscription payments and billing history</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <PaymentOverview />
              <PaymentHistory />
            </div>
            <div>
              <MpesaPayment />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
