import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Md Yunus",
    role: "Founder & Product Lead",
    title: "DevOps Engineer & Platform Architect",
    expertise: ["Bare Metal Migration", "Cloud Cost Optimization", "Platform Architecture"],
    linkedin: "#",
    certifications: "4x Oracle Certified",
    followers: "2K+",
    achievement: "Built infrastructure saving 60%+ for clients",
  },
  {
    name: "Yusuf",
    role: "Co-Founder & Frontend Lead",
    title: "2x Oracle Certified | Java Backend Developer",
    expertise: ["Spring Boot", "Microservices", "React", "Docker", "AWS"],
    linkedin: "https://www.linkedin.com/in/cybrous/",
    education: "Guru Nanak Dev University, Amritsar",
    followers: "1K+",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            Who We Are
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built by Infrastructure Engineers
          </h2>
          <p className="text-lg text-muted-foreground">
            We've been in your shoes—scaling infrastructure, fighting cloud bills, and optimizing for performance.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
            
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 ring-2 ring-primary/20">
                  <span className="text-3xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <CardTitle className="text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {member.achievement && (
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>{member.achievement}</span>
                  </div>
                )}

                <div className="flex justify-center gap-2 pt-2">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-border/50 hover:border-primary/30">
                      <Linkedin className="h-4 w-4" />
                      {member.followers} followers
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
