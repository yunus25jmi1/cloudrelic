import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Code, Database, Shield, Terminal, Workflow } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Smart Infrastructure Assistant",
    description: "AI analyzes your infrastructure challenges and provides targeted solutions with step-by-step guides and code snippets.",
  },
  {
    icon: Terminal,
    title: "Real-Time Troubleshooting",
    description: "Paste error messages and get instant root cause analysis with multiple solution paths and pros/cons.",
  },
  {
    icon: Workflow,
    title: "Best Practices Generator",
    description: "AI reviews your setup and generates customized best practices aligned with AWS, Azure, and GCP standards.",
  },
  {
    icon: Code,
    title: "Learning Path Recommender",
    description: "Personalized curriculum based on your expertise level with progressive skill development tracking.",
  },
  {
    icon: Database,
    title: "Knowledge Integration",
    description: "Access expert blogs, case studies, and troubleshooting guides integrated with AI responses.",
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    description: "Built with enterprise-grade security. GDPR-compliant with secure authentication flows.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="border-t border-border bg-card/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            AI-Powered Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to solve infrastructure challenges faster
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
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
