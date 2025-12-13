import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Cpu, HardDrive, Zap } from "lucide-react";

const minecraftPlans = [
  { name: "Stone Plan", ram: "4GB", price: "₹79.00", slug: "products/minecraft-india/stone" },
  { name: "Iron Plan", ram: "8GB", price: "₹129.00", slug: "products/minecraft-india/iron" },
  { name: "Gold Plan", ram: "10GB", price: "₹159.00", slug: "products/minecraft-india/gold" },
  { name: "Diamond Plan", ram: "12GB", price: "₹179.00", slug: "products/minecraft-india/diamond", popular: true },
  { name: "Emerald Plan", ram: "16GB", price: "₹240.00", slug: "products/minecraft-india/emrald" },
  { name: "Redstone Plan", ram: "24GB", price: "₹299.00", slug: "products/minecraft-india/redstone" },
  { name: "Netherite Plan", ram: "32GB", price: "₹399.00", slug: "products/minecraft-india/netherite" },
  { name: "Obsidian Plan", ram: "48GB", price: "₹499.00", slug: "products/minecraft-india/obsidian" },
];

const GameHosting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Game Hosting
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Minecraft <span className="text-gradient">Server Hosting</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              High-performance Minecraft servers with instant setup, DDoS protection, and 24/7 support. Build your world without limits.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Instant Setup</h3>
                <p className="text-sm text-muted-foreground">Server ready in seconds</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">High Performance</h3>
                <p className="text-sm text-muted-foreground">Ryzen 9 powered servers</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <HardDrive className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">NVMe Storage</h3>
                <p className="text-sm text-muted-foreground">Ultra-fast SSD storage</p>
              </div>
            </div>
          </div>

          {/* Minecraft Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minecraftPlans.map((plan) => (
              <Card 
                key={plan.slug} 
                className={`relative border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                  plan.popular ? "border-primary ring-2 ring-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.ram} RAM</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground">/mo</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Unlimited Players
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      DDoS Protection
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Custom Plugins
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      24/7 Support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "hero" : "heroOutline"}
                    asChild
                  >
                    <a href={`https://billing.renderbyte.site/${plan.slug}`} target="_blank" rel="noopener noreferrer">
                      Order Now
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GameHosting;
