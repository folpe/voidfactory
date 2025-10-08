import { Metadata } from "next"

import { CinematicEcosystem } from "components/cinematic/CinematicEcosystem"
import { CinematicEthos } from "components/cinematic/CinematicEthos"
import { CinematicFooter } from "components/cinematic/CinematicFooter"
import { CinematicFoundry } from "components/cinematic/CinematicFoundry"
import { CinematicHero } from "components/cinematic/CinematicHero"
import { CinematicPhilosophy } from "components/cinematic/CinematicPhilosophy"
import { CinematicProcess } from "components/cinematic/CinematicProcess"

export const metadata: Metadata = {
  title: "V0rn",
}

export default function Web() {
  return (
    <div className="min-h-screen bg-[#0E0E10]">
      <CinematicHero />
      <CinematicPhilosophy />
      <CinematicProcess />
      <CinematicFoundry />
      <CinematicEthos />
      <CinematicEcosystem />
      <CinematicFooter />
    </div>
  )
}
