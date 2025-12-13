import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Server, Gamepad2, Cloud, Bot, MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Server className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Render<span className="text-gradient">Byte</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/game-hosting" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1">
            <Gamepad2 className="h-4 w-4" />
            Game Hosting
          </Link>
          <Link to="/discord-hosting" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1">
            <Bot className="h-4 w-4" />
            Discord Hosting
          </Link>
          <Link to="/cloud-hosting" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1">
            <Cloud className="h-4 w-4" />
            Cloud Hosting
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="heroOutline" size="sm" asChild>
            <a href="https://dsc.gg/renderbyte" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="https://billing.renderbyte.site" target="_blank" rel="noopener noreferrer">
              Client Area
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
