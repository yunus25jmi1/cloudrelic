import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Target, Eye, Heart, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const teamMembers = [
  {
    name: "Yusuf",
    role: "Co-Founder & Frontend Lead",
    title: "2x Oracle Certified | Java Backend Developer",
    expertise: ["Spring Boot", "Microservices", "React", "Docker", "AWS"],
    linkedin: "https://www.linkedin.com/in/cybrous/",
    email: "yusuf@cloudrelic.io",
    education: "Guru Nanak Dev University, Amritsar",
    followers: "1K+",
    bio: "A passionate developer specializing in scalable, secure, high-performance applications. Expert in Spring Boot, microservices architecture, and cloud technologies.",
  },
  {
    name: "Md Yunus",
    role: "Founder & Product Lead",
    title: "DevOps Engineer & Platform Architect",
    expertise: ["Infrastructure Scaling", "CI/CD Optimization", "Platform Architecture"],
    linkedin: "#",
    email: "md.yunus@cloudrelic.io",
    certifications: "4x Oracle Certified",
    followers: "2K+",
    bio: "Experienced DevOps engineer who has achieved 60% faster deployments. Expert in building startup and enterprise infrastructure with a focus on scaling and optimization.",
  },
];

const values = [
  {
    icon: Target,
    title: "Security-First",
    description: "We prioritize security in every decision, ensuring your infrastructure is protected.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest guidance without hidden agendas.",
  },
  {
    icon: Heart,
    title: "Inclusive Culture",
    description: "Remote-first with flexible hours, fostering a learning-focused environment.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering expert-level solutions with every interaction.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About CloudRelic - Our Team & Mission</title>
        <meta name="description" content="Meet the DevOps engineers behind CloudRelic. We're building an AI-powered platform to transform cloud infrastructure management." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
                About CloudRelic
              </h1>
              <p className="text-lg text-muted-foreground">
                Founded in 2025 in New Delhi, India, CloudRelic is an AI-powered technical knowledge platform built by DevOps engineers, for DevOps engineers.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-t border-border bg-card/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground">
                  To democratize expert-level DevOps knowledge by providing AI-powered, personalized guidance that helps engineers solve infrastructure challenges faster and more efficiently.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become the go-to platform for DevOps professionals worldwide, where every engineer has access to expert-level guidance at their fingertips.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-card text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-t border-border bg-card/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Meet the Team</h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-5xl font-bold text-primary">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-primary">{member.role}</CardDescription>
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-center text-sm text-muted-foreground">{member.bio}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center pt-2">
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

        {/* Workplace */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-3xl font-bold text-foreground">How We Work</h2>
            <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">Remote-First</h3>
                <p className="text-sm text-muted-foreground">Flexible hours with async-first communication</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">Core Hours</h3>
                <p className="text-sm text-muted-foreground">10AM-2PM for team collaboration</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">Learning-Focused</h3>
                <p className="text-sm text-muted-foreground">Continuous improvement and growth</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
