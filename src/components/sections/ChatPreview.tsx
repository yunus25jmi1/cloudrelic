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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Ask the AI Expert
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant, expert-level DevOps guidance
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-border bg-card">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Bot className="h-5 w-5 text-primary" />
                  CloudRelic AI
                </CardTitle>
                <Badge variant="secondary">Live Preview</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Prompt Templates */}
              <div className="flex flex-wrap gap-2 border-b border-border p-4">
                {promptTemplates.map((template, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    {template}
                  </Button>
                ))}
              </div>

              {/* Chat Messages */}
              <div className="max-h-96 space-y-4 overflow-y-auto p-4">
                {mockMessages.map((message, index) => (
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
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted/30 text-foreground"
                      }`}
                    >
                      <pre className="whitespace-pre-wrap font-sans text-sm">
                        {message.content}
                      </pre>
                    </div>
                    {message.role === "user" && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Describe your infrastructure challenge..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1"
                  />
                  <Link to="/chat">
                    <Button className="gap-2">
                      <Send className="h-4 w-4" />
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
