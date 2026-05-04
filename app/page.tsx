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
  Github,
  ArrowUpRight,
  ChevronDown
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
            {/* Animated threads */}
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
            <span className="text-lg font-semibold text-foreground">Tu Nombre</span>
            <span className="text-sm text-muted-foreground">Business Analyst</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Acerca de</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experiencia</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Proyectos</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Business Analyst</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            <LineShadowText shadowColor={shadowColor}>
              Transformando Datos
            </LineShadowText>
            <br />
            <span className="text-muted-foreground">en Decisiones Estratégicas</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Especialista en análisis de negocios, visualización de datos y optimización de procesos. 
            Convirtiendo información compleja en insights accionables.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShimmerButton
              shimmerColor="hsl(var(--primary))"
              background="hsl(var(--primary))"
              className="text-primary-foreground font-medium"
            >
              Ver Proyectos
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Acerca de mí</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Analista de Negocios con enfoque en resultados
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Profesional con experiencia en el análisis de datos, modelado de procesos de negocio 
                y desarrollo de soluciones estratégicas basadas en datos.
              </p>
              <p>
                Mi enfoque combina habilidades técnicas en herramientas de análisis con una comprensión 
                profunda de las necesidades del negocio para entregar valor medible.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Análisis de Datos</h3>
              <p className="text-sm text-muted-foreground">SQL, Python, Excel avanzado</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Visualización</h3>
              <p className="text-sm text-muted-foreground">Power BI, Tableau, Looker</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <Database className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Base de Datos</h3>
              <p className="text-sm text-muted-foreground">MySQL, PostgreSQL, MongoDB</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <FileSpreadsheet className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Documentación</h3>
              <p className="text-sm text-muted-foreground">BPMN, UML, Casos de Uso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Experiencia</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Trayectoria Profesional
          </h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg">Senior Business Analyst</h3>
                <span className="text-sm text-muted-foreground">2022 - Presente</span>
              </div>
              <p className="text-primary mb-2">Empresa Ejemplo S.A.</p>
              <p className="text-muted-foreground text-sm">
                Liderazgo en proyectos de transformación digital, análisis de requerimientos y 
                desarrollo de dashboards ejecutivos para la toma de decisiones.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted-foreground" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg">Business Analyst</h3>
                <span className="text-sm text-muted-foreground">2019 - 2022</span>
              </div>
              <p className="text-primary mb-2">Consultoría Tech</p>
              <p className="text-muted-foreground text-sm">
                Análisis de procesos de negocio, documentación de requerimientos funcionales y 
                coordinación con equipos de desarrollo para implementación de soluciones.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted-foreground" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-foreground text-lg">Data Analyst Jr.</h3>
                <span className="text-sm text-muted-foreground">2017 - 2019</span>
              </div>
              <p className="text-primary mb-2">StartUp Innovadora</p>
              <p className="text-muted-foreground text-sm">
                Desarrollo de reportes analíticos, limpieza y transformación de datos, y 
                soporte en la implementación de herramientas de BI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Proyectos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Trabajos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="h-40 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                Dashboard de Ventas
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sistema de visualización en tiempo real para el seguimiento de KPIs comerciales.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">Power BI</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">SQL</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">DAX</span>
              </div>
            </div>
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="h-40 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                Modelo Predictivo
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Desarrollo de modelo ML para predicción de churn de clientes con 85% de precisión.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">Python</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">Scikit-learn</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">Pandas</span>
              </div>
            </div>
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="h-40 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center">
                <FileSpreadsheet className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                Automatización de Procesos
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Implementación de RPA para reducir tiempos de procesamiento en un 60%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">UiPath</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">VBA</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">BPMN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o necesitas apoyo con análisis de datos? 
            Me encantaría escucharte.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="mailto:tu@email.com" 
              className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
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
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Tu Nombre. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Diseñado con precisión analítica
          </p>
        </div>
      </footer>
    </div>
  )
}
