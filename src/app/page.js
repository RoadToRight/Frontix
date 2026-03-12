import Footer from "@/components/custom/sections/Footer"
import Hero from "@/components/custom/sections/Hero"
import ReadyToMake from "@/components/custom/sections/ReadyToMake"
import Reviews from "@/components/custom/sections/Reviews"
import WhatweOffer from "@/components/custom/sections/WhatweOffer"


const page = () => {
  return (
    <div>
      <Hero />
      <WhatweOffer />
      <Reviews />
      <ReadyToMake />
      <Footer />
    </div>
  )
}

export default page
