"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Gym training equipment"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Science-Backed Training, <span className="text-[#FF3A3A]">Proven Results</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At Radhe Fitness, we believe in training smarter, not just harder. Our approach combines evidence-based exercise science with personalized coaching to help you achieve sustainable results.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To transform lives through strength and discipline, creating a community where everyone can achieve their physical potential through proven methods and supportive guidance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4">Why Choose Radhe?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Evidence-based programming",
                  "Certified expert trainers",
                  "State-of-the-art equipment",
                  "Personalized approach",
                  "Supportive community",
                  "Focus on proper technique",
                  "Progress tracking systems",
                  "Nutrition guidance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-[#FF3A3A]" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}