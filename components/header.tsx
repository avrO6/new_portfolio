import { Terminal } from "lucide-react";

export default function Header() {
    return (
        <div className="container flex h-16 items-center justify-between">
          <div className="font-mono font-bold text-2xl text-primary flex items-center gap-2">
            <Terminal className="w-6 h-6 ml-8"/>
            <span className="text-foreground">~/</span>Avr.Dev
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-sm font-mono hover:text-primary transition-colors glow-effect px-2 py-1 rounded"
            >
              ./about
            </a>
            <a
              href="#projects"
              className="text-sm font-mono hover:text-primary transition-colors glow-effect px-2 py-1 rounded"
            >
              ./projects
            </a>
            <a
              href="#skills"
              className="text-sm font-mono hover:text-primary transition-colors glow-effect px-2 py-1 rounded"
            >
              ./skills
            </a>
            <a
              href="#certifications"
              className="text-sm font-mono hover:text-primary transition-colors glow-effect px-2 py-1 rounded"
            >
              ./certs
            </a>
          </nav>
        </div>
    );
}