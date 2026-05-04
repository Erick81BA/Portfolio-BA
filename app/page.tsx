"use client"

import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
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
  Code
} from "lucide-react"

export default function PortfolioPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const shadowColor = mounted && resolvedTheme === "dark" ? "white" : "black"

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" className="[stop-color:var(--primary)]" stopOpacity="1" />
              <stop offset="50%" className="[stop-color:var(--accent)]" stopOpacity="0.6" />
              <stop offset="100%" className="[stop-color:var(--accent)]" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="[stop-color:var(--background)]" />
              <stop offset="15%" className="[stop-color:var(--primary)]" stopOpacity="0.5" />
              <stop offset="85%" className="[stop-color:var(--primary)]" stopOpacity="0.5" />
              <stop offset="100%" className="[stop-color:var(--background)]" />
            </linearGradient>
            <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="[stop-color:var(--background)]" />
              <stop offset="12%" className="[stop-color:var(--accent)]" stopOpacity="0.4" />
              <stop offset="88%" className="[stop-color:var(--accent)]" stopOpacity="0.4" />
              <stop offset="100%" className="[stop-color:var(--background)]" />
            </linearGradient>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g>
            <path
              id="thread1"
              d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340"
              stroke="url(#threadFade1)"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#thread1" />
              </animateMotion>
            </circle>

            <path
              id="thread2"
              d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370"
              stroke="url(#threadFade2)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
            />
            <circle r="2.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#thread2" />
              </animateMotion>
            </circle>

            <path
              id="thread3"
              d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330"
              stroke="url(#threadFade1)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
            <circle r="1.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="4.5s" repeatCount="indefinite">
                <mpath href="#thread3" />
              </animateMotion>
            </circle>

            <path
              id="thread4"
              d="M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390"
              stroke="url(#threadFade2)"
              strokeWidth="0.6"
              fill="none"
              opacity="0.5"
            />
            <circle r="1.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="5.5s" repeatCount="indefinite">
                <mpath href="#thread4" />
              </animateMotion>
            </circle>
          </g>
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">Erick Izquierdo</span>
            <span className="text-sm text-muted-foreground hidden sm:inline">Business Analyst & Líder Técnico</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Perfil</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Habilidades</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experiencia</a>
            <a href="#education" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Educación</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Business Analyst & Líder Técnico</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            <LineShadowText shadowColor={shadowColor}>
              Erick Izquierdo
            </LineShadowText>
            <br />
            <span className="text-muted-foreground">Hernández</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Profesional con más de 10 años de experiencia en análisis, diseño y desarrollo de software.
            Experto en gestión de proyectos ágiles y desarrollo de soluciones tecnológicas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShimmerButton
              shimmerColor="hsl(var(--primary))"
              background="hsl(var(--primary))"
              className="text-primary-foreground font-medium"
            >
              <a href="#experience">Ver Experiencia</a>
            </ShimmerButton>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 text-foreground hover:text-primary transition-colors"
            >
              Contactar <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Perfil Profesional</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Acerca de mí
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Con más de 5 años de experiencia profesional en mi rol actual como Analista Técnico de Negocio 
                en APYMSA, esto me ha permitido especializarme en la gestión ágil de proyectos y el mapeo de 
                procesos, habilidades que he desarrollado y perfeccionado desde mis inicios como desarrollador 
                de software en la misma compañía.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                En APYMSA, colaboro estrechamente con equipos multidisciplinarios para facilitar sprints de 
                diseño y proporcionar soporte de help desk, contribuyendo a la eficiencia y la innovación de 
                nuestros servicios.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi competencia central radica en la capacidad de entender y traducir necesidades técnicas en 
                soluciones prácticas alineadas con la misión y cultura de nuestra organización. Estoy comprometido 
                con el aporte de perspectivas diversas y experiencias enriquecedoras al equipo, siempre con el 
                objetivo de alcanzar la excelencia en cada proyecto encomendado.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Zapopan, Jalisco</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>izquierdo.herick@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>33 2506 1550</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Competencias</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Habilidades
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Técnicas
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Metodologías Ágiles (SCRUM)</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Análisis de Negocios</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Gestión de Proyectos</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Database className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">SQL y Bases de Datos</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Desarrollo .NET</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Blandas
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Comunicación Asertiva</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Liderazgo de Equipos</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Resolución de Problemas</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Negociación</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">Inteligencia Emocional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Idiomas
              </h3>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-medium text-foreground mb-4">Inglés - Nivel B1</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Escrito</span>
                      <span className="text-primary">70%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "70%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Oral</span>
                      <span className="text-primary">70%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "70%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Trayectoria</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Experiencia Profesional
          </h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg">Business Analyst</h3>
                <span className="text-sm text-muted-foreground">2020 - Presente</span>
              </div>
              <p className="text-primary mb-3">Apymsa-Exodus</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Liderazgo en análisis y diseño de iniciativas para áreas de operaciones, incluyendo cadena de suministro y operaciones retail
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Facilitación de comunicación entre stakeholders y equipos técnicos para optimización de procesos críticos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Implementación exitosa de metodologías ágiles y tradicionales en múltiples proyectos empresariales
                </li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted-foreground" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg">Líder Técnico</h3>
                <span className="text-sm text-muted-foreground">2018 - 2020</span>
              </div>
              <p className="text-primary mb-3">Apymsa-Exodus</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Gestión de equipos de desarrollo para proyectos operativos de alto impacto
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Liderazgo en contratación y desarrollo de talento técnico especializado
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Implementación y optimización de metodologías ágiles (SCRUM) en equipos multidisciplinarios
                </li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted-foreground" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg">Desarrollador de Software</h3>
                <span className="text-sm text-muted-foreground">2014 - 2018</span>
              </div>
              <p className="text-primary mb-3">Apymsa-Exodus</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Desarrollo de aplicaciones empresariales críticas en C# y Visual Basic.Net
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Gestión y optimización de bases de datos SQL y SQLite para mejora de rendimiento
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Implementación exitosa de soluciones para optimización de procesos en almacenes y CEDIS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Formación</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Educación y Certificaciones
          </h2>
          
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Formación Académica
            </h3>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Maestría en Ingeniería de Software y Sistemas de Información</h4>
                  <span className="text-sm text-primary">2024 - 2025</span>
                </div>
                <p className="text-muted-foreground">Tech Universidad (En curso)</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Ingeniería en Sistemas Computacionales</h4>
                  <span className="text-sm text-primary">1999 - 2004</span>
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
              Certificaciones y Cursos
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <h4 className="font-medium text-foreground mb-1">Generative AI for Business Analysts</h4>
                <p className="text-sm text-muted-foreground">LinkedIn Learning</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <h4 className="font-medium text-foreground mb-1">Agile Product Owner Role: Foundations</h4>
                <p className="text-sm text-muted-foreground">LinkedIn Learning</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <h4 className="font-medium text-foreground mb-1">Foundations of Project Management</h4>
                <p className="text-sm text-muted-foreground">Google - Coursera</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <h4 className="font-medium text-foreground mb-1">Agile Project Management</h4>
                <p className="text-sm text-muted-foreground">Google - Coursera</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors md:col-span-2">
                <h4 className="font-medium text-foreground mb-1">CENEVAL EGEL-ICO</h4>
                <p className="text-sm text-muted-foreground">Puntuación: 1132/1300</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o buscas un Business Analyst con experiencia? 
            Me encantaría escucharte.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="mailto:izquierdo.herick@gmail.com" 
              className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+523325061550" 
              className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Teléfono"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Erick Izquierdo Hernández. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Business Analyst & Líder Técnico
          </p>
        </div>
      </footer>
    </div>
  )
}
