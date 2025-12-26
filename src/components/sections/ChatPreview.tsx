import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, User } from "lucide-react";
import { Link } from "react-router-dom";

const promptTemplates = [
  "Debug CI/CD pipeline failures",
  "Optimize Docker container",
  "AWS cost reduction tips",
  "Kubernetes scaling strategy",
];

const mockMessages = [
  {
    role: "user",
    content: "My CI/CD pipeline is failing with Docker image push errors to ECR",
  },
  {
    role: "assistant",
    content: `I'll help you troubleshoot this. Here are the most common causes:

**1. Authentication Issues**
\`\`\`bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com
\`\`\`

**2. Check IAM Permissions**
Ensure your CI/CD service role has:
- ecr:GetAuthorizationToken
- ecr:BatchCheckLayerAvailability
- ecr:PutImage

**3. Repository Policy**
Verify the repository exists and your role has push access.

Would you like me to provide the complete IAM policy or help with a specific error message?`,
  },
];

const ChatPreview = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center animate-fade-in">
          <h2 className="mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Ask the AI Expert
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant, expert-level DevOps guidance
          </p>
        </div>

        <div className="mx-auto max-w-4xl animate-fade-in-up">
          <Card className="border-border bg-card/80 backdrop-blur-sm shadow-xl shadow-primary/5 overflow-hidden">
            <CardHeader className="border-b border-border bg-card/50">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  CloudRelic AI
                </CardTitle>
                <Badge variant="secondary" className="animate-pulse bg-primary/10 text-primary">Live Preview</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex max-h-[500px] flex-col overflow-hidden p-0">
              {/* Prompt Templates */}
              <div className="flex flex-shrink-0 flex-wrap gap-2 border-b border-border bg-card/30 p-4">
                {promptTemplates.map((template, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs border-primary/20 transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    {template}
                  </Button>
                ))}
              </div>

              {/* Chat Messages */}
              <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
                {mockMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 animate-fade-in ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {message.role === "assistant" && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-xl p-4 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-muted/30 text-foreground ring-1 ring-border"
                      }`}
                    >
                      <pre className="whitespace-pre-wrap font-sans text-sm">
                        {message.content}
                      </pre>
                    </div>
                    {message.role === "user" && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary ring-1 ring-secondary/50">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-border bg-card/50 p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Describe your infrastructure challenge..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border-primary/20 focus:border-primary/50"
                  />
                  <Link to="/chat">
                    <Button className="group gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      Try it
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatPreview;
