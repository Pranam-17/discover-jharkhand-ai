import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Heart, ArrowRight, Palette, Home } from "lucide-react";
import tribalCrafts from "@/assets/tribal-crafts.jpg";

const marketplaceItems = [
  {
    id: 1,
    name: "Handwoven Tribal Textiles",
    price: "₹2,500 - ₹8,000",
    rating: 4.9,
    reviews: 127,
    category: "Textiles",
    seller: "Santhal Artisan Collective",
    image: tribalCrafts,
    description: "Authentic handwoven fabrics with traditional tribal patterns, made by local artisans using century-old techniques.",
    certification: "Verified Authentic"
  },
  {
    id: 2,
    name: "Bamboo Craft Collection",
    price: "₹500 - ₹3,500",
    rating: 4.8,
    reviews: 89,
    category: "Handicrafts",
    seller: "Eco Artisans Jharkhand",
    image: tribalCrafts,
    description: "Sustainable bamboo products including baskets, decorative items, and furniture crafted by tribal communities.",
    certification: "Eco-Certified"
  },
  {
    id: 3,
    name: "Traditional Pottery",
    price: "₹300 - ₹2,000",
    rating: 4.7,
    reviews: 156,
    category: "Pottery",
    seller: "Munda Pottery Works",
    image: tribalCrafts,
    description: "Hand-molded clay pottery with indigenous designs, perfect for home décor and traditional cooking.",
    certification: "Heritage Craft"
  }
];

const homestays = [
  {
    name: "Tribal Heritage Homestay",
    location: "Saranda Forest",
    price: "₹1,200/night",
    rating: 4.9,
    host: "Birsa Tribal Family"
  },
  {
    name: "Eco Forest Retreat",
    location: "Netarhat Hills", 
    price: "₹2,000/night",
    rating: 4.8,
    host: "Local Community"
  }
];

const Marketplace = () => {
  return (
    <section id="marketplace" className="py-20 bg-nature-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-tribal-orange/10 text-tribal-orange border-tribal-orange/20">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Local Marketplace
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Authentic Tribal
            <span className="block text-tribal-orange">Crafts & Homestays</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Support local artisans and communities. Every purchase helps preserve 
            traditional craftsmanship and empowers tribal families.
          </p>
        </div>

        {/* Handicrafts Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground flex items-center">
              <Palette className="w-6 h-6 mr-2 text-tribal-orange" />
              Tribal Handicrafts
            </h3>
            <Button variant="outline" className="border-tribal-orange text-tribal-orange hover:bg-tribal-orange hover:text-white">
              View All Crafts
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceItems.map((item) => (
              <Card 
                key={item.id}
                className="group overflow-hidden border-0 shadow-natural hover:shadow-warm transition-all duration-500 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.name} - ${item.description}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-foreground border-0">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-tribal-orange text-white border-0">
                      {item.certification}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                      <span className="text-xs text-muted-foreground">({item.reviews})</span>
                    </div>
                    <div className="text-lg font-bold text-tribal-orange">
                      {item.price}
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground group-hover:text-tribal-orange transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">by {item.seller}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <Button className="w-full bg-tribal-orange hover:bg-tribal-orange/90 text-white">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Homestays Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground flex items-center">
              <Home className="w-6 h-6 mr-2 text-nature" />
              Authentic Homestays
            </h3>
            <Button variant="outline" className="border-nature text-nature hover:bg-nature hover:text-white">
              View All Stays
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homestays.map((homestay, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-natural hover:shadow-warm transition-all duration-500 transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-nature-light text-nature border-nature/20">
                      Verified Host
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{homestay.rating}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-nature transition-colors">
                    {homestay.name}
                  </h4>
                  
                  <p className="text-muted-foreground mb-2">{homestay.location}</p>
                  <p className="text-sm text-muted-foreground mb-4">Hosted by {homestay.host}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-nature">
                      {homestay.price}
                    </div>
                    <Button size="sm" className="bg-nature hover:bg-nature/90 text-white">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-tribal-orange/10 via-nature/10 to-tribal-orange/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Supporting 500+ Tribal Families
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-tribal-orange mb-1">₹2.5L+</div>
                <div className="text-sm text-muted-foreground">Monthly Income Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nature mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-waterfall mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Tribal Communities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tribal-brown mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Artisan Partners</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every purchase contributes to preserving traditional crafts and providing 
              sustainable livelihoods to tribal artisans across Jharkhand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;