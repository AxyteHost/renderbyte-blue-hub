import { Server, Shield, Zap, Globe, Headphones, Cpu } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Premium Hardware",
    description: "Enterprise-grade servers with NVMe SSDs, high-frequency CPUs, and DDR5 RAM for maximum performance.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Advanced multi-layer DDoS mitigation keeps your servers online and your players happy.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Your server is deployed automatically within seconds. No waiting, no hassle.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Multiple datacenter locations worldwide ensure low latency for players everywhere.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert support team is available around the clock to help you with any issues.",
  },
  {
    icon: Cpu,
    title: "Full Control",
    description: "Access our powerful game panel for complete control over your server settings and files.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Why Choose <span className="text-gradient">RenderByte</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We provide everything you need to run successful game servers with premium features included.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-glow-sm">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
