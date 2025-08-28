import { Sidebar } from "@/components/sidebar"
import { AccountOverview } from "@/components/account-overview"
import { QuickActions } from "@/components/quick-actions"
import { UsageStats } from "@/components/usage-stats"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground">Welcome back, John</h1>
              <p className="text-muted-foreground mt-1">Manage your internet services and account settings</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <AccountOverview />
              <UsageStats />
            </div>
            <div>
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
