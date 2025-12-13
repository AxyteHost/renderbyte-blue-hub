import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Cpu, Shield, Zap } from "lucide-react";

const ryzenPlans = [
  { name: "Ryzen Starter", cores: "2 vCPU", ram: "4GB", storage: "50GB NVMe", bandwidth: "2TB", price: "₹499.00" },
  { name: "Ryzen Basic", cores: "4 vCPU", ram: "8GB", storage: "100GB NVMe", bandwidth: "4TB", price: "₹899.00" },
  { name: "Ryzen Pro", cores: "6 vCPU", ram: "16GB", storage: "200GB NVMe", bandwidth: "6TB", price: "₹1,499.00", popular: true },
  { name: "Ryzen Advanced", cores: "8 vCPU", ram: "32GB", storage: "400GB NVMe", bandwidth: "8TB", price: "₹2,499.00" },
];

const intelPlans = [
  { name: "Intel Starter", cores: "2 vCPU", ram: "4GB", storage: "50GB SSD", bandwidth: "2TB", price: "₹449.00" },
  { name: "Intel Basic", cores: "4 vCPU", ram: "8GB", storage: "100GB SSD", bandwidth: "4TB", price: "₹799.00" },
  { name: "Intel Pro", cores: "6 vCPU", ram: "16GB", storage: "200GB SSD", bandwidth: "6TB", price: "₹1,299.00", popular: true },
  { name: "Intel Advanced", cores: "8 vCPU", ram: "32GB", storage: "400GB SSD", bandwidth: "8TB", price: "₹2,199.00" },
];

const CloudHosting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Cloud Hosting
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              VPS <span className="text-gradient">Hosting</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful virtual private servers with full root access, dedicated resources, and enterprise-grade infrastructure.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">99.9% Uptime</h3>
                <p className="text-sm text-muted-foreground">Guaranteed availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Full Root Access</h3>
                <p className="text-sm text-muted-foreground">Complete server control</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">DDoS Protection</h3>
                <p className="text-sm text-muted-foreground">Enterprise security</p>
              </div>
            </div>
          </div>

          {/* VPS Plans Tabs */}
          <Tabs defaultValue="ryzen" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="ryzen" className="text-base">
                <Cpu className="h-4 w-4 mr-2" />
                AMD Ryzen
              </TabsTrigger>
              <TabsTrigger value="intel" className="text-base">
                <Cpu className="h-4 w-4 mr-2" />
                Intel Xeon
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ryzen">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">AMD Ryzen VPS</h2>
                <p className="text-muted-foreground">Powered by latest AMD Ryzen processors for maximum performance</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ryzenPlans.map((plan) => (
                  <Card 
                    key={plan.name} 
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
                      <CardDescription>{plan.cores}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {plan.price}
                        <span className="text-sm font-normal text-muted-foreground">/mo</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {plan.ram} RAM
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {plan.storage}
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {plan.bandwidth} Bandwidth
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
                        <a href="https://billing.renderbyte.site" target="_blank" rel="noopener noreferrer">
                          Order Now
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="intel">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Intel Xeon VPS</h2>
                <p className="text-muted-foreground">Enterprise-grade Intel Xeon processors for reliability</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {intelPlans.map((plan) => (
                  <Card 
                    key={plan.name} 
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
                      <CardDescription>{plan.cores}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {plan.price}
                        <span className="text-sm font-normal text-muted-foreground">/mo</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {plan.ram} RAM
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {plan.storage}
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {plan.bandwidth} Bandwidth
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
                        <a href="https://billing.renderbyte.site" target="_blank" rel="noopener noreferrer">
                          Order Now
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CloudHosting;
