"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-foreground">
              Demo<span className="text-[#FF3A3A]"> Fitness</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild size="sm" variant="outline" className="font-medium">
              <Link href="#contact">Book a Trial</Link>
            </Button>
            <Button asChild size="sm" className="bg-[#FF3A3A] hover:bg-[#E53535] text-white font-medium">
              <Link href="#pricing">Join Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="font-medium w-full"
              >
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Trial
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-[#FF3A3A] hover:bg-[#E53535] text-white font-medium w-full"
              >
                <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  Join Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}