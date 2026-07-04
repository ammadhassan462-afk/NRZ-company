import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
