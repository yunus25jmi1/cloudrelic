import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FlatIcon from "@/components/ui/FlatIcon";
import { ArrowRight, TrendingUp, Clock, Users, DollarSign, CheckCircle, Server, Database, Cpu, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 'dukaan-bare-metal',
    title: 'Cloud to Bare Metal: 98% Cost Reduction',
    company: 'Dukaan',
    industry: 'E-Commerce Enabler (SaaS)',
    cloudProviders: ['aws', 'gcp'],
    featured: true,
    challenge: 'Dukaan\'s monthly cloud bill had ballooned to $90,000. The primary bottleneck was Disk I/O—millions of small read/write operations for inventory, transactions, and product details. On AWS, achieving necessary IOPS required expensive "Provisioned IOPS" volumes, with costs scaling aggressively with performance.',
    solution: 'Migrated to bare metal servers with local NVMe storage, eliminating the hypervisor and connecting the database directly to the NVMe interface via PCIe bus. Implemented PostgreSQL WAL streaming to GCS for real-time backup and maintained a read replica in GCP for disaster recovery.',
    architecture: [
      '100 bare metal servers across Mumbai, Delhi, Bangalore, Amsterdam',
      'Self-hosted PostgreSQL with real-time WAL streaming to GCS',
      'Hybrid read replicas in GCP for disaster recovery',
      'Kubernetes clusters with ArgoCD for GitOps deployments',
      'Microservices: Auth, Payments, Orders, Search, Analytics',
      'Cloudflare CDN for static assets',
      'Prometheus + Lens for monitoring',
      '7-10 minute failover time with automated replica promotion',
    ],
    results: [
      { metric: 'Cost Reduction', value: '98%', icon: DollarSign },
      { metric: 'Monthly Savings', value: '$88.5K', icon: TrendingUp },
      { metric: 'IOPS Improvement', value: '20-40x', icon: HardDrive },
      { metric: 'DR Recovery Time', value: '7 min', icon: Clock },
    ],
    testimonial: {
      quote: "By removing the hypervisor and connecting directly to NVMe, we achieved 250,000-450,000 IOPS compared to cloud's 10,000-20,000. A workload requiring ten large cloud instances now runs on a single bare metal server.",
      author: "Subhash Choudhary",
      role: "CTO, Dukaan",
    },
    duration: '~18 months evolution',
    teamSize: '4 engineers (2 interns, 1 SRE, CTO)',
    techStack: ['PostgreSQL', 'Docker', 'Kubernetes', 'ArgoCD', 'Prometheus', 'Cloudflare', 'NVMe'],
    keyInsights: [
      'Disk I/O was the primary bottleneck, not CPU or memory',
      'Local NVMe delivers 250k-450k IOPS vs cloud\'s 10k-20k IOPS',
      'Hybrid approach: fast bare metal for 99.9% of time, cloud as insurance',
      'WAL streaming provides near-zero RPO for disaster recovery',
      'Eliminated IOPS tax, compute consolidation, and inter-AZ bandwidth charges',
    ],
  },
  {
    id: 'flipkart-kubernetes',
    title: 'Hybrid Cloud: 350K+ Cores on Bare Metal K8s',
    company: 'Flipkart',
    industry: 'E-Commerce (Enterprise)',
    cloudProviders: ['aws', 'gcp'],
    featured: true,
    challenge: 'India\'s largest e-commerce platform needed to handle "Big Billion Days" traffic spikes. Pure cloud for base load would destroy margins, but 100% on-premise for a 3-day peak was wasteful. Managing 350,000+ cores, 30,000 pods, and 3,000 services required a unified control plane.',
    solution: 'Built the Flipkart Cloud Platform (FCP) - a hybrid architecture using Kubernetes as the "Great Equalizer." Migrated from QEMU-based VMs to containerized architecture on bare metal with custom Kubernetes Operators for automated stateful workload management.',
    architecture: [
      '350,000+ cores managed via unified control plane',
      '30,000+ pods across 3,000+ services',
      'Kubernetes on bare metal with OpenEBS for storage',
      'Local Attached Storage (LASS) for maximum I/O throughput',
      'Custom Schedule Maintenance Operator for zero-downtime hardware maintenance',
      'TiDB, MySQL, Aerospike on StatefulSets',
      'Four-level recovery loop for reliability',
      'Cloud bursting for peak sales events only',
    ],
    results: [
      { metric: 'Cores Managed', value: '350K+', icon: Cpu },
      { metric: 'Active Pods', value: '30K+', icon: Server },
      { metric: 'CPU Savings', value: '15%', icon: TrendingUp },
      { metric: 'Services', value: '3000+', icon: Database },
    ],
    testimonial: {
      quote: "Kubernetes became our 'Great Equalizer' - abstracting whether workloads run on bare metal or cloud. Our custom Operators recreate cloud-like elasticity on rigid hardware, allowing zero-downtime maintenance.",
      author: "Flipkart Platform Team",
      role: "Engineering",
    },
    duration: 'Multi-year evolution',
    teamSize: 'Large platform team',
    techStack: ['Kubernetes', 'OpenEBS', 'TiDB', 'MySQL', 'Aerospike', 'Custom Operators'],
    keyInsights: [
      'Kubernetes abstracts the compute layer, enabling true hybrid cloud',
      'Custom Operators automate complex stateful workload recovery',
      'Avoiding hypervisor tax saves 10-15% CPU cycles',
      'Cloud bursting only for sales events minimizes dormant CapEx',
      'Four-level recovery: K8s control loop → Operator logic → human → escalation',
    ],
  },
  {
    id: 'zerodha-silo',
    title: 'The "Silo" Architecture: Billions of Records',
    company: 'Zerodha',
    industry: 'Financial Services / Fintech',
    cloudProviders: ['aws'],
    featured: true,
    challenge: 'India\'s largest stockbroker processes millions of trades daily where millisecond delays cause financial loss. Standard caching (Redis) was insufficient for diverse report filtering. Querying the transactional database for analytics would degrade trading performance.',
    solution: 'Pioneered a "Silo" architecture with independent shards for risk isolation. Developed sql-jobber for distributed queries and used PostgreSQL as a "hot cache" with radical tuning (fsync=off). Migrated analytics to ClickHouse for 1000x query improvement.',
    architecture: [
      'Independent "Silo" stacks: Web/App servers, OMS, Database per user segment',
      '44 exchange leased lines directly to NSE and BSE',
      'PostgreSQL as high-speed ephemeral cache (fsync=off, synchronous_commit=off)',
      'sql-jobber: custom distributed job queue for report generation',
      'ClickHouse for 20TB+ historical analytics (compressed to 4TB)',
      'Multiple data centers: Mumbai and Chennai',
      'Direct exchange connectivity bypassing public internet',
      'Daily cache database reset to prevent bloat',
    ],
    results: [
      { metric: 'Query Speed', value: '1000x', icon: TrendingUp },
      { metric: 'Storage Compression', value: '5x', icon: HardDrive },
      { metric: 'Team Size', value: '~30', icon: Users },
      { metric: 'Clients Served', value: '14M+', icon: Users },
    ],
    testimonial: {
      quote: "We use PostgreSQL as a hot cache with fsync=off because the data is ephemeral and regenerable. This eliminates disk I/O latency entirely. Our philosophy: common sense over coolness, FOSS over enterprise.",
      author: "Kailash Nadh",
      role: "CTO, Zerodha",
    },
    duration: 'Continuous evolution',
    teamSize: '~30 engineers',
    techStack: ['PostgreSQL', 'ClickHouse', 'sql-jobber', 'Custom tooling', 'FOSS stack'],
    keyInsights: [
      'Silo architecture provides bulkhead pattern - failures affect only a fraction of users',
      'PostgreSQL can be tuned as cache when durability isn\'t needed',
      'ClickHouse reduced 20TB to 4TB with 1000x query improvement',
      'Direct exchange lines bypass internet for trade execution',
      'Lean team with FOSS-first approach maintains high margins',
    ],
  },
  {
    id: 'hathora-edge',
    title: 'Global Edge: 60-70% Cost Reduction',
    company: 'Hathora',
    industry: 'Gaming Infrastructure',
    cloudProviders: ['aws', 'gcp', 'azure'],
    challenge: 'Multiplayer gaming requires sub-50ms latency (edge servers) and is bandwidth-intensive. AWS charges ~$0.09/GB for egress. For popular games, bandwidth costs exceeded compute costs. Standard cloud economics made the business model unviable.',
    solution: 'Hybrid model leveraging bare metal providers (Hetzner, OVH, Equinix) for base capacity with cloud for bursting. Deployed Talos Linux (immutable, no SSH) with Sidero Omni for unified control plane across disparate providers worldwide.',
    architecture: [
      'Bare metal servers across 6 continents',
      'Talos Linux: immutable OS, no SSH, API-driven configuration',
      'Sidero Omni: SaaS control plane for PXE boot and K8s cluster joining',
      'Multi-provider fleet: Hetzner, OVH, Equinix, cloud for burst',
      '90% cheaper egress vs hyperscalers',
      'Atomic A/B partition swap for updates',
      'Bit-for-bit identical nodes (no configuration drift)',
      'Cloud only for burst capacity',
    ],
    results: [
      { metric: 'Cost Reduction', value: '60-70%', icon: DollarSign },
      { metric: 'Egress Savings', value: '90%', icon: TrendingUp },
      { metric: 'Team Size', value: '6', icon: Users },
      { metric: 'Continents', value: '6', icon: Server },
    ],
    testimonial: {
      quote: "Cloud is an operating model, not a location. With Talos and Omni, we recreated cloud's developer experience on cheap bare metal. We can provision a physical server in a remote datacenter as easily as a cloud instance.",
      author: "Hathora Engineering",
      role: "Platform Team",
    },
    duration: 'Ongoing',
    teamSize: '6 engineers',
    techStack: ['Talos Linux', 'Sidero Omni', 'Kubernetes', 'Hetzner', 'OVH', 'Equinix'],
    keyInsights: [
      'Bare metal providers include large bandwidth allocations (e.g., 20TB free)',
      'Talos Linux eliminates configuration drift with immutable, API-driven OS',
      'Sidero Omni provides "Bring Your Own Cloud" control plane',
      'Commodity infrastructure providers compete purely on price/performance',
      'Small team manages global fleet through automation',
    ],
  },
  {
    id: '37signals-cloud-exit',
    title: 'The Cloud Exit: $10M Savings Over 5 Years',
    company: '37signals (Basecamp/HEY)',
    industry: 'SaaS / Project Management & Email',
    cloudProviders: ['aws'],
    challenge: 'Annual AWS bill reached $3.2 million. For a company with stable growth and predictable workloads, paying premium cloud "rental" prices was economically irrational. The cloud had become a "margin eater" rather than an enabler.',
    solution: 'Purchased Dell R7625 servers with AMD EPYC processors for colocation in Chicago and Ashburn. Built and open-sourced Kamal as an alternative to Kubernetes - a simple, imperative deployment tool using Docker and SSH.',
    architecture: [
      '~$700K investment in Dell R7625 servers',
      '~4,000 vCPUs, 7,680GB RAM in owned hardware',
      'Two geographically dispersed colocations (Chicago, Ashburn)',
      'Kamal: imperative deployment via Docker + SSH (no K8s)',
      'Pure Storage FlashBlade for 10PB object storage',
      'No complex management plane, etcd, or agents required',
      'Standard SSH for server access',
      'Storage hardware ROI: 1 year = S3 annual cost',
    ],
    results: [
      { metric: '5-Year Savings', value: '$10M', icon: DollarSign },
      { metric: 'Annual Reduction', value: '$1.9M', icon: TrendingUp },
      { metric: 'Hardware Payback', value: '<1 year', icon: Clock },
      { metric: 'Team Increase', value: '0', icon: Users },
    ],
    testimonial: {
      quote: "The cloud is excellent for early-stage startups, but becomes a margin eater for mature companies. We did not increase our operations headcount - the existing team managed the entire transition, debunking the sysadmin army myth.",
      author: "DHH",
      role: "Co-founder, 37signals",
    },
    duration: '~2 years transition',
    teamSize: 'Existing ops team (no increase)',
    techStack: ['Kamal', 'Docker', 'Dell R7625', 'AMD EPYC', 'Pure Storage FlashBlade'],
    keyInsights: [
      'Hardware investment recouped in less than one year',
      'Kamal: anti-Kubernetes philosophy - imperative, simple, SSH-based',
      'Pure Storage cost ≈ 1 year of S3 bill, saving $4M over 5 years on storage alone',
      'No additional headcount required for on-premise management',
      'Cloud economics invert at scale for predictable workloads',
    ],
  },
  {
    id: 'oneuptime-reliability',
    title: 'Reliability via Independence: 76% Cost Reduction',
    company: 'OneUptime',
    industry: 'Observability / Status Pages',
    cloudProviders: ['aws'],
    challenge: 'Hosting a status page service on AWS created a paradox: if us-east-1 went down, OneUptime would also go down, unable to inform customers about the outage. To truly monitor the cloud, they had to exist outside it. AWS bandwidth was 22% of their bill.',
    solution: 'Moved to bare metal in colocation facilities using MicroK8s (lightweight K8s by Canonical) and Ceph for distributed storage. This provided cloud-like storage reliability on commodity hardware while eliminating bandwidth costs.',
    architecture: [
      'Bare metal servers in colocation facilities',
      'MicroK8s: lightweight, zero-ops Kubernetes distribution',
      'Ceph: open-source distributed storage with automatic rebuilds',
      'Multi-node data replication (cloud-like durability)',
      'Independence from cloud provider failures',
      'Eliminated bandwidth/egress costs',
      'Built-in add-ons for networking and storage',
      'True "monitoring of the cloud" capability',
    ],
    results: [
      { metric: 'Cost Reduction', value: '76%', icon: DollarSign },
      { metric: 'Latency Reduction', value: '19%', icon: Clock },
      { metric: 'Bandwidth Savings', value: '~100%', icon: TrendingUp },
      { metric: 'Annual Savings', value: '$230K', icon: DollarSign },
    ],
    testimonial: {
      quote: "AWS Savings Plans (37% off) still left us paying list price for bandwidth - 22% of our bill. Bare metal eliminated bandwidth costs entirely. We also achieved 19% latency reduction by eliminating noisy neighbors.",
      author: "OneUptime Team",
      role: "Engineering",
    },
    duration: '2+ years running',
    teamSize: 'Small team',
    techStack: ['MicroK8s', 'Ceph', 'Canonical Ubuntu', 'Bare metal'],
    keyInsights: [
      'Status page services must exist outside the cloud they monitor',
      'Ceph provides cloud-like storage durability on commodity hardware',
      'MicroK8s eliminates Kubernetes operational complexity',
      'Eliminating "noisy neighbors" provides consistent p99 latency',
      'Bandwidth costs often hidden until you analyze the full bill',
    ],
  },
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | CloudRelic - Cloud Repatriation Success Stories</title>
        <meta name="description" content="Explore real-world case studies of cloud to bare metal migrations: Dukaan (98% savings), Flipkart (350K cores), Zerodha (fintech scale), 37signals ($10M savings), and more." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/50 py-20 lg:py-28">
          <div className="absolute inset-0 -z-10 devops-grid" />
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
              Cloud Repatriation Stories
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="gradient-text-devops">The Great Repatriation:</span>
              <br />From Cloud to Bare Metal
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Technical deep-dives into how companies achieved 60-98% cost reductions by migrating from 
              public cloud to bare metal infrastructure. Real architectures, real savings, real lessons.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <Card 
                  key={study.id}
                  className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 animate-fade-in-up ${study.featured ? 'ring-2 ring-primary/30' : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Featured badge */}
                  {study.featured && (
                    <div className="absolute right-4 top-4 z-10">
                      <Badge className="bg-primary text-primary-foreground shadow-lg">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <CardHeader className="relative pb-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {study.industry}
                          </Badge>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{study.duration}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{study.teamSize}</span>
                        </div>
                        <CardTitle className="mb-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-3xl">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {study.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-3 mt-8 sm:mt-0">
                        {study.cloudProviders.map((provider) => (
                          <div 
                            key={provider} 
                            className="rounded-lg bg-card p-2 ring-1 ring-border/50 transition-all duration-300 group-hover:ring-primary/30"
                          >
                            <FlatIcon name={provider} size={32} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative space-y-8">
                    {/* Challenge & Solution */}
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
                        <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 text-xs text-destructive">!</span>
                          The Challenge
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>
                      <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-6">
                        <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-xs text-secondary">✓</span>
                          The Solution
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Architecture */}
                    <div>
                      <h4 className="mb-4 font-semibold text-foreground">Architecture Highlights</h4>
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {study.architecture.map((item, i) => (
                          <div 
                            key={i}
                            className="flex items-start gap-2 rounded-lg border border-border/50 bg-card/50 p-3 text-sm transition-all hover:border-primary/30 hover:bg-card"
                          >
                            <FlatIcon name="settings" size={16} className="mt-0.5 flex-shrink-0 opacity-60" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    {study.techStack && (
                      <div>
                        <h4 className="mb-4 font-semibold text-foreground">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.map((tech, i) => (
                            <Badge 
                              key={i}
                              variant="outline"
                              className="border-primary/30 bg-primary/5 text-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Insights */}
                    {study.keyInsights && (
                      <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
                        <h4 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                          <Database className="h-5 w-5 text-accent" />
                          Key Engineering Insights
                        </h4>
                        <ul className="space-y-2">
                          {study.keyInsights.map((insight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Results */}
                    <div>
                      <h4 className="mb-4 font-semibold text-foreground">Key Results</h4>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {study.results.map((result, i) => (
                          <div 
                            key={i}
                            className="group/result rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-4 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                          >
                            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/result:bg-primary/20">
                              <result.icon className="h-5 w-5" />
                            </div>
                            <div className="text-2xl font-bold text-foreground">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="relative rounded-xl border border-primary/20 bg-primary/5 p-6">
                      <div className="absolute -top-3 left-6 text-4xl text-primary/30">"</div>
                      <p className="mb-4 italic text-muted-foreground">
                        {study.testimonial.quote}
                      </p>
                      <footer className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20" />
                        <div>
                          <div className="font-medium text-foreground">{study.testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="border-t border-border/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                Technical Comparison
              </Badge>
              <h2 className="text-3xl font-bold text-foreground">Cloud vs Bare Metal Metrics</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left font-semibold text-foreground">Metric</th>
                    <th className="p-4 text-left font-semibold text-foreground">Public Cloud (Typical)</th>
                    <th className="p-4 text-left font-semibold text-foreground">Bare Metal (Typical)</th>
                    <th className="p-4 text-left font-semibold text-foreground">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-muted/30">
                    <td className="p-4 text-muted-foreground">Disk IOPS</td>
                    <td className="p-4 text-muted-foreground">16,000 - 64,000</td>
                    <td className="p-4 font-medium text-secondary">250,000 - 1,000,000</td>
                    <td className="p-4 text-primary">20x - 50x gain</td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="p-4 text-muted-foreground">I/O Latency</td>
                    <td className="p-4 text-muted-foreground">1ms - 5ms</td>
                    <td className="p-4 font-medium text-secondary">20μs - 100μs</td>
                    <td className="p-4 text-primary">Massive reduction</td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="p-4 text-muted-foreground">Cost per Core</td>
                    <td className="p-4 text-muted-foreground">~$0.08 - $0.12/hr</td>
                    <td className="p-4 font-medium text-secondary">~$0.01 - $0.03/hr</td>
                    <td className="p-4 text-primary">60% - 80% savings</td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="p-4 text-muted-foreground">Egress Fees</td>
                    <td className="p-4 text-muted-foreground">~$0.09/GB</td>
                    <td className="p-4 font-medium text-secondary">Free or nominal</td>
                    <td className="p-4 text-primary">90% savings</td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="p-4 text-muted-foreground">Network Latency</td>
                    <td className="p-4 text-muted-foreground">Variable (noisy neighbors)</td>
                    <td className="p-4 font-medium text-secondary">Consistent (dedicated)</td>
                    <td className="p-4 text-primary">Predictable p99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ready to Explore Cloud Repatriation?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Let's analyze your workloads and determine if bare metal or hybrid infrastructure 
              could unlock significant savings for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  Start Your Analysis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudies;
