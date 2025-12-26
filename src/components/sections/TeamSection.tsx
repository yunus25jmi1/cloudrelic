import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Md Yunus",
    role: "Founder & Product Lead",
    title: "DevOps Engineer & Platform Architect",
    expertise: ["Infrastructure Scaling", "CI/CD Optimization", "Platform Architecture"],
    linkedin: "#",
    email: "contact@yunus.eu.org",
    certifications: "4x Oracle Certified",
    followers: "2K+",
    achievement: "60% faster deployments achieved",
  },
  {
    name: "Yusuf",
    role: "Co-Founder & Frontend Lead",
    title: "2x Oracle Certified | Java Backend Developer",
    expertise: ["Spring Boot", "Microservices", "React", "Docker", "AWS"],
    linkedin: "https://www.linkedin.com/in/cybrous/",
    email: "yusuf@cloudrelic.io",
    education: "Guru Nanak Dev University, Amritsar",
    followers: "1K+",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Built by DevOps engineers, for DevOps engineers
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="border-border bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
            
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-3xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <CardTitle className="text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {member.achievement && (
                  <p className="text-center text-sm font-medium text-primary">
                    ✓ {member.achievement}
                  </p>
                )}

                <div className="flex justify-center gap-2 pt-2">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
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
