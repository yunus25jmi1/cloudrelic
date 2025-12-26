import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Server, Zap, Shield, Database, Clock } from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "Cloud Cost Optimization",
    description: "Stop paying cloud tax. We analyze your infrastructure and identify 40-70% savings opportunities through right-sizing, reserved instances, and architecture optimization.",
    badge: "Avg. 50% savings",
    badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
  {
    icon: Server,
    title: "Bare Metal Migration",
    description: "When cloud doesn't make sense anymore. We help you build Dukaan/37signals-style infrastructure with 60-98% cost reduction.",
    badge: "98% max savings",
    badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description: "Eliminate bottlenecks before they hurt. Disk I/O optimization, database query tuning, and p99 latency improvements.",
    badge: "20-1000x faster",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    icon: Shield,
    title: "Reliability Architecture",
    description: "Build Zerodha-style resilience with silo patterns, automated failover, and WAL streaming for near-zero RPO disaster recovery.",
    badge: "99.9%+ uptime",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: Database,
    title: "Database Optimization",
    description: "PostgreSQL tuning, ClickHouse for analytics, and caching strategies that delivered 1000x query improvements for fintech scale.",
    badge: "Proven at scale",
    badgeColor: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    icon: Clock,
    title: "Rapid Implementation",
    description: "No over-engineering. Right-sized solutions from day one. We won't sell you Kubernetes if a simple VM works for your use case.",
    badge: "From $5/hr",
    badgeColor: "bg-muted text-muted-foreground border-border",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative border-t border-border/50 bg-gradient-to-b from-background to-card/30 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[100px]" />
      <div className="absolute inset-0 devops-grid opacity-50" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            What We Do
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="gradient-text-devops">High-Impact</span> Infrastructure Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The same strategies that power companies like Dukaan, Zerodha, Flipkart, and 37signals—without the enterprise complexity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <CardHeader className="relative pb-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-card to-background ring-1 ring-border/50 transition-all duration-300 group-hover:ring-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <Badge variant="outline" className={`text-xs shrink-0 ${feature.badgeColor}`}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
