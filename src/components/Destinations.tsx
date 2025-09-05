import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Camera, ArrowRight } from "lucide-react";
import hundruFalls from "@/assets/hundru-falls.jpg";
import betlaPark from "@/assets/betla-national-park.jpg";
import netarhatHills from "@/assets/netarhat-hills.jpg";

const destinations = [
  {
    id: 1,
    name: "Hundru Falls",
    location: "Ranchi District",
    image: hundruFalls,
    rating: 4.8,
    category: "Waterfalls",
    description: "A spectacular 320-foot waterfall cascading through rocky terrain, perfect for nature photographers and adventure seekers.",
    highlights: ["Photography", "Trekking", "Nature Walks"]
  },
  {
    id: 2,
    name: "Betla National Park",
    location: "Palamu District", 
    image: betlaPark,
    rating: 4.7,
    category: "Wildlife",
    description: "Home to tigers, elephants and diverse wildlife. Experience authentic jungle safaris and eco-tourism at its finest.",
    highlights: ["Wildlife Safari", "Bird Watching", "Eco-Tourism"]
  },
  {
    id: 3,
    name: "Netarhat Hills",
    location: "Latehar District",
    image: netarhatHills,
    rating: 4.9,
    category: "Hill Station",
    description: "The 'Queen of Chotanagpur' offers breathtaking sunrise views and serene hill station experience.",
    highlights: ["Sunrise Views", "Hill Station", "Photography"]
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-nature-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-nature-light text-nature border-nature/20">
            <MapPin className="w-4 h-4 mr-2" />
            Top Destinations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Jharkhand's
            <span className="block text-nature">Natural Wonders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From majestic waterfalls to pristine national parks, discover the untouched beauty 
            that makes Jharkhand a hidden gem for nature enthusiasts.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-0 shadow-natural hover:shadow-warm transition-all duration-500 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={`${destination.name} - ${destination.description}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground border-0">
                    {destination.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-foreground">{destination.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {destination.location}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-nature transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs border-nature/20 text-nature hover:bg-nature/10"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group/btn border-nature text-nature hover:bg-nature hover:text-white transition-all duration-300"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Explore Virtually
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-forest-gradient text-white shadow-natural hover:shadow-warm transition-all duration-300 transform hover:scale-105 px-8"
          >
            View All Destinations
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;