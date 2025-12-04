import { Ecosystem } from "components/Ecosystem"
import { Ethos } from "components/Ethos"
import { Footer } from "components/Footer"
import { Foundry } from "components/Foundry"
import { Hero } from "components/Hero"
import { LanguageToggle } from "components/LanguageToggle"
import { Metadata } from "next"
import { Philosophy } from "components/Philosophy"
import { Process } from "components/Process"

export const metadata: Metadata = {
  title: "Void factory",
}

export default function Web() {
  return (
    <div className="min-h-screen bg-[#0E0E10]">
      <LanguageToggle />
      <Hero />
      <Philosophy />
      <Process />
      <Foundry />
      <Ethos />
      <Ecosystem />
      <Footer />
    </div>
  )
}
