import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Activity, 
  Wifi, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  TrendingUp,
  TrendingDown,
  Database,
  Cloud,
  Shield,
  Zap
} from "lucide-react";

// Mock data for the dashboard
const servers = [
  { id: 1, name: "prod-server-01", status: "healthy", cpu: 45, memory: 62, disk: 38, region: "us-east-1" },
  { id: 2, name: "prod-server-02", status: "healthy", cpu: 32, memory: 48, disk: 55, region: "us-east-1" },
  { id: 3, name: "prod-server-03", status: "warning", cpu: 78, memory: 85, disk: 42, region: "us-west-2" },
  { id: 4, name: "staging-server-01", status: "healthy", cpu: 22, memory: 35, disk: 28, region: "eu-west-1" },
  { id: 5, name: "dev-server-01", status: "critical", cpu: 95, memory: 92, disk: 88, region: "ap-south-1" },
];

const recentAlerts = [
  { id: 1, type: "warning", message: "High memory usage on prod-server-03", time: "5 min ago" },
  { id: 2, type: "critical", message: "CPU threshold exceeded on dev-server-01", time: "12 min ago" },
  { id: 3, type: "info", message: "Scheduled maintenance completed", time: "1 hour ago" },
  { id: 4, type: "success", message: "Auto-scaling triggered successfully", time: "2 hours ago" },
];

const metrics = [
  { label: "Total Requests", value: "2.4M", change: "+12.5%", trend: "up" },
  { label: "Avg Response Time", value: "145ms", change: "-8.3%", trend: "down" },
  { label: "Error Rate", value: "0.02%", change: "-15.2%", trend: "down" },
  { label: "Uptime", value: "99.98%", change: "+0.01%", trend: "up" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "healthy":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "warning":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "critical":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getProgressColor = (value: number) => {
  if (value >= 90) return "bg-red-500";
  if (value >= 70) return "bg-yellow-500";
  return "bg-primary";
};

const Dashboard = () => {
  const healthyServers = servers.filter(s => s.status === "healthy").length;
  const warningServers = servers.filter(s => s.status === "warning").length;
  const criticalServers = servers.filter(s => s.status === "critical").length;

  return (
    <Layout>
      <Helmet>
        <title>Dashboard | CloudRelic - Infrastructure Monitoring</title>
        <meta name="description" content="Monitor your cloud infrastructure with real-time metrics, server health indicators, and performance analytics." />
      </Helmet>

      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Infrastructure Dashboard</h1>
            <p className="text-muted-foreground">Real-time monitoring of your cloud infrastructure</p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${metric.trend === "up" ? (metric.label === "Error Rate" ? "text-red-400" : "text-green-400") : (metric.label === "Avg Response Time" || metric.label === "Error Rate" ? "text-green-400" : "text-red-400")}`}>
                      {metric.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      {metric.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Server Status Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-green-500/20">
                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{healthyServers}</p>
                    <p className="text-sm text-muted-foreground">Healthy Servers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/20">
                    <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{warningServers}</p>
                    <p className="text-sm text-muted-foreground">Warning State</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-red-500/20">
                    <Zap className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{criticalServers}</p>
                    <p className="text-sm text-muted-foreground">Critical Issues</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Server List */}
            <div className="xl:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    Server Health
                  </CardTitle>
                  <CardDescription>Real-time status of all infrastructure servers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">All Servers</TabsTrigger>
                      <TabsTrigger value="production">Production</TabsTrigger>
                      <TabsTrigger value="staging">Staging</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="space-y-4">
                      {servers.map((server) => (
                        <div key={server.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <Server className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium text-foreground">{server.name}</p>
                                <p className="text-xs text-muted-foreground">{server.region}</p>
                              </div>
                            </div>
                            <Badge className={getStatusColor(server.status)}>
                              {server.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Cpu className="h-3 w-3" /> CPU
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.cpu}%</span>
                              </div>
                              <Progress value={server.cpu} className={`h-2 ${getProgressColor(server.cpu)}`} />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Activity className="h-3 w-3" /> Memory
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.memory}%</span>
                              </div>
                              <Progress value={server.memory} className={`h-2 ${getProgressColor(server.memory)}`} />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <HardDrive className="h-3 w-3" /> Disk
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.disk}%</span>
                              </div>
                              <Progress value={server.disk} className={`h-2 ${getProgressColor(server.disk)}`} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="production" className="space-y-4">
                      {servers.filter(s => s.name.startsWith("prod")).map((server) => (
                        <div key={server.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <Server className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium text-foreground">{server.name}</p>
                                <p className="text-xs text-muted-foreground">{server.region}</p>
                              </div>
                            </div>
                            <Badge className={getStatusColor(server.status)}>
                              {server.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Cpu className="h-3 w-3" /> CPU
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.cpu}%</span>
                              </div>
                              <Progress value={server.cpu} className={`h-2 ${getProgressColor(server.cpu)}`} />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Activity className="h-3 w-3" /> Memory
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.memory}%</span>
                              </div>
                              <Progress value={server.memory} className={`h-2 ${getProgressColor(server.memory)}`} />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <HardDrive className="h-3 w-3" /> Disk
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.disk}%</span>
                              </div>
                              <Progress value={server.disk} className={`h-2 ${getProgressColor(server.disk)}`} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="staging" className="space-y-4">
                      {servers.filter(s => s.name.startsWith("staging") || s.name.startsWith("dev")).map((server) => (
                        <div key={server.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <Server className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium text-foreground">{server.name}</p>
                                <p className="text-xs text-muted-foreground">{server.region}</p>
                              </div>
                            </div>
                            <Badge className={getStatusColor(server.status)}>
                              {server.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Cpu className="h-3 w-3" /> CPU
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.cpu}%</span>
                              </div>
                              <Progress value={server.cpu} className={`h-2 ${getProgressColor(server.cpu)}`} />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Activity className="h-3 w-3" /> Memory
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.memory}%</span>
                              </div>
                              <Progress value={server.memory} className={`h-2 ${getProgressColor(server.memory)}`} />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <HardDrive className="h-3 w-3" /> Disk
                                </span>
                                <span className="text-xs font-medium text-foreground">{server.disk}%</span>
                              </div>
                              <Progress value={server.disk} className={`h-2 ${getProgressColor(server.disk)}`} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Infrastructure Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Active Regions</span>
                    </div>
                    <span className="font-medium text-foreground">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Databases</span>
                    </div>
                    <span className="font-medium text-foreground">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Load Balancers</span>
                    </div>
                    <span className="font-medium text-foreground">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Security Groups</span>
                    </div>
                    <span className="font-medium text-foreground">18</span>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Alerts */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className={`mt-0.5 ${
                        alert.type === "critical" ? "text-red-400" :
                        alert.type === "warning" ? "text-yellow-400" :
                        alert.type === "success" ? "text-green-400" : "text-blue-400"
                      }`}>
                        {alert.type === "critical" ? <Zap className="h-4 w-4" /> :
                         alert.type === "warning" ? <AlertTriangle className="h-4 w-4" /> :
                         alert.type === "success" ? <CheckCircle2 className="h-4 w-4" /> :
                         <Activity className="h-4 w-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          {alert.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
