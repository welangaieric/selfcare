"use client"


import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState("")
  const [account, setAccount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isResending, setIsResending] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedAccount = sessionStorage.getItem("loginAccount")
    if (!storedAccount) {
      router.push("/login")
      return
    }
    setAccount(storedAccount)
  }, [router])

  const handleVerifyOTP = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // This would typically verify the OTP with your backend
      const response = await fetch("https://server.konnektsmartlife.com/web/verify_login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ account, otp }),
      })

      if (response.ok) {
        sessionStorage.removeItem("loginAccount")
        // Redirect to dashboard or home page
        router.push("/")
      } else {
        const errorData = await response.json()
        setError(errorData.message || "Invalid OTP. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOTP = async () => {
    setIsResending(true)
    setError("")

    try {
      const response = await fetch("https://server.konnektsmartlife.com/web/request_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ account }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.message || "Failed to resend OTP.")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Verify OTP</CardTitle>
          <CardDescription>Enter the verification code sent to your registered contact</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="account">Account</Label>
              <Input id="account" type="text" value={account} disabled className="bg-muted" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                required
                disabled={isLoading}
                maxLength={6}
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading || otp.length !== 6}>
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </form>

          <div className="mt-6 space-y-2 text-center text-sm">
            <Button
              variant="ghost"
              onClick={handleResendOTP}
              disabled={isResending}
              className="text-primary hover:underline p-0 h-auto"
            >
              {isResending ? "Resending..." : "Resend OTP"}
            </Button>
            <div>
              <Link href="/login" className="text-muted-foreground hover:underline">
                Back to login
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
