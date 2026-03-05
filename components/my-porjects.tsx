import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import React from "react";

const projects =[
    { 
        id: 1, 
        name: "Acme Dashboard", 
        description: "En proceso de desarrollo, un dashboard interactivo para la gestión empresarial (Curso de Next.js)", 
        tech: ["Next.js", "React", "NextAuth.js", "Postgres"], 
        github: "#", 
        live: "#",
        photo_url: "/Acme_Dashboard.png"
    },
    { 
        id: 1, 
        name: "Vertex Detailing", 
        description: "Proyecto real para una empresa de detailing, con funcionalidad de reserva de citas y gestión de servicios a traves de un formulario ", 
        tech: ["Next.js", "React", "Tailwind CSS"], 
        github: "#", 
        live: "https://vertexdetailing.vercel.app/",
        photo_url: "/Logo_vertex_detailing.jpg"
    },
]

export default function MyProjects() {
    return(
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-4xl text-center mb-12 text-primary">
            <span className="text-foreground">const</span> projects = [
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all hover:glow-effect terminal-border bg-card/50"
              >
                <CardHeader className="p-0">
                  <img
                    src={`${project.photo_url}`}
                    alt={`Proyecto ${project.name}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-card-foreground font-mono">
                    <span className="text-primary">project: </span>
                    {project.name}
                  </CardTitle>
                  <CardDescription className="mb-4 font-mono text-sm">
                    <span className="text-primary">//</span> {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <Badge variant="secondary" className="font-mono bg-primary/20 text-primary border-primary/30">
                            {tech}
                        </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-mono border rounded border-primary/50 hover:border-primary bg-transparent transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-mono rounded bg-primary hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </div> 
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="font-mono text-primary text-2xl">]</span>
          </div>
        </div>
    );
}