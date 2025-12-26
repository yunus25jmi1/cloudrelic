import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative border-t border-border bg-primary py-20 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 animate-pulse rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 animate-pulse rounded-full bg-primary-foreground/5 blur-3xl" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-2xl animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm ring-1 ring-primary-foreground/20">
            <Zap className="h-4 w-4 text-primary-foreground animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Start solving infrastructure challenges today
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Transform Your DevOps Workflow?
          </h2>

          <p className="mb-8 text-lg text-primary-foreground/80 leading-relaxed">
            Join DevOps engineers who trust CloudRelic for expert-level guidance and instant solutions.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/chat">
              <Button
                size="lg"
                variant="secondary"
                className="group gap-2 bg-primary-foreground px-8 text-primary shadow-lg shadow-background/20 transition-all hover:scale-105 hover:bg-primary-foreground/90 hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 px-8 text-primary-foreground backdrop-blur-sm transition-all hover:scale-105 hover:border-primary-foreground/50 hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
