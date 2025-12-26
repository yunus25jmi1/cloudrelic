import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Cloud, Network, Server, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: Settings,
    title: "DevOps Excellence",
    description: "Transform your development workflow with industry-leading DevOps practices and automation strategies.",
    features: [
      "CI/CD Pipeline Design & Optimization",
      "Jenkins, GitLab CI, GitHub Actions Setup",
      "Infrastructure as Code (Terraform, Ansible)",
      "Container Orchestration (Kubernetes, Docker Swarm)",
      "Monitoring & Alerting (Prometheus, Grafana)",
      "Release Management Strategies",
    ],
    price: "Starting at $5/hr",
  },
  {
    icon: Cloud,
    title: "Cloud Mastery",
    description: "Leverage the full potential of cloud platforms with architecture design and optimization expertise.",
    features: [
      "AWS Well-Architected Reviews",
      "Azure Cloud Adoption Framework",
      "GCP Architecture Design",
      "Multi-Cloud & Hybrid Solutions",
      "Cost Optimization Strategies",
      "Cloud Security Best Practices",
    ],
    price: "Starting at $10/hr",
  },
  {
    icon: Server,
    title: "Linux Fundamentals",
    description: "Master Linux system administration with hands-on guidance for security and performance.",
    features: [
      "System Administration & Configuration",
      "Security Hardening (CIS Benchmarks)",
      "Performance Tuning & Optimization",
      "Shell Scripting & Automation",
      "Backup & Disaster Recovery",
      "Log Management & Analysis",
    ],
    price: "Starting at $5/hr",
  },
  {
    icon: Network,
    title: "Network Intelligence",
    description: "Design and troubleshoot complex network architectures for reliability and performance.",
    features: [
      "Network Architecture Design",
      "Load Balancing & CDN Setup",
      "VPN & Private Network Configuration",
      "DNS & Domain Management",
      "Network Security & Firewalls",
      "Troubleshooting & Diagnostics",
    ],
    price: "Starting at $8/hr",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - CloudRelic | DevOps, Cloud, Linux, Network Consulting</title>
        <meta name="description" content="Expert consulting services for DevOps, Cloud Architecture, Linux Administration, and Network Infrastructure. Starting at $5/hr." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert DevOps consulting and cloud architecture services to accelerate your infrastructure journey. Get personalized guidance from certified professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="border-t border-border bg-card/50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <span className="font-semibold text-primary">{service.price}</span>
                      <Link to="/contact">
                        <Button size="sm" className="gap-2">
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Assistant CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="border-border bg-primary">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
                  Need Instant Help?
                </h2>
                <p className="mb-6 text-primary-foreground/80">
                  Try our AI-powered DevOps assistant for immediate guidance on infrastructure challenges.
                </p>
                <Link to="/chat">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Ask the AI Expert
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
