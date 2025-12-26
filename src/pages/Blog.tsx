import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: "kubernetes-best-practices-2025",
    title: "Kubernetes Best Practices for Production in 2025",
    excerpt: "Learn the essential best practices for running Kubernetes in production, including resource management, security, and monitoring strategies.",
    category: "Kubernetes",
    author: "Md Yunus",
    date: "Dec 20, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "ci-cd-pipeline-optimization",
    title: "Optimizing Your CI/CD Pipeline for 60% Faster Deployments",
    excerpt: "Discover proven techniques to speed up your CI/CD pipelines, reduce build times, and achieve faster time-to-production.",
    category: "DevOps",
    author: "Yusuf",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "aws-cost-optimization-guide",
    title: "AWS Cost Optimization: A Complete Guide for Startups",
    excerpt: "Reduce your AWS bill by up to 40% with these practical cost optimization strategies and reserved instance planning.",
    category: "AWS",
    author: "Md Yunus",
    date: "Dec 10, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: "terraform-modules-guide",
    title: "Building Reusable Terraform Modules: A Practical Guide",
    excerpt: "Master the art of creating modular, maintainable Infrastructure as Code with Terraform modules and best practices.",
    category: "Infrastructure",
    author: "Yusuf",
    date: "Dec 5, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "docker-security-hardening",
    title: "Docker Security Hardening: Protecting Your Containers",
    excerpt: "Essential security practices for Docker containers, from image scanning to runtime protection and network policies.",
    category: "Security",
    author: "Md Yunus",
    date: "Nov 28, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: "monitoring-observability-stack",
    title: "Building a Modern Observability Stack with Prometheus and Grafana",
    excerpt: "Set up comprehensive monitoring and observability for your infrastructure using open-source tools and best practices.",
    category: "Monitoring",
    author: "Yusuf",
    date: "Nov 20, 2025",
    readTime: "11 min read",
    featured: false,
  },
];

const categories = ["All", "DevOps", "Kubernetes", "AWS", "Infrastructure", "Security", "Monitoring"];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <Helmet>
        <title>Blog | CloudRelic - DevOps & Cloud Infrastructure Insights</title>
        <meta name="description" content="Expert articles on DevOps best practices, cloud infrastructure, Kubernetes, CI/CD, and more. Technical insights that matter." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary animate-fade-in">
              Technical Insights
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              CloudRelic Blog
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Expert articles on DevOps, cloud infrastructure, and platform engineering. 
              Learn from real-world experiences and best practices.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="transition-transform hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8 animate-fade-in">
              Featured Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/30">{post.title.charAt(0)}</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="gap-2 mt-2 transition-transform hover:scale-105">
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-12 bg-card/50 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8 animate-fade-in">
              Latest Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="border-border bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <Badge variant="secondary" className="text-xs w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="gap-2 p-0 h-auto text-primary hover:text-primary/80">
                        Read more
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-xl animate-fade-in">
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the latest DevOps insights and cloud infrastructure tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 transition-transform hover:scale-105">
                    Subscribe to Newsletter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
