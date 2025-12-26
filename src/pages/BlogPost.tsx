import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin } from "lucide-react";

const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  "kubernetes-best-practices-2025": {
    title: "Kubernetes Best Practices for Production in 2025",
    excerpt: "Learn the essential best practices for running Kubernetes in production, including resource management, security, and monitoring strategies.",
    category: "Kubernetes",
    author: "Md Yunus",
    authorRole: "Founder & Product Lead",
    date: "Dec 20, 2025",
    readTime: "8 min read",
    content: [
      "Running Kubernetes in production requires careful planning and adherence to best practices. In this comprehensive guide, we will explore the essential strategies for maintaining a robust, secure, and efficient Kubernetes cluster.",
      "## Resource Management",
      "Proper resource management is crucial for Kubernetes clusters. Always set resource requests and limits for your containers. This ensures fair resource allocation and prevents any single application from consuming all available resources.",
      "Use Horizontal Pod Autoscaler (HPA) to automatically scale your applications based on CPU utilization or custom metrics. This helps maintain performance during traffic spikes while optimizing costs during low-traffic periods.",
      "## Security Best Practices",
      "Implement Role-Based Access Control (RBAC) to restrict access to cluster resources. Follow the principle of least privilege, granting only the permissions necessary for each user or service account.",
      "Use Network Policies to control traffic flow between pods. This adds an additional layer of security by limiting which pods can communicate with each other.",
      "## Monitoring and Observability",
      "Deploy a comprehensive monitoring stack using Prometheus for metrics collection and Grafana for visualization. Set up alerts for critical metrics like node health, pod status, and resource utilization.",
      "Implement centralized logging using tools like the ELK stack or Loki. This makes it easier to troubleshoot issues and maintain audit trails.",
      "## Conclusion",
      "Following these best practices will help you run a more reliable and secure Kubernetes cluster. Remember that Kubernetes is constantly evolving, so stay updated with the latest features and recommendations.",
    ],
  },
  "ci-cd-pipeline-optimization": {
    title: "Optimizing Your CI/CD Pipeline for 60% Faster Deployments",
    excerpt: "Discover proven techniques to speed up your CI/CD pipelines, reduce build times, and achieve faster time-to-production.",
    category: "DevOps",
    author: "Yusuf",
    authorRole: "Co-Founder & Frontend Lead",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    content: [
      "A fast and efficient CI/CD pipeline is essential for modern software development. In this article, we share the techniques we used to achieve 60% faster deployments at CloudRelic.",
      "## Parallelization",
      "One of the most effective ways to speed up your pipeline is to run tasks in parallel. Instead of running tests sequentially, split them across multiple agents or containers.",
      "Use matrix builds to test across multiple environments simultaneously. This not only saves time but also ensures compatibility across different configurations.",
      "## Caching Strategies",
      "Implement aggressive caching for dependencies, build artifacts, and Docker layers. A well-configured cache can reduce build times by 50% or more.",
      "Use cache keys that accurately reflect your dependencies. Invalidate caches only when necessary to maximize cache hit rates.",
      "## Optimizing Docker Builds",
      "Order your Dockerfile instructions from least to most frequently changed. This maximizes layer caching and reduces rebuild times.",
      "Use multi-stage builds to keep your final images small and reduce push/pull times.",
      "## Incremental Testing",
      "Implement test impact analysis to run only the tests affected by code changes. This can dramatically reduce test execution time for large codebases.",
      "## Conclusion",
      "By implementing these optimizations, you can significantly reduce your deployment times and improve developer productivity. Start with the changes that will have the biggest impact on your specific pipeline.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
            <Link to="/blog">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | CloudRelic Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="min-h-screen bg-background">
        {/* Header */}
        <header className="py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors animate-fade-in">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <Badge variant="secondary" className="mb-4 animate-fade-in">{post.category}</Badge>
              
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 animate-fade-in-up">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">{post.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author}</p>
                    <p className="text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-invert max-w-none animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                {post.content.map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border animate-fade-in">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Share this article</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author Card */}
              <Card className="mt-12 border-border bg-card animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{post.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{post.author}</h3>
                      <p className="text-sm text-primary mb-2">{post.authorRole}</p>
                      <p className="text-sm text-muted-foreground">
                        DevOps engineer passionate about cloud infrastructure, automation, and helping teams build better systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="mt-12 text-center animate-fade-in">
                <h3 className="text-xl font-bold text-foreground mb-4">Need help with your infrastructure?</h3>
                <p className="text-muted-foreground mb-6">Our AI assistant can help you solve DevOps challenges instantly.</p>
                <Link to="/chat">
                  <Button size="lg" className="gap-2 transition-transform hover:scale-105">
                    Ask AI Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
