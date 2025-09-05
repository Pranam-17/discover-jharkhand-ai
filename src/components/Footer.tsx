import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-sunset-gradient rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">JharkhandXplore</h3>
                <p className="text-sm text-primary-foreground/70">Discover Natural Beauty</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              Empowering sustainable tourism in Jharkhand through AI-powered experiences 
              that connect travelers with authentic local culture and pristine nature.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#destinations" className="hover:text-accent transition-colors">Top Destinations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Waterfalls</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">National Parks</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hill Stations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cultural Sites</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Adventure Sports</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">AI Trip Planner</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Local Guides</a></li>
              <li><a href="#marketplace" className="hover:text-accent transition-colors">Tribal Marketplace</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Homestays</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Transportation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Virtual Tours</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/80">
                  Tourism Department<br />
                  Jharkhand Government<br />
                  Ranchi, Jharkhand 834001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+91 651 244 0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">info@jharkhandxplore.in</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-accent">Download Our App</h5>
              <div className="flex space-x-2">
                <Button size="sm" variant="secondary" className="text-xs px-3 py-1.5">
                  Google Play
                </Button>
                <Button size="sm" variant="secondary" className="text-xs px-3 py-1.5">
                  App Store
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-primary-foreground/70">
              <span>© 2024 JharkhandXplore. All rights reserved.</span>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/70">
              <span>Powered by AI & Blockchain</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;