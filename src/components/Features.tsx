import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  MapPin, 
  Smartphone, 
  Shield, 
  Users, 
  BarChart3,
  Camera,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Trip Planner",
    description: "Get personalized itineraries based on your preferences, budget, and travel dates. Our AI understands your needs.",
    highlight: "Smart Planning"
  },
  {
    icon: MapPin,
    title: "Interactive Maps",
    description: "Navigate with real-time location data, offline maps, and AR-powered directions to never miss a hidden gem.",
    highlight: "GPS Navigation"
  },
  {
    icon: Camera,
    title: "AR/VR Previews",
    description: "Experience destinations virtually before you visit. Get immersive 360° previews of attractions and accommodations.",
    highlight: "Virtual Tours"
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "Secure transactions and verified local guides with blockchain technology. Trust and transparency guaranteed.",
    highlight: "Verified Guides"
  },
  {
    icon: Users,
    title: "Local Community",
    description: "Connect with tribal artisans, local guides, and authentic homestays. Support the local community directly.",
    highlight: "Community-First"
  },
  {
    icon: Smartphone,
    title: "Multilingual Support",
    description: "Communicate in Hindi, Bengali, English, and local tribal languages with our AI-powered translation.",
    highlight: "15+ Languages"
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Tourism officials get real-time insights on visitor trends, popular destinations, and economic impact.",
    highlight: "Data Insights"
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Live weather, transport schedules, event notifications, and safety alerts to enhance your travel experience.",
    highlight: "Live Updates"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-tribal-orange/10 text-tribal-orange border-tribal-orange/20">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technology Meets
            <span className="block text-tribal-orange">Authentic Tourism</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of travel with our cutting-edge platform that combines 
            artificial intelligence with Jharkhand's rich cultural heritage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-natural hover:shadow-warm transition-all duration-500 transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-tribal-orange/5 via-transparent to-nature/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-forest-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="text-xs border-tribal-orange/20 text-tribal-orange bg-tribal-orange/5"
                  >
                    {feature.highlight}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-tribal-orange transition-colors duration-300">
                  {feature.title}
                </h3>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-tribal-orange/20 rounded-lg transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nature/10 via-tribal-orange/10 to-nature/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Future of Tourism?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered Jharkhand's hidden treasures 
              through our AI-powered platform. Your adventure awaits!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-nature text-white px-6 py-2 text-sm">
                🎯 Personalized Experiences
              </Badge>
              <Badge className="bg-tribal-orange text-white px-6 py-2 text-sm">
                🛡️ Verified & Secure
              </Badge>
              <Badge className="bg-waterfall text-white px-6 py-2 text-sm">
                🌍 Community-Driven
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;