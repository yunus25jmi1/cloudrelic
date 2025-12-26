import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FlatIcon from "@/components/ui/FlatIcon";
import { ArrowRight, TrendingUp, Clock, Users, DollarSign, CheckCircle, Server, Database } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 'dukaan-bare-metal',
    title: 'Cloud to Bare Metal: 98% Cost Reduction',
    company: 'Dukaan',
    industry: 'E-Commerce / D2C Platform',
    cloudProviders: ['aws', 'gcp'],
    featured: true,
    challenge: 'Dukaan, a D2C platform for small retailers born during COVID, was spending $90,000/month on cloud infrastructure (AWS/GCP). With 3+ million daily users and unpredictable investor runway, they needed a sustainable cost model without compromising performance or reliability.',
    solution: 'Executed a complete migration from cloud to 100 bare metal servers across multiple geographical locations. Implemented self-hosted PostgreSQL with real-time replication to GCP for disaster recovery. Built a microservices architecture on Kubernetes with ArgoCD for GitOps-based deployments.',
    architecture: [
      '100 bare metal servers across Mumbai, Delhi, Bangalore, Amsterdam',
      'Self-hosted PostgreSQL with real-time WAL replication to GCS',
      'Kubernetes clusters with ArgoCD for automated deployments',
      'Microservices: Auth, Payments, Orders, Search, Analytics, Store',
      'Cloudflare CDN for static asset delivery',
      'GitHub Actions + Docker for CI/CD pipeline',
      'Prometheus + Lens for monitoring and K8s management',
      'Multi-priority worker queues (OTP, payments, marketing)',
    ],
    results: [
      { metric: 'Cost Reduction', value: '98%', icon: DollarSign },
      { metric: 'Monthly Savings', value: '$88.5K', icon: TrendingUp },
      { metric: 'DR Recovery Time', value: '7 min', icon: Clock },
      { metric: 'Infra Team Size', value: '4', icon: Users },
    ],
    testimonial: {
      quote: "Our company is more likely to shut down than our hardware to fail. Modern NVME drives are incredibly reliable, and with proper architecture, a 4-person team can manage infrastructure that competitors need 6-7 engineers for.",
      author: "Subhash Choudary",
      role: "CTO, Dukaan",
    },
    duration: '~18 months evolution',
    teamSize: '4 engineers (2 interns, 1 SRE, CTO)',
    techStack: ['PostgreSQL', 'Docker', 'Kubernetes', 'Terraform', 'ArgoCD', 'Prometheus', 'Cloudflare'],
    keyInsights: [
      'Database disk I/O was the primary bottleneck, not CPU or memory',
      'Bare metal eliminated virtualization overhead for database operations',
      'Real-time cloud backup provides disaster recovery without managing geo-distributed systems',
      'Service ownership model: each team owns their service, infra team owns platform availability',
      'Provisioned for peak load (Shark Tank traffic: 80K users in 30 seconds)',
    ],
  },
  {
    id: 'fintech-scaling',
    title: 'FinTech Startup Scales to 10M Users',
    company: 'PayFlow',
    industry: 'Financial Services',
    cloudProviders: ['aws', 'gcp'],
    challenge: 'PayFlow needed to scale from 100K to 10M users while maintaining PCI-DSS compliance and sub-100ms transaction latency.',
    solution: 'We designed a multi-region active-active architecture using AWS for primary workloads and GCP for disaster recovery. Implemented Kubernetes with Istio for service mesh, auto-scaling policies, and a comprehensive observability stack.',
    architecture: [
      'Multi-region EKS clusters with pod auto-scaling',
      'Aurora PostgreSQL with read replicas across regions',
      'Redis Cluster for session management and caching',
      'Kafka for event streaming with exactly-once semantics',
      'CloudFront + WAF for DDoS protection',
    ],
    results: [
      { metric: 'Latency Reduction', value: '65%', icon: Clock },
      { metric: 'Cost Optimization', value: '40%', icon: DollarSign },
      { metric: 'Uptime Achieved', value: '99.99%', icon: TrendingUp },
      { metric: 'Team Velocity', value: '+3x', icon: Users },
    ],
    testimonial: {
      quote: "CloudRelic transformed our infrastructure from a scaling bottleneck into a competitive advantage. Their multi-cloud expertise was exactly what we needed.",
      author: "Sarah Chen",
      role: "CTO, PayFlow",
    },
    duration: '4 months',
    teamSize: '3 engineers',
  },
  {
    id: 'saas-migration',
    title: 'SaaS Platform Zero-Downtime Migration',
    company: 'DataSync Pro',
    industry: 'Enterprise SaaS',
    cloudProviders: ['azure', 'aws'],
    challenge: 'Legacy monolithic application on-premise needed to be migrated to cloud-native architecture without any downtime for enterprise customers.',
    solution: 'Executed a strangler fig pattern migration, gradually decomposing the monolith into microservices. Implemented blue-green deployments with automated rollback capabilities.',
    architecture: [
      'Azure AKS for container orchestration',
      'Azure Service Bus for async messaging',
      'CosmosDB for multi-model data storage',
      'AWS S3 for cross-cloud backup and archival',
      'Terraform + GitOps for infrastructure automation',
    ],
    results: [
      { metric: 'Zero Downtime', value: '100%', icon: CheckCircle },
      { metric: 'Deploy Frequency', value: '+10x', icon: TrendingUp },
      { metric: 'Infrastructure Cost', value: '-35%', icon: DollarSign },
      { metric: 'MTTR Improvement', value: '80%', icon: Clock },
    ],
    testimonial: {
      quote: "We migrated 500TB of data and 200+ enterprise customers without a single incident. The CloudRelic team's meticulous planning made the impossible possible.",
      author: "Michael Torres",
      role: "VP Engineering, DataSync Pro",
    },
    duration: '6 months',
    teamSize: '4 engineers',
  },
  {
    id: 'healthtech-compliance',
    title: 'HealthTech HIPAA-Compliant Platform',
    company: 'MedConnect',
    industry: 'Healthcare',
    cloudProviders: ['gcp', 'oracle'],
    challenge: 'Build a telehealth platform from scratch that meets HIPAA, SOC 2, and HITRUST requirements while handling real-time video consultations at scale.',
    solution: 'Designed a security-first architecture on GCP Healthcare API with Oracle Cloud for database workloads. Implemented end-to-end encryption, comprehensive audit logging, and automated compliance monitoring.',
    architecture: [
      'GCP Healthcare API with FHIR R4 compliance',
      'Oracle Autonomous Database for PHI storage',
      'WebRTC with SRTP for encrypted video',
      'Cloud Armor + Identity-Aware Proxy for access control',
      'Chronicle SIEM for security monitoring',
    ],
    results: [
      { metric: 'Compliance Achieved', value: '100%', icon: CheckCircle },
      { metric: 'Time to Market', value: '-50%', icon: Clock },
      { metric: 'Security Incidents', value: '0', icon: TrendingUp },
      { metric: 'Concurrent Users', value: '50K+', icon: Users },
    ],
    testimonial: {
      quote: "CloudRelic understood both the technical and regulatory challenges of healthcare. They delivered a platform that passed our audits on the first attempt.",
      author: "Dr. Emily Watson",
      role: "Chief Medical Officer, MedConnect",
    },
    duration: '5 months',
    teamSize: '3 engineers',
  },
  {
    id: 'ecommerce-blackfriday',
    title: 'E-Commerce Black Friday Readiness',
    company: 'ShopWave',
    industry: 'E-Commerce',
    cloudProviders: ['aws', 'azure'],
    challenge: 'Prepare for 100x traffic spike during Black Friday with existing infrastructure that struggled at 5x normal load.',
    solution: 'Implemented predictive auto-scaling, edge caching strategy, and database read replica fan-out. Created a chaos engineering program to validate resilience.',
    architecture: [
      'AWS Auto Scaling with predictive policies',
      'CloudFront with Lambda@Edge for personalization',
      'Aurora Serverless v2 for variable workloads',
      'ElastiCache for cart and session state',
      'Azure Traffic Manager for global load balancing',
    ],
    results: [
      { metric: 'Peak Traffic Handled', value: '150x', icon: TrendingUp },
      { metric: 'Page Load Time', value: '<1.5s', icon: Clock },
      { metric: 'Revenue Increase', value: '+85%', icon: DollarSign },
      { metric: 'Cart Abandonment', value: '-40%', icon: Users },
    ],
    testimonial: {
      quote: "Black Friday used to be our nightmare. Now it's our biggest success. CloudRelic's preparation was worth every penny.",
      author: "James Park",
      role: "CEO, ShopWave",
    },
    duration: '2 months',
    teamSize: '2 engineers',
  },
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | CloudRelic - Real Infrastructure Success Stories</title>
        <meta name="description" content="Explore real-world case studies of how CloudRelic helped startups scale their infrastructure across AWS, GCP, Azure, and Oracle Cloud." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/50 py-20 lg:py-28">
          <div className="absolute inset-0 -z-10 devops-grid" />
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
              Success Stories
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="gradient-text-devops">Real Infrastructure</span>
              <br />Success Stories
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Discover how we've helped startups and enterprises solve their toughest infrastructure 
              challenges across multi-cloud environments.
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
                          Our Solution
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

                    {/* Tech Stack (for featured studies) */}
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

                    {/* Key Insights (for featured studies) */}
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
                            <result.icon className="mx-auto mb-2 h-6 w-6 text-primary transition-transform group-hover/result:scale-110" />
                            <p className="text-2xl font-bold text-foreground">{result.value}</p>
                            <p className="text-xs text-muted-foreground">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="relative rounded-xl border-l-4 border-primary bg-primary/5 p-6">
                      <p className="mb-4 text-lg italic text-foreground">
                        "{study.testimonial.quote}"
                      </p>
                      <footer className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                        <div>
                          <p className="font-semibold text-foreground">{study.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-gradient-to-b from-card to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ready to Write Your Success Story?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Let's discuss how we can help you overcome your infrastructure challenges and achieve similar results.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="group gap-2 shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/chat">
                <Button size="lg" variant="outline" className="gap-2 border-primary/30 transition-all hover:scale-105 hover:border-primary/50 hover:bg-primary/5">
                  Chat with AI Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudies;
