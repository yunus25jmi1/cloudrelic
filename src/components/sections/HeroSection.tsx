import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FlatIcon from "@/components/ui/FlatIcon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      {/* Animated background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-secondary/15 blur-[100px]" style={{ animationDelay: "1s" }} />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-accent/10 blur-[80px]" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* DevOps Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 devops-grid" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 backdrop-blur-sm animate-fade-in transition-all hover:border-primary/50 hover:bg-primary/10">
            <FlatIcon name="lightning" size={18} className="animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Multi-Cloud DevOps Platform
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl animate-fade-in-up">
            <span className="gradient-text-devops">Where Cloud</span>
            <br />
            <span className="text-foreground">Meets Code</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Expert-level DevOps guidance powered by AI. Instant solutions for{" "}
            <span className="text-primary font-medium">AWS</span>,{" "}
            <span className="text-secondary font-medium">GCP</span>,{" "}
            <span className="text-accent font-medium">Azure</span> &{" "}
            <span className="text-foreground font-medium">Oracle Cloud</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/chat">
              <Button size="lg" className="group gap-2 px-10 py-6 text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 glow-cyan">
                <FlatIcon name="ai" size={20} />
                Ask the Expert
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="border-primary/30 px-10 py-6 text-base backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5">
                View Case Studies
              </Button>
            </Link>
          </div>

          {/* Cloud Provider Icons */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Multi-Cloud Architecture Expertise
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {[
                { name: 'aws', label: 'AWS' },
                { name: 'gcp', label: 'GCP' },
                { name: 'azure', label: 'Azure' },
                { name: 'oracle', label: 'Oracle' },
              ].map((provider, index) => (
                <div 
                  key={provider.name}
                  className="group flex flex-col items-center gap-2 transition-all duration-300"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="relative rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card group-hover:shadow-lg group-hover:shadow-primary/10">
                    <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                    <FlatIcon 
                      name={provider.name} 
                      size={40} 
                      className="relative transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    {provider.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: 'rocket', label: "Deployments", value: "60% Faster" },
              { icon: 'performance', label: "Response Time", value: "<200ms" },
              { icon: 'success', label: "Uptime", value: "99.99%" },
              { icon: 'cost', label: "Cost Savings", value: "40% Avg" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="mb-3 flex justify-center">
                  <FlatIcon 
                    name={stat.icon} 
                    size={28} 
                    className="transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                <p className="text-xl font-bold text-foreground sm:text-2xl">{stat.value}</p>
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
