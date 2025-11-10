"use client"

import { type ReactNode } from "react"
import { LanguageProvider } from "contexts/LanguageContext"

export function ClientLayout({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
