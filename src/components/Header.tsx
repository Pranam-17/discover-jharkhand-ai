import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-forest-gradient rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">JharkhandXplore</h1>
              <p className="text-xs text-muted-foreground">Discover Natural Beauty</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-foreground hover:text-accent transition-colors">
              Destinations
            </a>
            <a href="#experiences" className="text-foreground hover:text-accent transition-colors">
              Experiences
            </a>
            <a href="#culture" className="text-foreground hover:text-accent transition-colors">
              Culture
            </a>
            <a href="#marketplace" className="text-foreground hover:text-accent transition-colors">
              Marketplace
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Plan Trip
            </Button>
            <Button className="bg-forest-gradient text-white shadow-natural" size="sm">
              AI Assistant
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#destinations" className="text-foreground hover:text-accent transition-colors py-2">
                Destinations
              </a>
              <a href="#experiences" className="text-foreground hover:text-accent transition-colors py-2">
                Experiences
              </a>
              <a href="#culture" className="text-foreground hover:text-accent transition-colors py-2">
                Culture
              </a>
              <a href="#marketplace" className="text-foreground hover:text-accent transition-colors py-2">
                Marketplace
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Plan Trip
                </Button>
                <Button className="bg-forest-gradient text-white shadow-natural w-full" size="sm">
                  AI Assistant
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;