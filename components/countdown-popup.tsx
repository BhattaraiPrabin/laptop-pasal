"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CountdownPopupProps {
  expiryDate: Date
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function CountdownPopup({
  expiryDate,
  title,
  description,
  buttonText,
  buttonLink,
}: CountdownPopupProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has dismissed the popup before
      const popupDismissed = localStorage.getItem("countdownPopupDismissed")
      if (!popupDismissed) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = expiryDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // If countdown is over
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Then set up interval
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [expiryDate])

  const handleClose = () => {
    setIsVisible(false)
    // Remember that user has dismissed the popup
    localStorage.setItem("countdownPopupDismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="relative max-w-md w-full bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="bg-primary/10 p-2 rounded-lg">
              <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg">
              <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
              <div className="text-xs text-muted-foreground">Hours</div>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg">
              <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
              <div className="text-xs text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg">
              <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
              <div className="text-xs text-muted-foreground">Seconds</div>
            </div>
          </div>

          <Button asChild className="w-full">
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
      </Card>
    </div>
  )
}
