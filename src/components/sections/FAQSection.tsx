import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

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
            {/* FAQ 1 */}
            <AccordionItem 
              value="item-0"
              className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                <span className="text-sm sm:text-base font-medium pr-4">When should a startup consider migrating from cloud to bare metal?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>Consider bare metal when you have:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Predictable, stable workloads</strong> – If your traffic patterns are consistent and you're not scaling to zero frequently, you're paying for idle cloud capacity.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">High cloud bills ($10K+/month)</strong> – At this spend level, bare metal ROI becomes significant. Dukaan was spending $90K/month before their 98% reduction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">I/O-intensive applications</strong> – Databases, analytics, and high-throughput systems benefit most from local NVMe storage (20-40x IOPS improvement).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Bandwidth-heavy workloads</strong> – Cloud egress costs ($0.09/GB) can be eliminated with bare metal providers that include bandwidth.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground italic pt-2">If you're a very early-stage startup with unpredictable traffic, cloud's pay-as-you-go model still makes sense.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 2 */}
            <AccordionItem 
              value="item-1"
              className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                <span className="text-sm sm:text-base font-medium pr-4">How long does a bare metal migration typically take?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>Migration timelines vary based on complexity:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Simple applications (stateless):</strong> 2-4 weeks for planning + execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Database-heavy workloads:</strong> 4-8 weeks including replication setup and testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Full infrastructure migration:</strong> 2-6 months for large-scale moves like 37signals</span>
                    </li>
                  </ul>
                  <p className="pt-2">The key is running hybrid during transition. Most companies keep cloud as disaster recovery even after migration—this provides a safety net and typically adds only 5-10% to costs.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 3 */}
            <AccordionItem 
              value="item-2"
              className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                <span className="text-sm sm:text-base font-medium pr-4">What's the typical ROI timeline for bare metal migration?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>Based on our case studies:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Hardware payback:</strong> Less than 1 year (37signals recouped their $700K investment in under 12 months)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Monthly savings start:</strong> Immediately after migration completes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">5-year savings:</strong> 60-98% reduction in infrastructure costs</span>
                    </li>
                  </ul>
                  <p className="pt-2">For a startup spending $50K/month on cloud, a typical 70% reduction means $420K annual savings. Even accounting for $100K in hardware and migration costs, you're profitable in 3-4 months.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 4 */}
            <AccordionItem 
              value="item-3"
              className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                <span className="text-sm sm:text-base font-medium pr-4">Do I need to hire more engineers to manage bare metal?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>No—this is a common misconception. Case study evidence:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">37signals:</strong> Zero additional headcount after their cloud exit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Dukaan:</strong> 4-person team (2 interns, 1 SRE, CTO) manages 100 servers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Hathora:</strong> 6-person team runs global infrastructure across 6 continents</span>
                    </li>
                  </ul>
                  <p className="pt-2">The key is automation: Kubernetes, ArgoCD, Terraform, and tools like Kamal or Talos Linux eliminate manual operations. Modern bare metal management is API-driven—you're not racking servers or SSHing into machines.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 5 */}
            <AccordionItem 
              value="item-4"
              className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                <span className="text-sm sm:text-base font-medium pr-4">What about disaster recovery on bare metal?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>The hybrid approach solves this elegantly:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Real-time replication to cloud:</strong> PostgreSQL WAL streaming to GCS/S3 provides continuous backup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Cloud as hot standby:</strong> Maintain a read replica in cloud that can be promoted in minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Tested recovery time:</strong> Dukaan achieves 7-10 minute DR recovery</span>
                    </li>
                  </ul>
                  <p className="pt-2">You get the cost benefits of bare metal (99% of the time) with cloud's reliability as insurance (1% disaster scenarios). This hybrid model typically costs 5-10% of your pre-migration cloud bill.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 6 */}
            <AccordionItem 
              value="item-5"
              className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                <span className="text-sm sm:text-base font-medium pr-4">Which bare metal providers do you recommend?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>It depends on your requirements:</p>
                  
                  <div>
                    <p className="font-medium text-foreground mb-2">For fast provisioning (minutes):</p>
                    <ul className="space-y-1 pl-4">
                      <li>• OVHcloud – ~120 second deployment, great for EU</li>
                      <li>• Vultr – 5-15 min, developer-friendly</li>
                      <li>• Hetzner – Best price/performance ratio</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-foreground mb-2">For global presence:</p>
                    <ul className="space-y-1 pl-4">
                      <li>• Equinix Metal – Premium, 20+ metros, low latency</li>
                      <li>• PhoenixNAP – Good for enterprise</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-foreground mb-2">For gaming/edge:</p>
                    <ul className="space-y-1 pl-4">
                      <li>• Combination approach (like Hathora): Hetzner + OVH + Equinix</li>
                    </ul>
                  </div>
                  
                  <p className="pt-2 italic">We help you evaluate based on your latency requirements, compliance needs, and budget.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 7 */}
            <AccordionItem 
              value="item-6"
              className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                <span className="text-sm sm:text-base font-medium pr-4">What if my workload is unpredictable or I need to scale to zero?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>In these cases, cloud might still be the right choice—or a hybrid approach:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Burstable workloads:</strong> Use bare metal for baseline + cloud for spikes (Flipkart's approach for Big Billion Days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Development/staging:</strong> Keep these on cloud, move production to bare metal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">True serverless needs:</strong> Some workloads genuinely benefit from scale-to-zero</span>
                    </li>
                  </ul>
                  <p className="pt-2">We'll analyze your actual usage patterns and only recommend migration if the numbers make sense. Not every company should move to bare metal—we'll tell you honestly if cloud is better for your situation.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
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
