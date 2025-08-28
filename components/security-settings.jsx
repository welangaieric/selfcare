"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Shield, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SecuritySettings() {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(true)
  const [loginAlerts, setLoginAlerts] = useState(true)
  const [paymentAlerts, setPaymentAlerts] = useState(true)
  const { toast } = useToast()

  const handleSettingChange = (setting, value) => {
    toast({
      title: "Setting Updated",
      description: `${setting} has been ${value ? "enabled" : "disabled"}.`,
    })
  }

  const handleDownloadData = () => {
    toast({
      title: "Data Export Initiated",
      description: "Your account data export will be emailed to you within 24 hours.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Security & Privacy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
            <Switch
              id="two-factor"
              checked={twoFactorAuth}
              onCheckedChange={(value) => {
                setTwoFactorAuth(value)
                handleSettingChange("Two-factor authentication", value)
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-xs text-muted-foreground">Receive account updates via email</p>
            </div>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={(value) => {
                setEmailNotifications(value)
                handleSettingChange("Email notifications", value)
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <p className="text-xs text-muted-foreground">Receive important alerts via SMS</p>
            </div>
            <Switch
              id="sms-notifications"
              checked={smsNotifications}
              onCheckedChange={(value) => {
                setSmsNotifications(value)
                handleSettingChange("SMS notifications", value)
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="login-alerts">Login Alerts</Label>
              <p className="text-xs text-muted-foreground">Get notified of new login attempts</p>
            </div>
            <Switch
              id="login-alerts"
              checked={loginAlerts}
              onCheckedChange={(value) => {
                setLoginAlerts(value)
                handleSettingChange("Login alerts", value)
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="payment-alerts">Payment Alerts</Label>
              <p className="text-xs text-muted-foreground">Notifications for payment activities</p>
            </div>
            <Switch
              id="payment-alerts"
              checked={paymentAlerts}
              onCheckedChange={(value) => {
                setPaymentAlerts(value)
                handleSettingChange("Payment alerts", value)
              }}
            />
          </div>
        </div>

        <div className="pt-4 border-t space-y-3">
          <h4 className="font-medium text-sm">Data & Privacy</h4>

          <Button onClick={handleDownloadData} variant="outline" className="w-full justify-start bg-transparent">
            <Download className="w-4 h-4 mr-3" />
            Download My Data
          </Button>

          <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
            <p className="font-medium mb-1">Privacy Notice:</p>
            <p>
              We protect your personal information according to our Privacy Policy. You can request a copy of your data
              or account deletion by contacting support.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
