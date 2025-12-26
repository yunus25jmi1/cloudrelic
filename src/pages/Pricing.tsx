import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Zap, Building2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    description: "Perfect for small teams getting started with cloud infrastructure",
    price: "$49",
    period: "/month",
    popular: false,
    features: [
      { name: "Up to 5 servers", included: true },
      { name: "Basic monitoring", included: true },
      { name: "Email alerts", included: true },
      { name: "24-hour data retention", included: true },
      { name: "Community support", included: true },
      { name: "AI-powered insights", included: false },
      { name: "Custom dashboards", included: false },
      { name: "API access", included: false },
      { name: "SSO authentication", included: false },
      { name: "Dedicated support", included: false },
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    icon: Zap,
    description: "For growing teams that need advanced monitoring and AI assistance",
    price: "$149",
    period: "/month",
    popular: true,
    features: [
      { name: "Up to 25 servers", included: true },
      { name: "Advanced monitoring", included: true },
      { name: "Email & SMS alerts", included: true },
      { name: "30-day data retention", included: true },
      { name: "Priority support", included: true },
      { name: "AI-powered insights", included: true },
      { name: "Custom dashboards", included: true },
      { name: "API access", included: true },
      { name: "SSO authentication", included: false },
      { name: "Dedicated support", included: false },
    ],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "For large organizations with complex infrastructure needs",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      { name: "Unlimited servers", included: true },
      { name: "Enterprise monitoring", included: true },
      { name: "Multi-channel alerts", included: true },
      { name: "Unlimited data retention", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "AI-powered insights", included: true },
      { name: "Custom dashboards", included: true },
      { name: "Full API access", included: true },
      { name: "SSO authentication", included: true },
      { name: "Dedicated support", included: true },
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
];

const comparisonFeatures = [
  { category: "Infrastructure", features: [
    { name: "Server Monitoring", starter: "5 servers", pro: "25 servers", enterprise: "Unlimited" },
    { name: "Data Retention", starter: "24 hours", pro: "30 days", enterprise: "Unlimited" },
    { name: "Regions Supported", starter: "2", pro: "All", enterprise: "All + Custom" },
  ]},
  { category: "AI Features", features: [
    { name: "Smart Infrastructure Assistant", starter: false, pro: true, enterprise: true },
    { name: "Predictive Analytics", starter: false, pro: true, enterprise: true },
    { name: "Auto-remediation", starter: false, pro: false, enterprise: true },
  ]},
  { category: "Support", features: [
    { name: "Response Time", starter: "48 hours", pro: "4 hours", enterprise: "1 hour" },
    { name: "Support Channels", starter: "Email", pro: "Email, Chat", enterprise: "All + Phone" },
    { name: "Dedicated Account Manager", starter: false, pro: false, enterprise: true },
  ]},
];

const Pricing = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pricing | CloudRelic - DevOps & Cloud Infrastructure Plans</title>
        <meta name="description" content="Choose the right CloudRelic plan for your team. From startups to enterprises, we have flexible pricing for AI-powered cloud infrastructure management." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Choose Your Plan
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Start with a 14-day free trial. No credit card required. Scale as your infrastructure grows.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative bg-card border-border flex flex-col ${
                    plan.popular ? "border-primary shadow-lg shadow-primary/10 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                      <plan.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="min-h-[48px]">{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="w-full">
                      <Button variant={plan.ctaVariant} className="w-full" size="lg">
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Compare All Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A detailed comparison of what each plan includes
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">
                      <span className="inline-flex items-center gap-2">
                        Professional
                        <Badge variant="outline" className="text-xs border-primary text-primary">Popular</Badge>
                      </span>
                    </th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category) => (
                    <>
                      <tr key={category.category} className="bg-muted/50">
                        <td colSpan={4} className="py-3 px-4 text-sm font-semibold text-primary">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature) => (
                        <tr key={feature.name} className="border-b border-border/50">
                          <td className="py-4 px-4 text-foreground">{feature.name}</td>
                          <td className="text-center py-4 px-4">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <Check className="h-5 w-5 text-green-400 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                              )
                            ) : (
                              <span className="text-muted-foreground">{feature.starter}</span>
                            )}
                          </td>
                          <td className="text-center py-4 px-4">
                            {typeof feature.pro === "boolean" ? (
                              feature.pro ? (
                                <Check className="h-5 w-5 text-green-400 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                              )
                            ) : (
                              <span className="text-foreground font-medium">{feature.pro}</span>
                            )}
                          </td>
                          <td className="text-center py-4 px-4">
                            {typeof feature.enterprise === "boolean" ? (
                              feature.enterprise ? (
                                <Check className="h-5 w-5 text-green-400 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                              )
                            ) : (
                              <span className="text-foreground font-medium">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our team is here to help you choose the right plan for your infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Talk to Sales</Button>
              </Link>
              <Link to="/chat">
                <Button variant="outline" size="lg">Ask AI Assistant</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;
