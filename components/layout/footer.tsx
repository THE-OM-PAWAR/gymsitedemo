import Link from "next/link";
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-foreground">Radhe's<span className="text-[#FF3A3A]"> Fitness</span></span>
            </Link>
            <p className="text-muted-foreground">
              Building stronger bodies and minds through science-backed training and a supportive community.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/#trainers" className="text-muted-foreground hover:text-foreground transition-colors">Our Trainers</Link></li>
              <li><Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Membership</Link></li>
              <li><Link href="/#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link></li>
              <li><Link href="/#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#FF3A3A]" />
                <span className="text-muted-foreground">123 Fitness Way, Strength City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#FF3A3A]" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#FF3A3A]" />
                <span className="text-muted-foreground">info@Radhefitness.com</span>
              </li>
            </ul>
            <div className="pt-2">
              <h4 className="text-base font-medium mb-2">Hours:</h4>
              <p className="text-muted-foreground">Mon-Fri: 5AM-10PM</p>
              <p className="text-muted-foreground">Sat-Sun: 7AM-8PM</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground">Subscribe to get training tips and exclusive offers.</p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-secondary/50"
              />
              <Button className="bg-[#FF3A3A] hover:bg-[#E53535] text-white w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Radhe Fitness. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}