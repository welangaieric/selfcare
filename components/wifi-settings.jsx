"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Wifi, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function WifiSettings() {
  const [showPassword, setShowPassword] = useState(false)
  const [wifiName, setWifiName] = useState("NetConnect_Home_5G")
  const [wifiPassword, setWifiPassword] = useState("MySecurePassword123")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSave = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "WiFi Settings Updated",
      description: "Your WiFi name and password have been successfully changed.",
    })

    setIsLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Wifi className="w-5 h-5 text-primary" />
          WiFi Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="wifi-name">WiFi Network Name (SSID)</Label>
          <Input
            id="wifi-name"
            value={wifiName}
            onChange={(e) => setWifiName(e.target.value)}
            placeholder="Enter WiFi network name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="wifi-password">WiFi Password</Label>
          <div className="relative">
            <Input
              id="wifi-password"
              type={showPassword ? "text" : "password"}
              value={wifiPassword}
              onChange={(e) => setWifiPassword(e.target.value)}
              placeholder="Enter WiFi password"
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>

        <div className="pt-4">
          <Button onClick={handleSave} disabled={isLoading} className="w-full">
            <Save className="w-4 h-4 mr-2" />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
          <p className="font-medium mb-1">Important:</p>
          <p>
            Changing these settings will disconnect all devices. You'll need to reconnect using the new credentials.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
