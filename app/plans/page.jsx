import { CurrentPlan } from "@/components/current-plan"
import { AvailablePlans } from "@/components/available-plans"
import { ServiceActions } from "@/components/service-actions"
import { Sidebar } from "@/components/sidebar"

export default function PlansPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Service Plans</h1>
            <p className="text-muted-foreground mt-1">Manage your internet plan and service options</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <CurrentPlan />
              <AvailablePlans />
            </div>
            <div>
              <ServiceActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
