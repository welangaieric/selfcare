"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Eye, EyeOff, Save, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function PasswordSettings() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const validatePassword = (password)=> {
    const errors= []
    if (password.length < 8) errors.push("At least 8 characters")
    if (!/[A-Z]/.test(password)) errors.push("One uppercase letter")
    if (!/[a-z]/.test(password)) errors.push("One lowercase letter")
    if (!/\d/.test(password)) errors.push("One number")
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("One special character")
    return errors
  }

  const handlePasswordChange = async () => {
    if (!currentPassword.trim()) {
      toast({
        title: "Current Password Required",
        description: "Please enter your current password.",
        variant: "destructive",
      })
      return
    }

    if (!newPassword.trim()) {
      toast({
        title: "New Password Required",
        description: "Please enter your new password.",
        variant: "destructive",
      })
      return
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords Don't Match",
        description: "New password and confirmation password don't match.",
        variant: "destructive",
      })
      return
    }

    const passwordErrors = validatePassword(newPassword)
    if (passwordErrors.length > 0) {
      toast({
        title: "Password Requirements Not Met",
        description: `Missing: ${passwordErrors.join(", ")}`,
        variant: "destructive",
      })
      return
    }

    if (currentPassword === newPassword) {
      toast({
        title: "Same Password",
        description: "New password must be different from current password.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate password change
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Password Updated",
      description: "Your password has been successfully changed.",
    })

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setIsLoading(false)
  }

  const passwordStrength = newPassword ? validatePassword(newPassword) : []

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Lock className="w-5 h-5 text-primary" />
          Password Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <div className="relative">
            <Input
              id="current-password"
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <div className="relative">
            <Input
              id="new-password"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <div className="relative">
            <Input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>

        {newPassword && (
          <div className="space-y-2">
            <Label className="text-sm">Password Requirements</Label>
            <div className="text-xs space-y-1">
              {[
                "At least 8 characters",
                "One uppercase letter",
                "One lowercase letter",
                "One number",
                "One special character",
              ].map((requirement, index) => {
                const isMet = !passwordStrength.includes(requirement)
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 ${isMet ? "text-primary" : "text-muted-foreground"}`}
                  >
                    <div className={`w-2 h-2 rounded-full ${isMet ? "bg-primary" : "bg-muted-foreground"}`} />
                    <span>{requirement}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <Button onClick={handlePasswordChange} disabled={isLoading} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          {isLoading ? "Updating Password..." : "Update Password"}
        </Button>

        <div className="flex items-start gap-2 text-xs text-muted-foreground bg-primary/5 p-3 rounded-lg">
          <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium mb-1">Security Tip:</p>
            <p>
              Use a strong, unique password that you don't use for other accounts. Consider using a password manager.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
