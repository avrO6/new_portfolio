import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
    /* { name: "", org: "", year: "", icon: "" }, */
];

export default function Certis(){
    return(
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-mono font-bold text-4xl text-center mb-12 text-primary">
            <span className="text-foreground">const</span> certifications = [
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center terminal-border bg-card/30 hover:glow-effect transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 terminal-border">
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <CardTitle className="text-card-foreground font-mono text-sm">{cert.name}</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    <span className="text-primary">//</span> {cert.org}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="font-mono border-primary/50 text-primary">
                    {cert.year}
                  </Badge>
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