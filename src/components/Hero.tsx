import { Button } from "@/components/ui/button";
import { Gamepad2, Zap, Shield, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Zap className="h-4 w-4" />
          High Performance Game Hosting
        </div>
        
        <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight tracking-tight opacity-0 animate-fade-in md:text-6xl lg:text-7xl" style={{ animationDelay: '0.2s' }}>
          Power Your Games with{" "}
          <span className="text-gradient">RenderByte</span>
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in md:text-xl" style={{ animationDelay: '0.3s' }}>
          Experience lightning-fast game servers with 99.9% uptime, DDoS protection, 
          and instant setup. Your gaming experience, elevated.
        </p>
        
        <div className="flex flex-col gap-4 opacity-0 animate-fade-in sm:flex-row" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" asChild>
            <a href="https://billing.renderbyte.site" target="_blank" rel="noopener noreferrer">
              Get Started — Client Area
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://panel.renderbye.site" target="_blank" rel="noopener noreferrer">
              <Gamepad2 className="h-5 w-5" />
              Access Game Panel
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 opacity-0 animate-fade-in md:grid-cols-4" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: Zap, label: "Instant Deploy", value: "<1 min" },
            { icon: Shield, label: "DDoS Protected", value: "Always" },
            { icon: Clock, label: "Uptime", value: "99.9%" },
            { icon: Gamepad2, label: "Games Supported", value: "50+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
