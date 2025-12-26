import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FlatIcon from "@/components/ui/FlatIcon";
import CloudProviderIconLink from "@/components/ui/CloudProviderIconLink";

const CTASection = () => {
  return (
    <section className="relative border-t border-border/50 bg-gradient-to-br from-primary via-primary to-secondary py-24 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] animate-pulse rounded-full bg-primary-foreground/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] animate-pulse rounded-full bg-primary-foreground/5 blur-[100px]" style={{ animationDelay: "1s" }} />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-foreground/3 blur-[80px]" style={{ animationDelay: "0.5s" }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl animate-fade-in">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-primary-foreground/10 px-5 py-2.5 backdrop-blur-sm ring-1 ring-primary-foreground/20 transition-all hover:bg-primary-foreground/15">
            <FlatIcon name="rocket" size={20} />
            <span className="text-sm font-medium text-primary-foreground">
              Start solving infrastructure challenges today
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Ready to Transform Your
            <br />
            <span className="text-primary-foreground/90">DevOps Workflow?</span>
          </h2>

          <p className="mb-10 text-lg text-primary-foreground/80 leading-relaxed">
            Join thousands of DevOps engineers who trust CloudRelic for expert-level guidance 
            and instant solutions across AWS, GCP, Azure & Oracle Cloud.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/chat">
              <Button
                size="lg"
                variant="secondary"
                className="group gap-2 bg-primary-foreground px-10 py-6 text-base text-primary shadow-2xl shadow-background/30 transition-all duration-300 hover:scale-105 hover:bg-primary-foreground/95 hover:shadow-xl"
              >
                <FlatIcon name="ai" size={20} />
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 px-10 py-6 text-base text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary-foreground/50 hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Cloud providers */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            {(['aws', 'gcp', 'azure', 'oracle'] as const).map((provider) => (
              <div 
                key={provider}
                className="rounded-lg bg-primary-foreground/10 p-3 ring-1 ring-primary-foreground/20 transition-all hover:bg-primary-foreground/15 hover:ring-primary-foreground/30"
              >
                <CloudProviderIconLink provider={provider} size={28} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
