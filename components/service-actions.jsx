"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertTriangle, MessageSquare, Phone, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function ServiceActions() {
  const [terminationReason, setTerminationReason] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleTerminationRequest = async () => {
    if (!terminationReason.trim()) {
      toast({
        title: "Reason Required",
        description: "Please provide a reason for account termination.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Termination Request Submitted",
      description:
        "Your account termination request has been submitted for review. Our team will contact you within 24 hours.",
    })

    setIsSubmitting(false)
    setTerminationReason("")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Service Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Need Help?</h4>

            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Phone className="w-4 h-4 mr-3" />
              Call Support
            </Button>

            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Mail className="w-4 h-4 mr-3" />
              Email Support
            </Button>

            <Button variant="outline" className="w-full justify-start bg-transparent">
              <MessageSquare className="w-4 h-4 mr-3" />
              Live Chat
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            Account Termination
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground bg-destructive/10 p-3 rounded-lg">
            <p className="font-medium mb-1">Important Notice:</p>
            <p>Account termination is permanent and cannot be undone. All services will be discontinued.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="termination-reason">Reason for Termination</Label>
            <Textarea
              id="termination-reason"
              placeholder="Please tell us why you want to terminate your account..."
              value={terminationReason}
              onChange={(e) => setTerminationReason(e.target.value)}
              rows={4}
            />
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Request Account Termination
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Account Termination</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to request account termination? This action will:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Discontinue all internet services</li>
                    <li>Cancel your current subscription</li>
                    <li>Require equipment return within 7 days</li>
                    <li>Process final billing within 30 days</li>
                  </ul>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleTerminationRequest}
                  disabled={isSubmitting}
                  className="bg-destructive hover:bg-destructive/90"
                >
                  {isSubmitting ? "Submitting..." : "Confirm Termination"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  )
}
