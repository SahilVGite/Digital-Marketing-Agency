import PageWrapper from '../components/common/PageWrapper.jsx'
import Hero from '../components/sections/Hero.jsx'
import Clients from '../components/sections/Clients.jsx'
import AboutIntro from '../components/sections/AboutIntro.jsx'
import ServicesOverview from '../components/sections/ServicesOverview.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import Stats from '../components/sections/Stats.jsx'
import FeaturedWork from '../components/sections/FeaturedWork.jsx'
import Process from '../components/sections/Process.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import FinalCTA from '../components/sections/FinalCTA.jsx'

export default function Home() {
  return (
    <PageWrapper title="Home">
      <Hero />
      <Clients />
      <AboutIntro />
      <ServicesOverview />
      <WhyChooseUs />
      <Stats />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <FinalCTA />
    </PageWrapper>
  )
}
