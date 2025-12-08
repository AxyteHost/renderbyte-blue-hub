import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready to <span className="text-gradient">Level Up</span>?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          Join thousands of gamers who trust RenderByte for their game server hosting needs. 
          Start your server today with instant deployment.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="xl" asChild>
            <a href="https://billing.renderbyte.site" target="_blank" rel="noopener noreferrer">
              Get Started Now
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://panel.renderbye.site" target="_blank" rel="noopener noreferrer">
              <Gamepad2 className="h-5 w-5" />
              Game Panel
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
