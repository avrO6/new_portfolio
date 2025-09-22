import Header from "@/components/header"
import MainSection from "@/components/main-section"
import AboutMe from "@/components/about-me"
import MyProjects from "@/components/my-porjects"
import Skills from "@/components/skills"
import Certis from "@/components/certis"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Header />
      </header>

      <section className="relative py-24 px-4 text-center code-bg">
        <MainSection />
      </section>

      <section id="about" className="py-20 px-4">
        <AboutMe />
      </section>

      <section id="projects" className="py-20 px-4 bg-card/10">
        <MyProjects />
      </section>

      <section id="skills" className="py-20 px-4">
        <Skills />
      </section>

      <section id="certifications" className="py-20 px-4 bg-card/10">
        <Certis />
      </section>

      <footer className="py-12 px-4 bg-muted/20">
        <Footer />
      </footer>
    </div>
  )
}
