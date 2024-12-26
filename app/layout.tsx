import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import DockLive from "@/components/dock-live"
import { bodyFont, displayFont } from "@/public/fonts"

export const metadata: Metadata = {
  title: 'LevelUP Service Ltd. | Empowering Businesses with IT Solutions, Training & Innovation',
  description:
    'LevelUP Service Ltd. - A rising IT solutions provider in Bangladesh. We offer software engineering, IT support, training, and internships designed to empower businesses and individuals worldwide. Explore our online and offline courses, tailored software solutions, and expert services to start your tech journey with us today!',
  openGraph: {
    title: 'LevelUP Service Ltd. | Empowering Businesses with IT Solutions, Training & Innovation',
    description:
      'LevelUP Service Ltd. - A rising IT solutions provider in Bangladesh. We offer software engineering, IT support, training, and internships designed to empower businesses and individuals worldwide. Explore our online and offline courses, tailored software solutions, and expert services to start your tech journey with us today!',
  },
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen overflow-hidden bg-background antialiased",
            bodyFont.variable,
            displayFont.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SiteHeader />
            <div className="container flex flex-col">
            {/* container flex h-16 items-center space-x-4 text-2xl sm:justify-between sm:space-x-0 */}
              

              <div className="flex-1">{children}</div>

              <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
                )}
              />
            </div>
        
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
