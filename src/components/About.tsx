import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-24">
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              About <span className="text-gradient">RenderByte</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              RenderByte is a leading game server hosting provider dedicated to delivering 
              exceptional performance and reliability. We understand gamers because we are gamers.
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              Our mission is to provide affordable, high-quality game hosting solutions 
              that empower communities to create memorable gaming experiences.
            </p>
            
            <ul className="mb-8 space-y-4">
              {[
                "Premium hardware in multiple locations",
                "Transparent pricing with no hidden fees",
                "Dedicated customer support team",
                "Automated backups and mod support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild>
              <a href="https://billing.renderbyte.site" target="_blank" rel="noopener noreferrer">
                Start Your Journey
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
            <div className="relative rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm">
              <div className="mb-6 text-center">
                <span className="text-6xl font-black text-gradient">5+</span>
                <p className="mt-2 text-lg text-muted-foreground">Years of Experience</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">10K+</span>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">50+</span>
                  <p className="text-sm text-muted-foreground">Game Titles</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">99.9%</span>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">24/7</span>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
