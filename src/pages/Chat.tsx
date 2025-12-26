import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Bot, Send, User, Sparkles, Trash2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const promptTemplates = [
  "Debug my CI/CD pipeline failures",
  "Optimize my Docker container performance",
  "AWS cost reduction strategies",
  "Kubernetes scaling best practices",
  "Set up monitoring with Prometheus",
  "Linux security hardening tips",
];

const getAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes("ci/cd") || lowerMessage.includes("pipeline")) {
    return `I'll help you debug your CI/CD pipeline. Here are the most common issues and solutions:

**1. Authentication Failures**
\`\`\`bash
# For AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com
\`\`\`

**2. Build Failures**
- Check your Dockerfile for syntax errors
- Verify base image availability
- Ensure build dependencies are installed

**3. Deployment Issues**
- Validate your deployment manifests
- Check service account permissions
- Review resource limits and quotas

**Next Steps:**
Would you like me to help you with a specific error message, or should I explain any of these areas in more detail?`;
  }

  if (lowerMessage.includes("docker") || lowerMessage.includes("container")) {
    return `Here are key Docker optimization strategies:

**1. Image Size Optimization**
\`\`\`dockerfile
# Use multi-stage builds
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["node", "index.js"]
\`\`\`

**2. Layer Caching**
- Order instructions from least to most frequently changing
- Combine RUN commands where possible
- Use .dockerignore to exclude unnecessary files

**3. Resource Limits**
\`\`\`yaml
# docker-compose.yml
services:
  app:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
\`\`\`

What specific container optimization are you looking to achieve?`;
  }

  if (lowerMessage.includes("aws") || lowerMessage.includes("cost")) {
    return `Here are proven AWS cost optimization strategies:

**1. Right-Sizing**
- Use AWS Compute Optimizer for recommendations
- Consider Graviton instances (up to 40% savings)
- Review and terminate unused resources

**2. Reserved & Spot Instances**
- Use Reserved Instances for stable workloads (up to 72% savings)
- Spot Instances for fault-tolerant workloads (up to 90% savings)
- Savings Plans for flexible commitments

**3. Storage Optimization**
\`\`\`bash
# Set lifecycle policies for S3
aws s3api put-bucket-lifecycle-configuration \\
  --bucket my-bucket \\
  --lifecycle-configuration file://lifecycle.json
\`\`\`

**4. Monitoring Tools**
- AWS Cost Explorer for visibility
- AWS Budgets for alerts
- Trusted Advisor for recommendations

Would you like detailed implementation steps for any of these strategies?`;
  }

  if (lowerMessage.includes("kubernetes") || lowerMessage.includes("k8s") || lowerMessage.includes("scaling")) {
    return `Here's a comprehensive Kubernetes scaling guide:

**1. Horizontal Pod Autoscaler (HPA)**
\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
\`\`\`

**2. Cluster Autoscaler**
- Configure for your cloud provider
- Set appropriate node pool limits
- Define pod disruption budgets

**3. Best Practices**
- Set resource requests and limits
- Use readiness and liveness probes
- Implement pod anti-affinity rules

What's your current Kubernetes setup?`;
  }

  return `Thank you for your question! As a CloudRelic AI assistant, I specialize in:

**DevOps & CI/CD**
- Pipeline optimization and debugging
- GitOps workflows and best practices
- Container orchestration strategies

**Cloud Architecture**
- AWS, Azure, GCP best practices
- Cost optimization strategies
- Security and compliance

**Infrastructure**
- Linux system administration
- Network design and troubleshooting
- Monitoring and observability

Please describe your specific infrastructure challenge, and I'll provide targeted guidance with code examples and best practices.

**Tip:** Include details like:
- Current setup and environment
- Error messages you're seeing
- What you've already tried`;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Welcome to CloudRelic AI! 👋

I'm your expert DevOps consultant, ready to help with:
• **Infrastructure challenges** - CI/CD, containers, Kubernetes
• **Cloud architecture** - AWS, Azure, GCP best practices
• **Troubleshooting** - Paste errors for instant diagnostics
• **Best practices** - Security, optimization, scalability

How can I help you today?`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: getAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTemplateClick = (template: string) => {
    setInputValue(template);
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: `Chat cleared! How can I help you with your infrastructure challenges?`,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      <Helmet>
        <title>Ask the AI Expert - CloudRelic | DevOps AI Assistant</title>
        <meta name="description" content="Get instant, expert-level DevOps guidance from CloudRelic's AI assistant. Troubleshoot issues, get best practices, and solve infrastructure challenges." />
      </Helmet>
      <Layout>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl animate-scale-in">
              <Card className="flex h-[calc(100vh-200px)] min-h-[600px] flex-col border-border bg-card">
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="block">CloudRelic AI</span>
                        <span className="text-xs font-normal text-muted-foreground">
                          Expert DevOps Consultant
                        </span>
                      </div>
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={clearChat} className="gap-2">
                      <Trash2 className="h-4 w-4" />
                      Clear
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="flex min-h-0 flex-1 flex-col overflow-hidden p-0">
                  {/* Prompt Templates */}
                  <div className="flex flex-shrink-0 flex-wrap gap-2 border-b border-border p-4">
                    <Sparkles className="h-4 w-4 text-primary" />
                    {promptTemplates.map((template, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleTemplateClick(template)}
                      >
                        {template}
                      </Button>
                    ))}
                  </div>

                  {/* Chat Messages */}
                  <div className="min-h-0 flex-1 overflow-y-auto p-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex gap-3 ${
                            message.role === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          {message.role === "assistant" && (
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                              <Bot className="h-4 w-4 text-primary" />
                            </div>
                          )}
                          <div
                            className={`max-w-[85%] rounded-lg p-4 ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted/30 text-foreground"
                            }`}
                          >
                            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                              {message.content}
                            </pre>
                            <span className="mt-2 block text-xs opacity-60">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          {message.role === "user" && (
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                              <User className="h-4 w-4 text-secondary-foreground" />
                            </div>
                          )}
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                          <div className="rounded-lg bg-muted/30 p-4">
                            <div className="flex gap-1">
                              <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
                              <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
                              <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-border p-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Describe your infrastructure challenge..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1"
                        disabled={isTyping}
                      />
                      <Button onClick={handleSend} disabled={!inputValue.trim() || isTyping} className="gap-2">
                        <Send className="h-4 w-4" />
                        Send
                      </Button>
                    </div>
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      This is a demo. Full AI integration coming soon via Lovable Cloud.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Chat;
