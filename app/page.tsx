"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrainersSection } from "@/components/sections/trainers-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  // Smooth scroll functionality for anchor links
  useEffect(() => {
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.hash && closestAnchor.hash.startsWith('#') && closestAnchor.origin === window.location.origin) {
        e.preventDefault();
        const targetId = closestAnchor.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          history.pushState(null, '', closestAnchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainersSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
    </main>
  );
}