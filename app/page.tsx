
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import NationalDayShowcase from '@/components/national-day-showcase'
import CollectionShowcase from '@/components/collection-showcase'
import HeritageStory from '@/components/heritage-story'
import BestSellers from '@/components/best-sellers'
import ProductsSection from '@/components/products-section'
import ProductsSectionTwo from '@/components/products-section-two'
import ImageSeparator from '@/components/image-separator'
import AboutSection from '@/components/about-section'
import AboutUsProcess from '@/components/about-us-process'
import ContactSection from '@/components/contact-section'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen m-0 p-0">
      <Navbar />
      <Hero />

      <BestSellers />
      <HeritageStory />
      <CollectionShowcase />
      <ProductsSection />
      <NationalDayShowcase />

      <ProductsSectionTwo />


      <AboutSection />
      <AboutUsProcess />
      <ImageSeparator />

      <ContactSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
