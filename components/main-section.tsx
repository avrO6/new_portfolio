import { Button } from "@/components/ui/button"
import { ExternalLink, Code } from "lucide-react"


export default function MainSection(){
    return(
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8 p-4 bg-card/50 rounded-lg terminal-border font-mono text-left max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm">
              <span className="text-primary">const</span> <span className="text-foreground">developer</span> = {"{"}
              <br />
              <span className="ml-4 text-primary">name:</span> <span className="text-yellow-400">"Álvaro"</span>,
              <br />
              <span className="ml-4 text-primary">role:</span>{" "}
              <span className="text-yellow-400">"Web Developer"</span>
              <br />
              {"}"}
            </div>
          </div>

          <div className="mb-8">
            <img
              src="/Foto_CV.jpeg"
              alt="Foto profesional"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg glow-effect"
            />
          </div>
          <h1 className="font-mono font-bold text-5xl md:text-6xl mb-6 text-foreground text-balance">
            <span className="text-primary">&gt;</span> Hola, soy Álvaro
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty font-mono">
            <span className="text-primary">//</span> Web Developer especializado en crear código limpio y
            soluciones escalables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2 text-lg font-mono bg-primary hover:bg-primary/90 glow-effect rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Code className="w-4 h-4 mr-2" />
              Ver Proyectos()
            </a>
            <Button
              variant="outline"
              size="lg"
              className="font-mono border-primary/50 hover:border-primary bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Descargar CV
            </Button>
          </div>
        </div>
    );
}