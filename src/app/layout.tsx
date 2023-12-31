import { cn } from "@/lib/utils"
import "./globals.css"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import { Provider } from "@/providers/Provider"
import { Toaster } from "@/components/ui/toaster"

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Learning Journey",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(openSans.className, "antialiased min-h-screen pt-16")}
      >
        <Provider>
          <Navbar />
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
