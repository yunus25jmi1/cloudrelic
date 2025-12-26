import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "When should a startup consider migrating from cloud to bare metal?",
    answer: `Consider bare metal when you have:
    
• **Predictable, stable workloads** – If your traffic patterns are consistent and you're not scaling to zero frequently, you're paying for idle cloud capacity.
• **High cloud bills ($10K+/month)** – At this spend level, bare metal ROI becomes significant. Dukaan was spending $90K/month before their 98% reduction.
• **I/O-intensive applications** – Databases, analytics, and high-throughput systems benefit most from local NVMe storage (20-40x IOPS improvement).
• **Bandwidth-heavy workloads** – Cloud egress costs ($0.09/GB) can be eliminated with bare metal providers that include bandwidth.

If you're a very early-stage startup with unpredictable traffic, cloud's pay-as-you-go model still makes sense.`
  },
  {
    question: "How long does a bare metal migration typically take?",
    answer: `Migration timelines vary based on complexity:

• **Simple applications (stateless)**: 2-4 weeks for planning + execution
• **Database-heavy workloads**: 4-8 weeks including replication setup and testing
• **Full infrastructure migration**: 2-6 months for large-scale moves like 37signals

The key is running hybrid during transition. Most companies keep cloud as disaster recovery even after migration—this provides a safety net and typically adds only 5-10% to costs.`
  },
  {
    question: "What's the typical ROI timeline for bare metal migration?",
    answer: `Based on our case studies:

• **Hardware payback**: Less than 1 year (37signals recouped their $700K investment in under 12 months)
• **Monthly savings start**: Immediately after migration completes
• **5-year savings**: 60-98% reduction in infrastructure costs

For a startup spending $50K/month on cloud, a typical 70% reduction means $420K annual savings. Even accounting for $100K in hardware and migration costs, you're profitable in 3-4 months.`
  },
  {
    question: "Do I need to hire more engineers to manage bare metal?",
    answer: `No—this is a common misconception. Case study evidence:

• **37signals**: Zero additional headcount after their cloud exit
• **Dukaan**: 4-person team (2 interns, 1 SRE, CTO) manages 100 servers
• **Hathora**: 6-person team runs global infrastructure across 6 continents

The key is automation: Kubernetes, ArgoCD, Terraform, and tools like Kamal or Talos Linux eliminate manual operations. Modern bare metal management is API-driven—you're not racking servers or SSHing into machines.`
  },
  {
    question: "What about disaster recovery on bare metal?",
    answer: `The hybrid approach solves this elegantly:

• **Real-time replication to cloud**: PostgreSQL WAL streaming to GCS/S3 provides continuous backup
• **Cloud as hot standby**: Maintain a read replica in cloud that can be promoted in minutes
• **Tested recovery time**: Dukaan achieves 7-10 minute DR recovery

You get the cost benefits of bare metal (99% of the time) with cloud's reliability as insurance (1% disaster scenarios). This hybrid model typically costs 5-10% of your pre-migration cloud bill.`
  },
  {
    question: "Which bare metal providers do you recommend?",
    answer: `It depends on your requirements:

**For fast provisioning (minutes)**:
• OVHcloud – ~120 second deployment, great for EU
• Vultr – 5-15 min, developer-friendly
• Hetzner – Best price/performance ratio

**For global presence**:
• Equinix Metal – Premium, 20+ metros, low latency
• PhoenixNAP – Good for enterprise

**For gaming/edge**:
• Combination approach (like Hathora): Hetzner + OVH + Equinix

We help you evaluate based on your latency requirements, compliance needs, and budget.`
  },
  {
    question: "What if my workload is unpredictable or I need to scale to zero?",
    answer: `In these cases, cloud might still be the right choice—or a hybrid approach:

• **Burstable workloads**: Use bare metal for baseline + cloud for spikes (Flipkart's approach for Big Billion Days)
• **Development/staging**: Keep these on cloud, move production to bare metal
• **True serverless needs**: Some workloads genuinely benefit from scale-to-zero

We'll analyze your actual usage patterns and only recommend migration if the numbers make sense. Not every company should move to bare metal—we'll tell you honestly if cloud is better for your situation.`
  },
];

const FAQSection = () => {
  return (
    <section className="relative border-t border-border/50 py-20 overflow-hidden">
      <div className="absolute inset-0 devops-grid opacity-30" />
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            Common Questions
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked <span className="gradient-text-devops">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about infrastructure optimization and bare metal migration.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80 transition-all"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  <span className="text-sm sm:text-base font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  <div className="prose prose-sm prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                      {faq.answer}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link to="/contact">
            <Button variant="outline" className="gap-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5">
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
