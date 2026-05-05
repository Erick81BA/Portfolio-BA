"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react"
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  FileSpreadsheet, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronDown,
  Users,
  MessageSquare,
  Lightbulb,
  Award,
  GraduationCap,
  Code,
  ExternalLink,
  Download,
  Menu,
  X,
  Briefcase,
  Send,
  Sparkles,
  Target,
  Layers,
  GitBranch
} from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function PortfolioPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:izquierdo.herick@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const navLinks = [
    { href: "#about", label: "Perfil" },
    { href: "#services", label: "Servicios" },
    { href: "#experience", label: "Experiencia" },
    { href: "#education", label: "Educación" },
    { href: "#contact", label: "Contacto" }
  ]

  const services = [
    {
      icon: Target,
      title: "Análisis de Negocios",
      description: "Identificación y documentación de requerimientos, mapeo de procesos y análisis de datos para optimizar operaciones empresariales."
    },
    {
      icon: Layers,
      title: "Gestión de Proyectos Ágiles",
      description: "Facilitación de sprints, ceremonias SCRUM y coordinación de equipos multidisciplinarios para entregas exitosas."
    },
    {
      icon: GitBranch,
      title: "Diseño de Soluciones",
      description: "Traducción de necesidades técnicas en soluciones prácticas alineadas con los objetivos organizacionales."
    },
    {
      icon: Database,
      title: "Gestión de Datos",
      description: "Diseño y optimización de bases de datos SQL, análisis de información y generación de reportes estratégicos."
    }
  ]

  const experiences = [
    {
      role: "Business Analyst",
      company: "Apymsa-Exodus",
      period: "2020 - Presente",
      current: true,
      responsibilities: [
        "Liderazgo en análisis y diseño de iniciativas para áreas de operaciones, cadena de suministro y retail",
        "Facilitación de comunicación entre stakeholders y equipos técnicos para optimización de procesos",
        "Implementación exitosa de metodologías ágiles y tradicionales en proyectos empresariales",
        "Documentación de requerimientos funcionales y técnicos con alto nivel de detalle"
      ]
    },
    {
      role: "Líder Técnico",
      company: "Apymsa-Exodus",
      period: "2018 - 2020",
      current: false,
      responsibilities: [
        "Gestión de equipos de desarrollo para proyectos operativos de alto impacto",
        "Liderazgo en contratación y desarrollo de talento técnico especializado",
        "Implementación y optimización de metodologías ágiles (SCRUM) en equipos"
      ]
    },
    {
      role: "Desarrollador de Software",
      company: "Apymsa-Exodus",
      period: "2014 - 2018",
      current: false,
      responsibilities: [
        "Desarrollo de aplicaciones empresariales críticas en C# y Visual Basic.Net",
        "Gestión y optimización de bases de datos SQL y SQLite",
        "Implementación de soluciones para optimización de procesos en almacenes y CEDIS"
      ]
    }
  ]

  const certifications = [
    { name: "Generative AI for Business Analysts", issuer: "LinkedIn Learning" },
    { name: "Agile Product Owner Role: Foundations", issuer: "LinkedIn Learning" },
    { name: "Scrum: Los roles de Scrum", issuer: "LinkedIn Learning" },
    { name: "Foundations of Project Management", issuer: "Google - Coursera" },
    { name: "Agile Project Management", issuer: "Google - Coursera" },
    { name: "CENEVAL EGEL-ICO", issuer: "Puntuación: 1132/1300" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                EI
              </div>
              <span className={`font-semibold transition-colors ${scrolled ? "text-foreground" : "text-foreground"}`}>
                Erick Izquierdo
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contactar
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${basePath}/cv-erick-izquierdo.pdf`}
              download="CV-Erick-Izquierdo-Hernandez.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-fit"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
            </div>
          </nav>
        )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Business Analyst & Líder Técnico</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
              Hola, soy
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Erick Izquierdo
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Profesional con más de 10 años de experiencia transformando necesidades de negocio 
            en soluciones tecnológicas. Especializado en metodologías ágiles y gestión de proyectos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Ver mi trabajo
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a 
              href={`${basePath}/cv-erick-izquierdo.pdf`}
              download="CV-Erick-Izquierdo-Hernandez.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <Download className="h-5 w-5" />
              Descargar CV
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Proyectos Entregados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Compromiso</div>
            </div>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <ChevronDown className="h-8 w-8 mx-auto text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                <Users className="h-4 w-4" />
                Acerca de mí
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transformando ideas en{" "}
                <span className="text-primary">soluciones reales</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Con más de 5 años de experiencia profesional en mi rol actual como Analista Técnico de Negocio 
                  en APYMSA, esto me ha permitido especializarme en la gestión ágil de proyectos y el mapeo de 
                  procesos, habilidades que he desarrollado y perfeccionado desde mis inicios como desarrollador 
                  de software en la misma compañía.
                </p>
                <p>
                  En APYMSA, colaboro estrechamente con equipos multidisciplinarios para facilitar sprints de 
                  diseño y proporcionar soporte de help desk, contribuyendo a la eficiencia y la innovación de 
                  nuestros servicios.
                </p>
                <p>
                  Mi competencia central radica en la capacidad de entender y traducir necesidades técnicas en 
                  soluciones prácticas alineadas con la misión y cultura de nuestra organización.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                    <BarChart3 className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Análisis de Datos</h3>
                    <p className="text-sm text-muted-foreground">SQL, Excel avanzado, Power BI</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                    <Code className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Desarrollo</h3>
                    <p className="text-sm text-muted-foreground">C#, .NET, Visual Basic</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                    <FileSpreadsheet className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Metodologías</h3>
                    <p className="text-sm text-muted-foreground">SCRUM, Agile, Waterfall</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Liderazgo</h3>
                    <p className="text-sm text-muted-foreground">Equipos, stakeholders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              <Briefcase className="h-4 w-4" />
              Servicios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo que puedo hacer por ti
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrezco soluciones integrales para optimizar procesos, gestionar proyectos y 
              transformar necesidades de negocio en resultados tangibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              <TrendingUp className="h-4 w-4" />
              Trayectoria
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experiencia Profesional
            </h2>
            <p className="text-muted-foreground">
              Mi recorrido profesional en Apymsa-Exodus
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative pl-8 border-l-2 transition-colors ${
                  exp.current ? "border-primary" : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`absolute -left-2.5 top-0 w-5 h-5 rounded-full border-4 border-background ${
                  exp.current ? "bg-primary" : "bg-muted-foreground"
                }`} />
                
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          Actual
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              <GraduationCap className="h-4 w-4" />
              Formación
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educación y Certificaciones
            </h2>
          </div>

          {/* Academic Education */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Formación Académica
            </h3>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Maestría en Ingeniería de Software y Sistemas de Información</h4>
                  <span className="inline-flex items-center gap-2 text-sm">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">En curso</span>
                    2024 - 2025
                  </span>
                </div>
                <p className="text-muted-foreground">Tech Universidad</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Ingeniería en Sistemas Computacionales</h4>
                  <span className="text-sm text-muted-foreground">1999 - 2004</span>
                </div>
                <p className="text-muted-foreground">Instituto Tecnológico de Morelia</p>
                <p className="text-sm text-primary mt-1">Promedio: 88.4</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certificaciones
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-0.5 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Idiomas
            </h3>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Inglés</h4>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Nivel B1</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Escrito</span>
                    <span className="text-primary font-medium">70%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: "70%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Oral</span>
                    <span className="text-primary font-medium">70%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: "70%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              <Mail className="h-4 w-4" />
              Contacto
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trabajemos juntos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              ¿Tienes un proyecto en mente o buscas un Business Analyst con experiencia? 
              Me encantaría escucharte.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/25"
              >
                Enviar mensaje
                <Send className="h-5 w-5" />
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:izquierdo.herick@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">izquierdo.herick@gmail.com</p>
                    </div>
                  </a>
                  <a 
                    href="tel:+523325061550"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="font-medium text-foreground">33 2506 1550</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-medium text-foreground">Zapopan, Jalisco, México</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">Sígueme en redes</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.linkedin.com/in/erick-izquierdo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:izquierdo.herick@gmail.com"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                EI
              </div>
              <span className="text-muted-foreground">
                © 2026 Erick Izquierdo Hernández
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Business Analyst & Líder Técnico
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
