import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, User, CheckCircle, Copy, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const promptTemplates = [
  "Debug CI/CD pipeline failures",
  "Optimize Docker container",
  "AWS cost reduction tips",
  "Kubernetes scaling strategy",
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
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            AI-Powered Assistant
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Ask the <span className="gradient-text-devops">AI Expert</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant, expert-level DevOps guidance with actionable solutions
          </p>
        </div>

        <div className="mx-auto max-w-4xl animate-fade-in-up">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-xl shadow-primary/5 overflow-hidden">
            <CardHeader className="border-b border-border/50 bg-card/50">
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
            <CardContent className="flex max-h-[600px] flex-col overflow-hidden p-0">
              {/* Prompt Templates */}
              <div className="flex flex-shrink-0 flex-wrap gap-2 border-b border-border/50 bg-card/30 p-4">
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
                {/* User Message */}
                <div className="flex gap-3 justify-end animate-fade-in">
                  <div className="max-w-[80%] rounded-xl p-4 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <p className="text-sm">My CI/CD pipeline is failing with Docker image push errors to ECR</p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary ring-1 ring-secondary/50">
                    <User className="h-4 w-4 text-secondary-foreground" />
                  </div>
                </div>

                {/* Assistant Response - Professional Format */}
                <div className="flex gap-3 justify-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="max-w-[85%] rounded-xl p-5 bg-muted/30 text-foreground ring-1 ring-border/50 space-y-5">
                    <p className="text-sm text-muted-foreground">
                      I'll help you troubleshoot this. These are the most common causes when pushing to AWS ECR fails:
                    </p>

                    {/* Section 1: Authentication */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">1</span>
                        Authentication
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Make sure Docker is authenticated against the correct ECR registry and region:
                      </p>
                      <div className="relative rounded-lg bg-background/80 border border-border/50 overflow-hidden">
                        <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/50 bg-muted/30">
                          <div className="flex items-center gap-2">
                            <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">bash</span>
                          </div>
                          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground">
                            <Copy className="h-3 w-3 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <pre className="p-3 text-xs font-mono text-foreground overflow-x-auto">
{`aws ecr get-login-password --region us-east-1 \\
  | docker login --username AWS \\
  --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com`}
                        </pre>
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        Common pitfalls: wrong region, expired AWS credentials, or logging into the wrong account.
                      </p>
                    </div>

                    {/* Section 2: IAM Permissions */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">2</span>
                        IAM Permissions
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Ensure the CI/CD role or user has at least the following permissions:
                      </p>
                      <ul className="space-y-1.5 pl-1">
                        {[
                          'ecr:GetAuthorizationToken',
                          'ecr:BatchCheckLayerAvailability',
                          'ecr:PutImage',
                          'ecr:InitiateLayerUpload',
                          'ecr:UploadLayerPart',
                          'ecr:CompleteLayerUpload',
                        ].map((perm, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                            <code className="text-xs font-mono bg-primary/5 px-1.5 py-0.5 rounded text-foreground">{perm}</code>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground italic">
                        Missing any one of these can break the push flow.
                      </p>
                    </div>

                    {/* Section 3: Repository Validation */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">3</span>
                        Repository Validation
                      </h4>
                      <p className="text-sm text-muted-foreground">Confirm that:</p>
                      <ul className="space-y-1.5 pl-1">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          The ECR repository already exists
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          You are pushing to the correct repository name and account ID
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          No restrictive repository policy is blocking the role
                        </li>
                      </ul>
                    </div>

                    {/* Follow-up prompt */}
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-sm text-primary font-medium">
                        Would you like me to provide the complete IAM policy or help diagnose a specific error message?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="border-t border-border/50 bg-card/50 p-4">
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
