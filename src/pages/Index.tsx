import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Film, 
  Code, 
  Palette, 
  Database, 
  Coffee, 
  Mail, 
  Github, 
  Linkedin, 
  Download,
  Star,
  Heart,
  Sparkles,
  MapPin,
  Calendar,
  Award
} from "lucide-react";
import pancakeMascot from "@/assets/pancake-mascot.png";
import filmReel from "@/assets/film-reel.png";
import heroBanner from "@/assets/hero-banner.png";
import profilePicture from "@/assets/474080286_978919554137620_4488204250932360375_n.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 🥞",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: "HTML", level: 90, icon: Code },
    { name: "CSS", level: 85, icon: Palette },
    { name: "JavaScript", level: 80, icon: Code },
    { name: "React", level: 75, icon: Code },
    { name: "Node.js", level: 70, icon: Database },
    { name: "MongoDB", level: 65, icon: Database }
  ];

  const projects = [
    {
      title: "School Management System",
      description: "Comprehensive school management platform for students and administrators",
      image: "🏫",
      tech: ["React", "Node.js", "Database"],
      demoUrl: "https://campuh.vercel.app/"
    },
    {
      title: "Todo List",
      description: "Modern task management application with intuitive interface",
      image: "✅",
      tech: ["React", "CSS", "JavaScript"],
      demoUrl: "https://pancake-cinema-tasks.vercel.app/"
    },
    {
      title: "Calculator",
      description: "Feature-rich calculator with advanced mathematical operations",
      image: "🧮",
      tech: ["JavaScript", "CSS", "HTML"],
      demoUrl: "https://buttery-math-stack.vercel.app/"
    },
    {
      title: "Loop",
      description: "Interactive loop visualization and learning platform",
      image: "🔄",
      tech: ["JavaScript", "CSS", "HTML"],
      demoUrl: "https://loop-umber.vercel.app/"
    },
    {
      title: "Array",
      description: "Array manipulation and visualization tool for developers",
      image: "📊",
      tech: ["JavaScript", "React", "CSS"],
      demoUrl: "https://mrvn-array.vercel.app/"
    },
    {
      title: "Converter",
      description: "Multi-purpose conversion utility for various data types",
      image: "🔄",
      tech: ["JavaScript", "HTML", "CSS"],
      demoUrl: "https://mrvn-converter.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={pancakeMascot} alt="Pancake mascot" className="w-8 h-8 float-animation" />
              <span className="font-bold text-xl text-primary">Jay Denver</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 film-grain">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBanner} alt="Hero background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <img 
                src={profilePicture} 
                alt="Jay Denver Agdeppa" 
                className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-pancake border-4 border-primary/20 object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <img 
              src={filmReel} 
              alt="Film reel" 
              className="w-16 h-16 mx-auto mb-6 bounce-gentle opacity-60" 
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Hi, I'm <span className="text-primary">Jay Denver</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            IT Student & Web Developer serving code and creativity like warm pancakes 🥞
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Philippines</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Available for Projects</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>IT Student</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gradient-pancake shadow-pancake hover:shadow-fluffy transition-all">
              <Sparkles className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary hover:bg-primary/10">
              <Coffee className="mr-2 h-5 w-5" />
              Let's Chat
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 gradient-pancake mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 shadow-fluffy border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src={profilePicture} 
                    alt="Jay Denver" 
                    className="w-16 h-16 rounded-full border-2 border-primary/30 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Jay Denver Agdeppa</h3>
                    <p className="text-sm text-muted-foreground">IT Student & Developer</p>
                  </div>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  I'm an IT student passionate about web development, design, and digital storytelling. 
                  Like crafting the perfect pancake, I believe great code comes from the right mix of 
                  creativity, precision, and a dash of whimsy.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring the latest web technologies, 
                  watching classic films for inspiration, or experimenting with new breakfast recipes! 🍳
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    <Code className="w-3 h-3 mr-1" />
                    Web Developer
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    <Film className="w-3 h-3 mr-1" />
                    Creative
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    <Coffee className="w-3 h-3 mr-1" />
                    Pancake Enthusiast
                  </Badge>
                </div>
              </Card>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src={profilePicture} 
                  alt="Jay Denver Agdeppa" 
                  className="w-64 h-64 mx-auto float-animation shadow-pancake rounded-full object-cover border-4 border-primary/20"
                />
                <div className="absolute -top-4 -right-4">
                  <Film className="w-8 h-8 text-primary bounce-gentle" />
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <Code className="w-8 h-8 text-primary bounce-gentle" />
                </div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                  <Palette className="w-6 h-6 text-primary/60 float-animation" />
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <Database className="w-6 h-6 text-primary/60 float-animation" style={{animationDelay: '2s'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 gradient-pancake mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground">Like frames in a film, each project tells a story</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card group hover:shadow-pancake transition-all duration-300 border-primary/20 hover:border-primary/40">
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full gradient-pancake shadow-fluffy hover:shadow-pancake transition-all"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <Star className="mr-2 h-4 w-4" />
                    View Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 gradient-pancake mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="skill-card p-6 text-center hover:shadow-fluffy transition-all duration-300 border-primary/20 hover:border-primary/40">
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-secondary rounded-full h-2 mb-2">
                  <div 
                    className="gradient-pancake h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="p-12 shadow-pancake border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Want to see more?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download my resume for a complete overview of my experience and projects
            </p>
            <Button size="lg" className="gradient-pancake shadow-fluffy">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect!</h2>
            <div className="w-24 h-1 gradient-pancake mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <img 
                src={profilePicture} 
                alt="Contact mascot" 
                className="w-32 h-32 mx-auto mb-6 float-animation rounded-full shadow-fluffy border-2 border-primary/20 object-cover"
              />
              <p className="text-lg mb-6">
                Ready to cook up something amazing together? Drop me a line!
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <Card className="p-6 shadow-fluffy border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full gradient-pancake">
                  <Heart className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="py-16 gradient-butter">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Star className="w-6 h-6 text-primary bounce-gentle" />
            <h3 className="text-2xl font-bold">Fun Fact</h3>
            <Star className="w-6 h-6 text-primary bounce-gentle" />
          </div>
          <p className="text-xl font-medium">
            "My favorite stack? Pancakes... and the MERN stack." 🍳🎬
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={pancakeMascot} alt="Pancake mascot" className="w-6 h-6" />
            <span className="font-semibold">Jay Denver Agdeppa</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Jay Denver Agdeppa. Made with ❤️ and lots of pancakes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
