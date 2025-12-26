import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FlatIcon from "@/components/ui/FlatIcon";

const features = [
  {
    icon: "ai",
    title: "Smart Infrastructure Assistant",
    description: "AI analyzes your infrastructure challenges and provides targeted solutions with step-by-step guides and code snippets.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: "terminal",
    title: "Real-Time Troubleshooting",
    description: "Paste error messages and get instant root cause analysis with multiple solution paths and pros/cons.",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: "workflow",
    title: "Best Practices Generator",
    description: "AI reviews your setup and generates customized best practices aligned with AWS, Azure, GCP & Oracle standards.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: "learn",
    title: "Learning Path Recommender",
    description: "Personalized curriculum based on your expertise level with progressive skill development tracking.",
    gradient: "from-primary/20 to-secondary/5",
  },
  {
    icon: "database",
    title: "Knowledge Integration",
    description: "Access expert blogs, case studies, and troubleshooting guides integrated with AI responses.",
    gradient: "from-secondary/20 to-accent/5",
  },
  {
    icon: "security",
    title: "Security-First Approach",
    description: "Built with enterprise-grade security. SOC 2 compliant with secure authentication flows.",
    gradient: "from-accent/20 to-primary/5",
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
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Powered by AI
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="gradient-text-devops">AI-Powered</span> Features
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to solve infrastructure challenges faster across your multi-cloud environment
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
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <CardHeader className="relative pb-2">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-card to-background ring-1 ring-border/50 transition-all duration-300 group-hover:ring-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                  <FlatIcon name={feature.icon} size={28} />
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
