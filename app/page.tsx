
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import NationalDayShowcase from '@/components/national-day-showcase'
import CollectionShowcase from '@/components/collection-showcase'
import HeritageStory from '@/components/heritage-story'
import ProductsSection from '@/components/products-section'
import ProductsSectionTwo from '@/components/products-section-two'
import AboutSection from '@/components/about-section'
import AboutUsProcess from '@/components/about-us-process'
import FabricationBanner from '@/components/fabrication-banner'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen m-0 p-0">
      <Navbar />
      <Hero />
      <br />
      <HeritageStory />
      <CollectionShowcase />
      <ProductsSection />
      <NationalDayShowcase />

      <ProductsSectionTwo />

      <AboutSection />
      <AboutUsProcess />
      <ContactSection />
      <FabricationBanner />
      <Footer />
    </main>
  );
}
