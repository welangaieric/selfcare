import { RouterStatus } from "@/components/router-status"
import { WifiSettings } from "@/components/wifi-settings"
import { RouterSecurity } from "@/components/router-security"
import { Sidebar } from "@/components/sidebar"

export default function RouterPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Router Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your WiFi network and router configuration</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <RouterStatus />
              <WifiSettings />
            </div>
            <div>
              <RouterSecurity />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
