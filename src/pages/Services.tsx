import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Cloud, Network, Server, Settings, TrendingDown, Zap, Shield, Target, DollarSign, Clock, Users, HardDrive, Cpu, Database, Globe, Activity } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import FlatIcon from "@/components/ui/FlatIcon";

// Core services for startups
const startupServices = [
  {
    icon: TrendingDown,
    title: "Cloud Cost Optimization",
    description: "Stop paying cloud tax. We analyze your infrastructure and identify 40-70% savings opportunities.",
    features: [
      "Full cloud bill audit & optimization",
      "Right-sizing instances & storage",
      "Reserved instances & savings plans strategy",
      "Spot/preemptible instance architecture",
      "Bandwidth & egress cost reduction",
      "Multi-cloud arbitrage opportunities",
    ],
    outcome: "Avg. 50% cost reduction",
    price: "Starting at $5/hr",
  },
  {
    icon: Server,
    title: "Bare Metal Migration",
    description: "When cloud doesn't make sense anymore. We help you build Dukaan/37signals-style infrastructure.",
    features: [
      "Cloud vs bare metal cost analysis",
      "Provider selection (Hetzner, OVH, Equinix)",
      "Kubernetes on bare metal setup",
      "PostgreSQL/database migration strategy",
      "Disaster recovery with cloud backup",
      "Zero-downtime migration planning",
    ],
    outcome: "60-98% cost savings",
    price: "Starting at $10/hr",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description: "Eliminate bottlenecks before they hurt. Disk I/O, database queries, and latency optimization.",
    features: [
      "Disk I/O & NVMe optimization",
      "Database query tuning (PostgreSQL, MySQL)",
      "Caching strategy (Redis, PostgreSQL as cache)",
      "CDN & edge deployment",
      "p99 latency optimization",
      "Load testing & capacity planning",
    ],
    outcome: "10-1000x faster queries",
    price: "Starting at $8/hr",
  },
  {
    icon: Shield,
    title: "Reliability Architecture",
    description: "Build Zerodha-style resilience. Silo patterns, failover automation, and disaster recovery.",
    features: [
      "Silo/bulkhead architecture design",
      "Multi-region failover setup",
      "WAL streaming & real-time replication",
      "Automated recovery operators",
      "Chaos engineering & testing",
      "SLA-driven infrastructure design",
    ],
    outcome: "99.9%+ uptime",
    price: "Starting at $10/hr",
  },
];

// Standard technical services
const technicalServices = [
  {
    icon: Settings,
    title: "DevOps Excellence",
    description: "CI/CD, GitOps, and automation that scales with your team.",
    features: [
      "CI/CD Pipeline (GitHub Actions, GitLab CI)",
      "Infrastructure as Code (Terraform, Ansible)",
      "Container Orchestration (Kubernetes, Docker)",
      "GitOps with ArgoCD/Flux",
      "Monitoring (Prometheus, Grafana)",
      "Release automation & rollbacks",
    ],
    price: "Starting at $5/hr",
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Architecture",
    description: "AWS, GCP, Azure expertise for hybrid and multi-cloud strategies.",
    features: [
      "AWS/GCP/Azure architecture design",
      "Multi-cloud disaster recovery",
      "Cloud-native to hybrid transitions",
      "Vendor lock-in mitigation",
      "Cloud bursting for peak loads",
      "Security & compliance reviews",
    ],
    price: "Starting at $10/hr",
  },
  {
    icon: Network,
    title: "Network & Security",
    description: "From VPCs to zero-trust. Secure, fast, reliable networking.",
    features: [
      "Network architecture & VPC design",
      "Load balancing & CDN setup",
      "VPN & private networking",
      "Security hardening (CIS benchmarks)",
      "DDoS mitigation strategies",
      "Firewall & access controls",
    ],
    price: "Starting at $8/hr",
  },
];

// Bare metal providers we work with
const bareMetalProviders = {
  cloudIntegrated: [
    {
      name: "OVHcloud",
      description: "Deploy in ~120 seconds via API",
      regions: "Global (EU, US, APAC)",
      bestFor: "Fast provisioning, European presence",
    },
    {
      name: "Vultr",
      description: "On-demand bare metal, 5-15 min delivery",
      regions: "25+ locations worldwide",
      bestFor: "Quick spin-up, developer-friendly",
    },
    {
      name: "Hetzner",
      description: "Cost-effective European bare metal",
      regions: "Germany, Finland, US",
      bestFor: "Best price/performance ratio",
    },
    {
      name: "PhoenixNAP",
      description: "API-driven global provisioning",
      regions: "US, EU, APAC",
      bestFor: "Enterprise workloads",
    },
    {
      name: "Cherry Servers",
      description: "Flexible APIs, automated provisioning",
      regions: "EU, US",
      bestFor: "Kubernetes bare metal",
    },
    {
      name: "Scaleway",
      description: "European cloud-like orchestration",
      regions: "France, Netherlands, Poland",
      bestFor: "EU data sovereignty",
    },
    {
      name: "Equinix Metal",
      description: "Premium global infrastructure",
      regions: "20+ metros worldwide",
      bestFor: "Low-latency, interconnection",
    },
  ],
  cloudProviders: [
    {
      name: "AWS Bare Metal",
      description: "EC2 i3.metal, c5.metal instances",
      icon: "aws",
    },
    {
      name: "Oracle Cloud",
      description: "Bare Metal with deep customization",
      icon: "oracle",
    },
    {
      name: "IBM Cloud",
      description: "SoftLayer-based global bare metal",
      icon: "server",
    },
  ],
};

// Proven patterns from case studies
const provenPatterns = [
  {
    company: "Dukaan",
    pattern: "NVMe bare metal for I/O-intensive workloads",
    result: "98% cost reduction, 20-40x IOPS improvement",
    icon: "server",
  },
  {
    company: "Flipkart",
    pattern: "Kubernetes as hybrid cloud equalizer",
    result: "350K+ cores managed, 15% CPU savings",
    icon: "kubernetes",
  },
  {
    company: "Zerodha",
    pattern: "Silo architecture for risk isolation",
    result: "14M+ clients, ~30 person team",
    icon: "database",
  },
  {
    company: "37signals",
    pattern: "Kamal for simple, SSH-based deployments",
    result: "$10M savings over 5 years",
    icon: "docker",
  },
  {
    company: "Hathora",
    pattern: "Talos Linux for immutable infrastructure",
    result: "60-70% cost reduction, 6 continents",
    icon: "linux",
  },
  {
    company: "OneUptime",
    pattern: "MicroK8s + Ceph for lightweight K8s",
    result: "76% cost reduction, 19% latency improvement",
    icon: "kubernetes",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - CloudRelic | Startup Infrastructure Consulting</title>
        <meta name="description" content="Infrastructure consulting for growth startups. Cloud cost optimization, bare metal migration, performance engineering. Same strategies as Dukaan, Zerodha, 37signals. Starting at $5/hr." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 -z-10 devops-grid" />
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center animate-fade-in">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                For Growth-Stage Startups
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="gradient-text-devops">Enterprise Infrastructure</span>
                <br />Without Enterprise Complexity
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The same infrastructure strategies that saved Dukaan $88K/month and 37signals $10M—adapted for your startup. 
                No over-engineering. No unnecessary complexity. Just proven patterns that work.
              </p>
              
              {/* Cloud providers */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <FlatIcon name="aws" size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
                <FlatIcon name="gcp" size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
                <FlatIcon name="azure" size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
                <FlatIcon name="oracle" size={32} className="opacity-60 hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 transition-transform hover:scale-105">
                    Get Infrastructure Audit
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="gap-2">
                    View Case Studies
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Startups Choose Us */}
        <section className="border-t border-border/50 bg-card/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Startup-Friendly Pricing</h3>
                <p className="text-sm text-muted-foreground">From $5/hr. No retainers, no minimums. Pay only for what you use.</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">No Over-Engineering</h3>
                <p className="text-sm text-muted-foreground">Right-sized solutions. We won't sell you Kubernetes if a simple VM works.</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Battle-Tested Patterns</h3>
                <p className="text-sm text-muted-foreground">Proven strategies from Dukaan, Zerodha, Flipkart, 37signals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Startup-Focused Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                High-Impact Services
              </Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Where Startups Get Maximum ROI
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These are the infrastructure challenges that, when solved, transform your cost structure and reliability.
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              {startupServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      {service.outcome && (
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                          {service.outcome}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative space-y-6">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-border/50 pt-4">
                      <span className="font-semibold text-primary">{service.price}</span>
                      <Link to="/contact">
                        <Button size="sm" className="gap-2 transition-transform hover:scale-105">
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

        {/* Cost & Performance Comparison Table */}
        <section className="border-t border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                Real Numbers
              </Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Cloud vs Bare Metal: Cost & Performance
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Based on real data from our case studies. Your results will vary based on workload characteristics.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Company</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Cost Reduction</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Performance Gain</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground hidden md:table-cell">Key Metric</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-muted-foreground hidden lg:table-cell">Bottleneck Solved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">D</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground block">Dukaan</span>
                          <span className="text-xs text-muted-foreground">E-commerce SaaS</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                          98% savings
                        </Badge>
                        <div className="text-xs text-muted-foreground">$90K → $1.5K/mo</div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                          20-40x IOPS
                        </Badge>
                        <div className="text-xs text-muted-foreground">250K-450K vs 10K-20K</div>
                      </div>
                    </td>
                    <td className="px-3 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-1.5">
                        <HardDrive className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">7 min DR recovery</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-muted-foreground hidden lg:table-cell">
                      Disk I/O → NVMe direct access
                    </td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">F</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground block">Flipkart</span>
                          <span className="text-xs text-muted-foreground">Enterprise E-com</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                          15% CPU savings
                        </Badge>
                        <div className="text-xs text-muted-foreground">Hypervisor tax eliminated</div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                          350K+ cores
                        </Badge>
                        <div className="text-xs text-muted-foreground">30K+ pods managed</div>
                      </div>
                    </td>
                    <td className="px-3 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-1.5">
                        <Cpu className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">3000+ services</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-muted-foreground hidden lg:table-cell">
                      Scale → K8s hybrid control plane
                    </td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">Z</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground block">Zerodha</span>
                          <span className="text-xs text-muted-foreground">Fintech / Trading</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                          Lean ~30 team
                        </Badge>
                        <div className="text-xs text-muted-foreground">FOSS-first approach</div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                          1000x faster queries
                        </Badge>
                        <div className="text-xs text-muted-foreground">ClickHouse analytics</div>
                      </div>
                    </td>
                    <td className="px-3 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-1.5">
                        <Database className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">14M+ clients</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-muted-foreground hidden lg:table-cell">
                      Latency → PostgreSQL as cache
                    </td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">37</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground block">37signals</span>
                          <span className="text-xs text-muted-foreground">SaaS / Basecamp</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                          $10M over 5yrs
                        </Badge>
                        <div className="text-xs text-muted-foreground">$3.2M → $1.3M/yr</div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                          &lt;1yr payback
                        </Badge>
                        <div className="text-xs text-muted-foreground">Hardware ROI</div>
                      </div>
                    </td>
                    <td className="px-3 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-1.5">
                        <Server className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">0 headcount increase</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-muted-foreground hidden lg:table-cell">
                      Cloud tax → Kamal + colocation
                    </td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">H</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground block">Hathora</span>
                          <span className="text-xs text-muted-foreground">Gaming Infra</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                          60-70% savings
                        </Badge>
                        <div className="text-xs text-muted-foreground">90% on egress alone</div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                          &lt;50ms latency
                        </Badge>
                        <div className="text-xs text-muted-foreground">6 continents edge</div>
                      </div>
                    </td>
                    <td className="px-3 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-1.5">
                        <Globe className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">6 person team</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-muted-foreground hidden lg:table-cell">
                      Bandwidth → Talos + multi-provider
                    </td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">O</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground block">OneUptime</span>
                          <span className="text-xs text-muted-foreground">Observability</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                          76% savings
                        </Badge>
                        <div className="text-xs text-muted-foreground">$300K → $70K/yr</div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                          19% less latency
                        </Badge>
                        <div className="text-xs text-muted-foreground">No noisy neighbors</div>
                      </div>
                    </td>
                    <td className="px-3 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-1.5">
                        <Activity className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">Cloud-independent</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-muted-foreground hidden lg:table-cell">
                      Reliability → MicroK8s + Ceph
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Summary Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/50 bg-card/50 p-4">
                <div className="text-center">
                  <DollarSign className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">60-98%</div>
                  <div className="text-xs text-muted-foreground">Cost Reduction Range</div>
                </div>
              </Card>
              <Card className="border-border/50 bg-card/50 p-4">
                <div className="text-center">
                  <Zap className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">20-1000x</div>
                  <div className="text-xs text-muted-foreground">Performance Improvement</div>
                </div>
              </Card>
              <Card className="border-border/50 bg-card/50 p-4">
                <div className="text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">&lt;1 year</div>
                  <div className="text-xs text-muted-foreground">Hardware Payback</div>
                </div>
              </Card>
              <Card className="border-border/50 bg-card/50 p-4">
                <div className="text-center">
                  <Users className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">4-30</div>
                  <div className="text-xs text-muted-foreground">Infra Team Size</div>
                </div>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Want to calculate your potential savings and performance gains?
              </p>
              <Link to="/contact">
                <Button className="gap-2">
                  Get Free Infrastructure Audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bare Metal Providers Section */}
        <section className="border-t border-border/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                Global Infrastructure Partners
              </Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Bare Metal Providers We Work With
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We help you choose and deploy on the right provider based on your latency, compliance, and cost requirements.
              </p>
            </div>
            
            {/* Cloud-Integrated Bare Metal */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Fast Provisioning (Minutes to Hours)
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {bareMetalProviders.cloudIntegrated.map((provider, index) => (
                  <Card 
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Server className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm">{provider.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{provider.description}</p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            <Badge variant="outline" className="text-xs px-1.5 py-0">
                              {provider.regions}
                            </Badge>
                          </div>
                          <p className="text-xs text-primary mt-2">{provider.bestFor}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Traditional Cloud Bare Metal */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Cloud className="h-5 w-5 text-muted-foreground" />
                Cloud Provider Bare Metal Options
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {bareMetalProviders.cloudProviders.map((provider, index) => (
                  <Card 
                    key={index}
                    className="border-border/50 bg-muted/30 backdrop-blur-sm transition-all duration-300 hover:border-border animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <FlatIcon name={provider.icon} size={24} />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{provider.name}</h4>
                        <p className="text-xs text-muted-foreground">{provider.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Cloud bare metal is useful for hybrid setups where you need tight integration with cloud services.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <Card className="inline-block border-primary/20 bg-primary/5 p-6">
                <p className="text-sm text-muted-foreground mb-3">
                  Not sure which provider fits your workload?
                </p>
                <Link to="/contact">
                  <Button className="gap-2">
                    Get Provider Recommendation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Proven Patterns Section */}
        <section className="border-t border-border/50 bg-muted/20 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                Proven at Scale
              </Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Patterns from Successful Startups
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We implement the same infrastructure patterns used by companies serving millions of users.
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {provenPatterns.map((pattern, index) => (
                <Card 
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <FlatIcon name={pattern.icon} size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">{pattern.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{pattern.pattern}</p>
                        <Badge variant="outline" className="text-xs bg-green-500/5 text-green-600 dark:text-green-400 border-green-500/20">
                          {pattern.result}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/case-studies">
                <Button variant="outline" className="gap-2">
                  Read Full Case Studies
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-border bg-background text-muted-foreground">
                Technical Services
              </Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Full-Stack Infrastructure Support
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                End-to-end technical expertise for all your infrastructure needs.
              </p>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-3">
              {technicalServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <service.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-border/50 pt-4">
                      <span className="text-sm font-medium text-primary">{service.price}</span>
                      <Link to="/contact">
                        <Button size="sm" variant="outline" className="gap-1">
                          Learn More
                          <ArrowRight className="h-3 w-3" />
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
            <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card to-secondary/10 animate-fade-in">
              <div className="absolute inset-0 devops-grid opacity-30" />
              <CardContent className="relative p-8 text-center md:p-12">
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  Free Tool
                </Badge>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Not Sure Where to Start?
                </h2>
                <p className="mb-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Try our AI-powered DevOps assistant for immediate guidance on your infrastructure challenges. 
                  Get personalized recommendations based on your stack.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/chat">
                    <Button size="lg" className="gap-2 transition-transform hover:scale-105">
                      Ask the AI Expert
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="gap-2">
                      Talk to a Human
                      <Users className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
