import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="border-t border-border bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-2xl animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
            <Zap className="h-4 w-4 text-primary-foreground" />
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
                className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-transform hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-transform hover:scale-105"
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
