"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Smartphone, CreditCard, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Payment calculation logic based on user requirements
const getMinimumPayment = (totalAmount) => {
  switch (totalAmount) {
    case 1500:
      return 500
    case 2000:
      return 700
    case 3000:
      return 1000
    case 4000:
      return 2000
    default:
      return Math.ceil(totalAmount * 0.4) // 40% of total amount
  }
}

export function MpesaPayment() {
  const [paymentType, setPaymentType] = useState("full")
  const [customAmount, setCustomAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const totalAmount = 4000 // Current subscription amount
  const minimumPayment = getMinimumPayment(totalAmount)
  const remainingAmount = 2000 // Amount still owed

  const handlePayment = async () => {
    if (!phoneNumber.trim()) {
      toast({
        title: "Phone Number Required",
        description: "Please enter your M-Pesa phone number.",
        variant: "destructive",
      })
      return
    }

    const paymentAmount = paymentType === "full" ? remainingAmount : Number.parseInt(customAmount)

    if (paymentType === "custom") {
      if (!customAmount || Number.parseInt(customAmount) < minimumPayment) {
        toast({
          title: "Invalid Amount",
          description: `Minimum payment amount is KES ${minimumPayment.toLocaleString()}.`,
          variant: "destructive",
        })
        return
      }

      if (Number.parseInt(customAmount) > remainingAmount) {
        toast({
          title: "Amount Too High",
          description: `Maximum payment amount is KES ${remainingAmount.toLocaleString()}.`,
          variant: "destructive",
        })
        return
      }
    }

    setIsProcessing(true)

    // Simulate M-Pesa payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    toast({
      title: "Payment Initiated",
      description: `M-Pesa payment of KES ${paymentAmount.toLocaleString()} has been sent to ${phoneNumber}. Please complete the transaction on your phone.`,
    })

    setIsProcessing(false)
    setPhoneNumber("")
    setCustomAmount("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-primary" />
          M-Pesa Payment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-muted-foreground">Outstanding Balance</span>
              <span className="font-semibold">KES {remainingAmount.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Minimum Payment</span>
              <span>KES {minimumPayment.toLocaleString()}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Payment Amount</Label>
            <RadioGroup value={paymentType} onValueChange={setPaymentType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full" id="full" />
                <Label htmlFor="full" className="flex-1 cursor-pointer">
                  Pay Full Amount (KES {remainingAmount.toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom" className="cursor-pointer">
                  Enter Custom Amount
                </Label>
              </div>
            </RadioGroup>
          </div>

          {paymentType === "custom" && (
            <div className="space-y-2">
              <Label htmlFor="custom-amount">Custom Amount (KES)</Label>
              <Input
                id="custom-amount"
                type="number"
                placeholder={`Minimum ${minimumPayment.toLocaleString()}`}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                min={minimumPayment}
                max={remainingAmount}
              />
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <AlertCircle className="w-3 h-3" />
                <span>
                  Min: KES {minimumPayment.toLocaleString()}, Max: KES {remainingAmount.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="phone">M-Pesa Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="254712345678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={handlePayment} disabled={isProcessing} className="w-full">
          <CreditCard className="w-4 h-4 mr-2" />
          {isProcessing ? "Processing Payment..." : "Pay with M-Pesa"}
        </Button>

        <div className="text-xs text-muted-foreground bg-primary/5 p-3 rounded-lg">
          <p className="font-medium mb-1">How it works:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Enter your M-Pesa registered phone number</li>
            <li>Click "Pay with M-Pesa" to initiate payment</li>
            <li>You'll receive an STK push on your phone</li>
            <li>Enter your M-Pesa PIN to complete payment</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
