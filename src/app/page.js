'use client';
import CallToActionSection from '@/components/organisms/CallAction';
import ConsultingSection from '@/components/organisms/Consulting';
import Footer from '@/components/organisms/Footer';
import HeroWithNavbar from '@/components/organisms/Navbar';
import ProductGrid from '@/components/organisms/Products';
import ServicesSection from '@/components/organisms/Services';
import TestimonialsSection from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#DEF8EBFF',
      }}
    >
      <HeroWithNavbar />
      <ServicesSection />
      <ConsultingSection />
      <ProductGrid />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
