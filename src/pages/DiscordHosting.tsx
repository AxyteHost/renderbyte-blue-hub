import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Bot, Zap, Shield } from "lucide-react";

const pythonPlans = [
  { name: "Basic Plan", ram: "512MB", price: "₹49.00", slug: "python-basic" },
  { name: "Mid Plan", ram: "1GB", price: "₹69.00", slug: "python-mid", popular: true },
  { name: "High Plan", ram: "2GB", price: "₹99.00", slug: "python-high" },
];

const nodejsPlans = [
  { name: "Basic Plan", ram: "512MB", price: "₹49.00", slug: "nodejs-basic" },
  { name: "Mid Plan", ram: "1GB", price: "₹69.00", slug: "nodejs-mid", popular: true },
  { name: "High Plan", ram: "2GB", price: "₹99.00", slug: "nodejs-high" },
];

const DiscordHosting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Discord Hosting
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discord Bot <span className="text-gradient">Hosting</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reliable hosting for your Discord bots with 24/7 uptime, instant deployment, and powerful resources.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">24/7 Uptime</h3>
                <p className="text-sm text-muted-foreground">Always online bots</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Easy Deploy</h3>
                <p className="text-sm text-muted-foreground">One-click deployment</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Secure</h3>
                <p className="text-sm text-muted-foreground">Protected environment</p>
              </div>
            </div>
          </div>

          {/* Bot Hosting Plans Tabs */}
          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="python" className="text-base">
                🐍 Python
              </TabsTrigger>
              <TabsTrigger value="nodejs" className="text-base">
                ⬢ Node.js
              </TabsTrigger>
            </TabsList>

            <TabsContent value="python">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Python Bot Hosting</h2>
                <p className="text-muted-foreground">Perfect for discord.py, Pycord, and other Python bots</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {pythonPlans.map((plan) => (
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
                          24/7 Uptime
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Auto Restart
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Console Access
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
            </TabsContent>

            <TabsContent value="nodejs">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Node.js Bot Hosting</h2>
                <p className="text-muted-foreground">Perfect for discord.js and other Node.js bots</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {nodejsPlans.map((plan) => (
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
                          24/7 Uptime
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Auto Restart
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Console Access
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
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiscordHosting;
