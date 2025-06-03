"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRAINERS } from "@/lib/constants";

export function TrainersSection() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="trainers" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Trainers</h2>
          <p className="text-lg text-muted-foreground">
            Our certified professionals are dedicated to helping you achieve your fitness goals through scientifically proven methods.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TRAINERS.map((trainer, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <CardContent className="relative z-10 -mt-20 pt-0 px-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {trainer.certifications.map((cert, i) => (
                      <Badge key={i} variant="secondary" className="text-xs font-medium">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
                  <p className="text-sm text-white/80 mb-1">{trainer.role}</p>
                </CardContent>
                <CardFooter className="px-6 pt-0 pb-6">
                  <p className="text-sm text-muted-foreground">{trainer.bio}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}