"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Dumbbell, Flame, PersonStanding, Laptop, Users, Utensils } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
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

  // Map service icons to components
  const getIcon = (iconName: string) => {
    const props = { className: "h-10 w-10 text-[#FF3A3A] mb-4" };
    switch (iconName) {
      case "Dumbbell": return <Dumbbell {...props} />;
      case "Flame": return <Flame {...props} />;
      case "PersonStanding": return <PersonStanding {...props} />;
      case "Laptop": return <Laptop {...props} />;
      case "Users": return <Users {...props} />;
      case "Utensils": return <Utensils {...props} />;
      default: return <Dumbbell {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive fitness solutions designed to meet you where you are and take you where you want to go.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card hover:shadow-lg transition-shadow overflow-hidden group border-border">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#FF3A3A] group-hover:h-full transition-all duration-300"></div>
                <CardHeader>
                  <div>
                    {getIcon(service.icon)}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}