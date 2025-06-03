"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section className="py-20 bg-[#FF3A3A]">
      <div 
        ref={ref}
        className="container px-4 mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join Radhe today and experience the difference that science-backed training and a supportive community can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#FF3A3A] hover:bg-white/90 font-semibold px-8">
              <Link href="#pricing">
                Get Started Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
              <Link href="#contact">
                Schedule a Tour
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}