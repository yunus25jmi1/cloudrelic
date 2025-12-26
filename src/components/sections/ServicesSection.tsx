import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Zap, Clock, Users, Server, HardDrive, Database, Globe } from "lucide-react";

const caseStudyHighlights = [
  {
    company: "Dukaan",
    industry: "E-commerce SaaS",
    costSaving: "98%",
    perfGain: "20-40x IOPS",
    metric: "$90K → $1.5K/mo",
    icon: HardDrive,
  },
  {
    company: "Zerodha",
    industry: "Fintech / Trading",
    costSaving: "Lean team",
    perfGain: "1000x queries",
    metric: "14M+ clients",
    icon: Database,
  },
  {
    company: "37signals",
    industry: "SaaS / Basecamp",
    costSaving: "$10M",
    perfGain: "<1yr payback",
    metric: "5-year savings",
    icon: Server,
  },
  {
    company: "Hathora",
    industry: "Gaming Infra",
    costSaving: "60-70%",
    perfGain: "<50ms latency",
    metric: "6 continents",
    icon: Globe,
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
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            Proven Results
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Real <span className="gradient-text-devops">Startup Outcomes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These companies achieved massive cost reductions and performance gains. We implement the same patterns for your startup.
          </p>
        </div>

        {/* Case Study Highlights */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {caseStudyHighlights.map((study, index) => (
            <Card 
              key={index} 
              className="group relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <CardContent className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110">
                    <study.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                    {study.costSaving}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-foreground mb-1">{study.company}</h3>
                <p className="text-xs text-muted-foreground mb-3">{study.industry}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="h-3.5 w-3.5 text-blue-500" />
                    <span className="text-sm text-foreground">{study.perfGain}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-3.5 w-3.5 text-green-500" />
                    <span className="text-sm text-muted-foreground">{study.metric}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm p-5">
            <div className="text-center">
              <DollarSign className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">60-98%</div>
              <div className="text-xs text-muted-foreground">Cost Reduction</div>
            </div>
          </Card>
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm p-5">
            <div className="text-center">
              <Zap className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">20-1000x</div>
              <div className="text-xs text-muted-foreground">Performance Gain</div>
            </div>
          </Card>
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm p-5">
            <div className="text-center">
              <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">&lt;1 year</div>
              <div className="text-xs text-muted-foreground">Hardware Payback</div>
            </div>
          </Card>
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm p-5">
            <div className="text-center">
              <Users className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">4-30</div>
              <div className="text-xs text-muted-foreground">Infra Team Size</div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link to="/case-studies">
            <Button size="lg" className="group gap-2 px-10 shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40">
              Read Full Case Studies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="gap-2 border-primary/30 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5">
              View Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
