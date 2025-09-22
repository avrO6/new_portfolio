import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, Terminal } from "lucide-react";


// Frontend
const frontend = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "React.js", level: 100 },
  { name: "Next.js", level: 100 },
  { name: "Tailwind", level: 100 },
];

// Backend
const backend = [
  { name: "PHP", level: 100 },
  { name: "Node.js", level: 100 },
  { name: "Python", level: 100 },
  { name: "MySQL", level: 100 },
  { name: "PostgreSQL", level: 100 },
];

// Tools
const tools = [
  { name: "Git", level: 100 },
  { name: "GitHub", level: 100 },
  { name: "Docker", level: 100 },
  { name: "Vite", level: 100 },
  { name: "ESLint", level: 100 },
];


export default function Skills(){
    return(
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-4xl text-center mb-12 text-primary">
            <span className="text-foreground">const</span> skills = {"{"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="terminal-border bg-card/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground font-mono">
                  <Code className="w-5 h-5 text-primary" />
                  frontend: [
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {frontend.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center font-mono text-sm">
                        <span className="text-primary">"{skill.name}":</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 glow-effect"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="terminal-border bg-card/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground font-mono">
                  <Terminal className="w-5 h-5 text-primary" />
                  backend: [
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {backend.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center font-mono text-sm">
                        <span className="text-primary">"{skill.name}":</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 glow-effect"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="terminal-border bg-card/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground font-mono">
                  <Briefcase className="w-5 h-5 text-primary" />
                  tools: [
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tools.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center font-mono text-sm">
                        <span className="text-primary">"{skill.name}":</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 glow-effect"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <span className="font-mono text-primary text-2xl">{"}"}</span>
          </div>
        </div>
    );
}