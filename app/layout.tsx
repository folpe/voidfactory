import "styles/tailwind.css"

import Script from "next/script"
import { ClientLayout } from "./ClientLayout"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Script
          defer
          src="https://umami.volpionas.synology.me/u.js"
          data-website-id="ff4e3096-3c26-42a6-85c4-707ac1f8a28f"
          strategy="afterInteractive"
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
