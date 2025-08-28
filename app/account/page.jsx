import { AccountInfo } from "@/components/account-info"
import { PhoneNumberSettings } from "@/components/phone-number-settings"
import { PasswordSettings } from "@/components/password-settings"
import { SecuritySettings } from "@/components/security-settings"
import { Sidebar } from "@/components/sidebar"

export default function AccountPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Account Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your personal information and security preferences</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <AccountInfo />
              <PhoneNumberSettings />
            </div>
            <div className="space-y-6">
              <PasswordSettings />
              <SecuritySettings />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
