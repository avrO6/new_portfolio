import { Github, Linkedin, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function AboutMe() {
    return(
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-4xl text-center mb-12 text-primary">
            <span className="text-foreground">function</span> aboutMe() {"{"}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-4 bg-card/30 rounded-lg terminal-border">
                <p className="text-lg leading-relaxed font-mono">
                  <span className="text-primary">return</span>{" "}
                  <span className="text-yellow-400">
                    `Desarrollador con +1 año de experiencia en la creación de aplicaciones web y en la administración de bases de datos. 
                    Poseo sólidos conocimientos en tecnologías como JavaScript, React y Next.js, conformando mi stack principal de desarrollo.`
                  </span>
                </p>
              </div>
              <div className="p-4 bg-card/30 rounded-lg terminal-border">
                <p className="text-lg leading-relaxed font-mono">
                  <span className="text-primary">const</span> passion ={" "}
                  <span className="text-yellow-400">"Resolver problemas complejos con código elegante"</span>
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/avrO6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-mono border border-primary/50 hover:border-primary glow-effect bg-transparent rounded-md px-4 py-2 text-sm transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/alvaro-garcia-de-la-torre-novillo-9b88402a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-mono border border-primary/50 hover:border-primary glow-effect bg-transparent rounded-md px-4 py-2 text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono border-primary/50 hover:border-primary glow-effect bg-transparent"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/code_Space.png"
                alt="Espacio de trabajo"
                className="rounded-lg shadow-lg terminal-border"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-2 rounded-lg font-mono text-sm glow-effect">
                <Zap className="w-4 h-4 inline mr-1" />
                Coding Zone
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <span className="font-mono text-primary text-2xl">{"}"}</span>
          </div>
        </div>
    );
}