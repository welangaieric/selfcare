"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Save, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function PhoneNumberSettings() {
  const [currentPhone, setCurrentPhone] = useState("+254 712 345 678")
  const [newPhone, setNewPhone] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [step, setStep] = useState("input")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSendVerification = async () => {
    if (!newPhone.trim()) {
      toast({
        title: "Phone Number Required",
        description: "Please enter your new phone number.",
        variant: "destructive",
      })
      return
    }

    if (newPhone === currentPhone) {
      toast({
        title: "Same Phone Number",
        description: "The new phone number is the same as your current one.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate sending verification code
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Verification Code Sent",
      description: `A verification code has been sent to ${newPhone}`,
    })

    setStep("verify")
    setIsLoading(false)
  }

  const handleVerifyAndUpdate = async () => {
    if (!verificationCode.trim()) {
      toast({
        title: "Verification Code Required",
        description: "Please enter the verification code.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate verification and update
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Phone Number Updated",
      description: "Your phone number has been successfully updated.",
    })

    setCurrentPhone(newPhone)
    setNewPhone("")
    setVerificationCode("")
    setStep("input")
    setIsLoading(false)
  }

  const handleCancel = () => {
    setStep("input")
    setNewPhone("")
    setVerificationCode("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Phone className="w-5 h-5 text-primary" />
          Phone Number Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Current Phone Number</Label>
          <Input value={currentPhone} disabled className="bg-muted/50" />
        </div>

        {step === "input" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="new-phone">New Phone Number</Label>
              <Input
                id="new-phone"
                type="tel"
                placeholder="+254 7XX XXX XXX"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </div>

            <Button onClick={handleSendVerification} disabled={isLoading} className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              {isLoading ? "Sending Code..." : "Send Verification Code"}
            </Button>
          </>
        )}

        {step === "verify" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="verification-code">Verification Code</Label>
              <Input
                id="verification-code"
                type="text"
                placeholder="Enter 6-digit code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleVerifyAndUpdate} disabled={isLoading} className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                {isLoading ? "Verifying..." : "Verify & Update"}
              </Button>
              <Button onClick={handleCancel} variant="outline" disabled={isLoading}>
                Cancel
              </Button>
            </div>
          </>
        )}

        <div className="flex items-start gap-2 text-xs text-muted-foreground bg-primary/5 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium mb-1">Important:</p>
            <p>
              Changing your phone number will affect M-Pesa payments and SMS notifications. A verification code will be
              sent to your new number.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
