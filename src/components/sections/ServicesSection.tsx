import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FlatIcon from "@/components/ui/FlatIcon";

const services = [
  {
    icon: "automation",
    title: "DevOps Excellence",
    description: "CI/CD pipeline optimization, automation strategies, and monitoring solutions for seamless deployments.",
    items: ["CI/CD Pipelines", "GitOps", "Monitoring", "Container Orchestration"],
    tools: ["docker", "kubernetes", "jenkins", "github"],
  },
  {
    icon: "cloud",
    title: "Multi-Cloud Architecture",
    description: "Best practices for AWS, Azure, GCP & Oracle Cloud with cost optimization and scalability strategies.",
    items: ["Cloud Migration", "Hybrid Architecture", "Cost Optimization", "Auto-Scaling"],
    tools: ["aws", "azure", "gcp", "oracle"],
  },
  {
    icon: "server",
    title: "Infrastructure as Code",
    description: "Terraform, Ansible, and Pulumi expertise for reproducible, version-controlled infrastructure.",
    items: ["Terraform Modules", "Ansible Playbooks", "State Management", "Drift Detection"],
    tools: ["terraform", "github", "gitlab"],
  },
  {
    icon: "network",
    title: "Network & Security",
    description: "Zero-trust architecture, VPC design, and security hardening for enterprise-grade protection.",
    items: ["Zero Trust", "VPC Design", "WAF Configuration", "Compliance"],
    tools: ["security", "monitoring", "analytics"],
  },
];

const ServicesSection = () => {
  return (
    <section className="relative border-t border-border/50 bg-gradient-to-b from-card/30 to-background py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      <div className="absolute inset-0 devops-grid opacity-30" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in">
          <span className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-sm font-medium text-secondary">
            Expert Services
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="gradient-text-devops">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expert consulting services starting at <span className="font-semibold text-primary">$5/hr</span> — enterprise-grade solutions at startup-friendly prices
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-card to-background ring-1 ring-border/50 transition-all duration-300 group-hover:ring-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                    <FlatIcon name={service.icon} size={28} />
                  </div>
                  <div className="flex items-center gap-2">
                    {service.tools.slice(0, 3).map((tool) => (
                      <div 
                        key={tool}
                        className="rounded-lg bg-background/50 p-1.5 ring-1 ring-border/30 transition-all duration-300 group-hover:ring-primary/20"
                      >
                        <FlatIcon name={tool} size={18} />
                      </div>
                    ))}
                    {service.tools.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{service.tools.length - 3}</span>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-5">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link to="/services">
            <Button size="lg" className="group gap-2 px-10 shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
