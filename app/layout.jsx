import { Space_Grotesk } from "next/font/google"
import { DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "ISP Customer Portal",
  description: "Manage your internet services, payments, and account settings",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
