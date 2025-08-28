"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock available plans data
const availablePlans = [
  {
    id: 1,
    name: "Basic Fiber 25Mbps",
    price: 1500,
    speed: "25 Mbps",
    downloadSpeed: "25 Mbps",
    uploadSpeed: "10 Mbps",
    type: "downgrade",
    features: ["Basic Support", "Router Rental", "Fair Usage Policy"],
  },
  {
    id: 2,
    name: "Standard Fiber 50Mbps",
    price: 2000,
    speed: "50 Mbps",
    downloadSpeed: "50 Mbps",
    uploadSpeed: "25 Mbps",
    type: "downgrade",
    features: ["24/7 Support", "Free Router", "No Data Caps"],
  },
  {
    id: 3,
    name: "Premium Fiber 100Mbps",
    price: 4000,
    speed: "100 Mbps",
    downloadSpeed: "100 Mbps",
    uploadSpeed: "50 Mbps",
    type: "current",
    features: ["24/7 Support", "Free Router", "Static IP", "No Data Caps"],
  },
  {
    id: 4,
    name: "Ultra Fiber 200Mbps",
    price: 6000,
    speed: "200 Mbps",
    downloadSpeed: "200 Mbps",
    uploadSpeed: "100 Mbps",
    type: "upgrade",
    features: ["Priority Support", "Premium Router", "Static IP", "No Data Caps", "Free Installation"],
  },
  {
    id: 5,
    name: "Enterprise Fiber 500Mbps",
    price: 12000,
    speed: "500 Mbps",
    downloadSpeed: "500 Mbps",
    uploadSpeed: "250 Mbps",
    type: "upgrade",
    features: ["Dedicated Support", "Enterprise Router", "Multiple IPs", "SLA Guarantee", "Free Installation"],
  },
]

export function AvailablePlans() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handlePlanChange = async (planId, planName, type) => {
    setIsLoading(true)
    setSelectedPlan(planId)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: `Plan ${type === "upgrade" ? "Upgrade" : "Downgrade"} Requested`,
      description: `Your request to ${type} to ${planName} has been submitted for review.`,
    })

    setIsLoading(false)
    setSelectedPlan(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Available Plans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {availablePlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-4 border rounded-lg transition-colors ${
                plan.type === "current" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="font-semibold">{plan.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {plan.downloadSpeed} download • {plan.uploadSpeed} upload
                    </p>
                  </div>
                  {plan.type === "current" && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Current
                    </Badge>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-semibold">KES {plan.price.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">per month</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Check className="w-3 h-3 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {plan.type !== "current" && (
                <Button
                  onClick={() => handlePlanChange(plan.id, plan.name, plan.type)}
                  disabled={isLoading && selectedPlan === plan.id}
                  variant={plan.type === "upgrade" ? "default" : "outline"}
                  className="w-full"
                >
                  {plan.type === "upgrade" ? (
                    <TrendingUp className="w-4 h-4 mr-2" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-2" />
                  )}
                  {isLoading && selectedPlan === plan.id
                    ? "Processing..."
                    : `${plan.type === "upgrade" ? "Upgrade" : "Downgrade"} to this plan`}
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
