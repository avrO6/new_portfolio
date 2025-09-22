import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer(){
    return(
        <div className="container max-w-6xl mx-auto text-center">
          <div className="p-6 bg-card/30 rounded-lg terminal-border mb-8 max-w-2xl mx-auto">
            <h3 className="font-mono font-bold text-2xl mb-4 text-primary">
              <span className="text-foreground">if</span> (interested) {"{"}
            </h3>
            <p className="text-muted-foreground mb-6 font-mono">
              <span className="text-primary">//</span> Siempre abierto a nuevos desafíos y colaboraciones
            </p>
            <div className="flex justify-center gap-4 mb-4">
              <Button 
                className="font-mono bg-primary hover:bg-primary/90 glow-effect"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact()
              </Button>
              <a 
                href="https://github.com/avrO6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono border-primary/50 hover:border-primary bg-transparent border rounded-md px-4 py-2 text-sm transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                github
              </a>
              <a 
                href="https://www.linkedin.com/in/alvaro-garcia-de-la-torre-novillo-9b88402a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono border-primary/50 hover:border-primary bg-transparent border rounded-md px-4 py-2 text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                linkedin
              </a>
            </div>
            <div className="font-mono text-primary">{"}"}</div>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">©</span> 2025 Álvaro. <span className="text-primary">//</span> Built
            with ❤️ and lots of ☕
          </p>
        </div>
    );
}