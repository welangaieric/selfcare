"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, RefreshCw, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function RouterSecurity() {
  const [firewall, setFirewall] = useState(true)
  const [guestNetwork, setGuestNetwork] = useState(false)
  const [wpsEnabled, setWpsEnabled] = useState(false)
  const [securityMode, setSecurityMode] = useState("WPA3")
  const [isRestarting, setIsRestarting] = useState(false)
  const { toast } = useToast()

  const handleRestart = async () => {
    setIsRestarting(true)

    // Simulate router restart
    await new Promise((resolve) => setTimeout(resolve, 3000))

    toast({
      title: "Router Restarted",
      description: "Your router has been successfully restarted.",
    })

    setIsRestarting(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Security Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="firewall">Firewall Protection</Label>
              <p className="text-xs text-muted-foreground">Block unauthorized access</p>
            </div>
            <Switch id="firewall" checked={firewall} onCheckedChange={setFirewall} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="guest-network">Guest Network</Label>
              <p className="text-xs text-muted-foreground">Separate network for visitors</p>
            </div>
            <Switch id="guest-network" checked={guestNetwork} onCheckedChange={setGuestNetwork} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="wps">WPS (WiFi Protected Setup)</Label>
              <p className="text-xs text-muted-foreground">Quick device connection</p>
            </div>
            <Switch id="wps" checked={wpsEnabled} onCheckedChange={setWpsEnabled} />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Security Mode</Label>
          <Select value={securityMode} onValueChange={setSecurityMode}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="WPA3">WPA3 (Recommended)</SelectItem>
              <SelectItem value="WPA2">WPA2</SelectItem>
              <SelectItem value="WPA">WPA (Legacy)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4 space-y-3">
          <Button onClick={handleRestart} disabled={isRestarting} variant="outline" className="w-full bg-transparent">
            <RefreshCw className={`w-4 h-4 mr-2 ${isRestarting ? "animate-spin" : ""}`} />
            {isRestarting ? "Restarting..." : "Restart Router"}
          </Button>

          <div className="flex items-start gap-2 text-xs text-muted-foreground bg-destructive/10 p-3 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
            <p>Restarting the router will temporarily disconnect all devices. The process takes about 2-3 minutes.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
