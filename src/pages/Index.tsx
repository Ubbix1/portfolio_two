import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import SkillCategory from "@/components/SkillCategory";
import ContactForm from "@/components/ContactForm";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Shield, 
  Cpu, 
  Wrench,
  Download,
  ChevronDown
} from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Mohammed <span className="text-gradient">Owais</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Cybersecurity Researcher | ML Engineer | Full-Stack Developer
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building secure systems and intelligent applications. Passionate about ethical hacking, 
            real-time AI, and scalable solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="h-12 px-8"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-12 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Ubbix1" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <ChevronDown 
              className="w-8 h-8 mx-auto text-muted-foreground cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Cybersecurity and Machine Learning student with hands-on experience in ethical hacking, 
                full-stack development, and real-time AI applications. Passionate about building secure, 
                intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground">
                Driven by the challenge of securing systems and building intelligent tools. 
                Aiming to contribute to AI-driven cybersecurity through research and practical applications.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Computer Science & Cybersecurity
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Focus Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Ethical Hacking & Penetration Testing</li>
                    <li>• Machine Learning Model Optimization</li>
                    <li>• Real-Time AI Systems</li>
                    <li>• Full-Stack Security</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From ethical hacking to AI-driven solutions
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="SignAI"
              description="Real-time sign language translator using CNN and OpenCV for accessible communication."
              techStack={["Python", "TensorFlow", "OpenCV", "Flask"]}
              githubUrl="https://github.com/Ubbix1"
            />
            <ProjectCard
              title="Firewall Log Analyzer"
              description="Automated threat detection from firewall logs using natural language processing."
              techStack={["Python", "NLTK", "Elasticsearch"]}
              githubUrl="https://github.com/Ubbix1"
            />
            <ProjectCard
              title="TicketMate Pro"
              description="Full-stack ticket management system with role-based access control and real-time updates."
              techStack={["MERN Stack", "JWT", "Docker"]}
              githubUrl="https://github.com/Ubbix1"
            />
            <ProjectCard
              title="Ethical Hacking Lab"
              description="Vulnerability assessment toolkit for CTF challenges and penetration testing."
              techStack={["Bash", "Metasploit", "Wireshark"]}
              githubUrl="https://github.com/Ubbix1"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Skills & <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-muted-foreground text-lg">What I bring to the table</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SkillCategory
              title="Programming"
              icon={Code}
              skills={["Python", "JavaScript", "C++", "Bash", "SQL", "TypeScript"]}
            />
            <SkillCategory
              title="Cybersecurity"
              icon={Shield}
              skills={["Ethical Hacking", "Penetration Testing", "SIEM", "Cryptography", "Network Security"]}
            />
            <SkillCategory
              title="ML Frameworks"
              icon={Cpu}
              skills={["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Keras"]}
            />
            <SkillCategory
              title="Tools & Platforms"
              icon={Wrench}
              skills={["Git", "Docker", "Wireshark", "Metasploit", "Burp Suite", "Linux"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">Let's build something amazing</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="space-y-8">
            <ContactForm />
            
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Your details are secure and won't be shared.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Mohammed Owais. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
