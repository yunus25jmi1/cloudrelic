import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Network, Server, Settings } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "DevOps Excellence",
    description: "CI/CD pipeline optimization, automation strategies, and monitoring solutions for seamless deployments.",
    items: ["CI/CD Pipelines", "Automation", "Monitoring", "Container Orchestration"],
  },
  {
    icon: Cloud,
    title: "Cloud Mastery",
    description: "Best practices for AWS, Azure, and GCP with cost optimization and scalability strategies.",
    items: ["AWS Solutions", "Azure Architecture", "GCP Implementation", "Multi-Cloud"],
  },
  {
    icon: Server,
    title: "Linux Fundamentals",
    description: "System administration, security hardening, and performance tuning for Linux environments.",
    items: ["System Administration", "Security Hardening", "Performance Tuning", "Shell Scripting"],
  },
  {
    icon: Network,
    title: "Network Intelligence",
    description: "Infrastructure design, troubleshooting, and optimization for reliable network architecture.",
    items: ["Infrastructure Design", "Troubleshooting", "Load Balancing", "Security"],
  },
];

const ServicesSection = () => {
  return (
    <section className="border-t border-border bg-card/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert consulting services starting at $5/hr
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/services">
            <Button size="lg" variant="outline" className="gap-2 transition-transform hover:scale-105">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
