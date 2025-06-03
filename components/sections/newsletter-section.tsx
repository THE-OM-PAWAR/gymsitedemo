"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, we would submit the email to a server
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our <span className="text-[#FF3A3A]">Fitness Community</span>
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter for training tips, nutrition advice, success stories, and exclusive offers.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button type="submit" className="bg-[#FF3A3A] hover:bg-[#E53535] text-white font-medium">
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="bg-white/10 p-4 rounded-md">
              <p className="text-white">
                Thanks for subscribing! Check your inbox for a confirmation email.
              </p>
            </div>
          )}
          
          <p className="text-xs text-white/60 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </motion.div>
      </div>
    </section>
  );
}