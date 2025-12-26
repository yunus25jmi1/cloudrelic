import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Cpu, Zap, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Animated background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-secondary/20 blur-3xl" style={{ animationDelay: "1s" }} />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Zap className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              AI-Powered DevOps Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl animate-fade-in-up">
            Where Cloud Meets Code
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Technical Insights That Matter. Get expert-level DevOps guidance powered by AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/chat">
              <Button size="lg" className="group gap-2 bg-primary px-8 shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                Ask the Expert
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-primary/30 px-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/50 hover:bg-primary/5">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Cloud, label: "Cloud Platforms", value: "AWS, Azure, GCP" },
              { icon: Cpu, label: "AI-Powered", value: "Instant Solutions" },
              { icon: Terminal, label: "Response Time", value: "<200ms" },
              { icon: ArrowRight, label: "Deployment", value: "60% Faster" },
            ].map((stat, index) => (
              <div key={index} className="group rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
