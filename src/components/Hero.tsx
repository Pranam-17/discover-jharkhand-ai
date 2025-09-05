import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-jharkhand.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Jharkhand's pristine natural landscape with waterfalls and forests" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <Badge className="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300">
          <Sparkles className="w-4 h-4 mr-2" />
          AI-Powered Tourism Platform
        </Badge>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover the
          <span className="block bg-sunset-gradient bg-clip-text text-transparent">
            Hidden Gems
          </span>
          of Jharkhand
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience pristine waterfalls, lush forests, rich tribal culture, and authentic handicrafts. 
          Let our AI guide you through Jharkhand's untouched beauty.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-warm text-lg px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Start Exploring
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 rounded-xl transition-all duration-300"
          >
            Watch Virtual Tour
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/70 text-sm">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-white/70 text-sm">National Parks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-white/70 text-sm">Cultural Sites</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70 text-sm">AI Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;