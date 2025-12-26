import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "By removing the hypervisor and connecting directly to NVMe, we achieved 250,000-450,000 IOPS compared to cloud's 10,000-20,000. A workload requiring ten large cloud instances now runs on a single bare metal server.",
    author: "Subhash Choudhary",
    role: "CTO, Dukaan",
    company: "Dukaan",
    metric: "98% cost reduction",
    metricLabel: "$90K → $1.5K/month",
  },
  {
    quote: "The cloud is excellent for early-stage startups, but becomes a margin eater for mature companies. We did not increase our operations headcount—the existing team managed the entire transition, debunking the sysadmin army myth.",
    author: "DHH",
    role: "Co-founder, 37signals",
    company: "37signals",
    metric: "$10M saved",
    metricLabel: "Over 5 years",
  },
  {
    quote: "We use PostgreSQL as a hot cache with fsync=off because the data is ephemeral and regenerable. This eliminates disk I/O latency entirely. Our philosophy: common sense over coolness, FOSS over enterprise.",
    author: "Kailash Nadh",
    role: "CTO, Zerodha",
    company: "Zerodha",
    metric: "1000x faster",
    metricLabel: "Query performance",
  },
  {
    quote: "Cloud is an operating model, not a location. With Talos and Omni, we recreated cloud's developer experience on cheap bare metal. We can provision a physical server in a remote datacenter as easily as a cloud instance.",
    author: "Hathora Engineering",
    role: "Platform Team",
    company: "Hathora",
    metric: "60-70% savings",
    metricLabel: "6 continents deployed",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative border-t border-border/50 bg-gradient-to-b from-card/30 to-background py-20 overflow-hidden">
      <div className="absolute inset-0 devops-grid opacity-30" />
      <div className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            From the Trenches
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What <span className="gradient-text-devops">CTOs Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real quotes from engineering leaders who made the switch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <CardContent className="relative p-6">
                {/* Quote icon */}
                <div className="mb-4 flex items-start justify-between">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{testimonial.metric}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.metricLabel}</div>
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="mb-6 text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 ring-1 ring-primary/20">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <Badge variant="outline" className="ml-auto text-xs border-border/50">
                    {testimonial.company}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
