"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import type { IconType } from "react-icons"
import {
  SiKubernetes,
  SiDocker,
  SiJenkins,
  SiTerraform,
  SiAmazon,
  SiLinux,
  SiPrometheus,
  SiGrafana,
  SiPython,
  SiGit,
} from "react-icons/si"
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiArrowUpRight,
  FiMapPin,
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiPhoneCall,
  FiMail,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi"

type ExperienceMetric = {
  label: string
  value: string
}

type SectionId = "about" | "skills" | "experience" | "projects" | "contact"

type NavItem = {
  label: string
  id: SectionId
}

type HighlightCard = {
  title: string
  context: string
  impact: string
  targetId: SectionId
}

type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  highlights: string[]
  metrics: ExperienceMetric[]
  bullets: string[]
}

type StatItem = {
  label: string
  end: number
  suffix: string
  decimals?: number
  subtext: string
}

type TechItem = {
  Icon: IconType
  label: string
  color: string
  achievements: string[]
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
]

const TECH_ICONS: TechItem[] = [
  {
    Icon: SiKubernetes,
    label: "Kubernetes",
    color: "#326CE5",
    achievements: [
      "Deployed and administered Kubernetes clusters for scalable microservices.",
      "Enabled 3x traffic growth without latency degradation.",
      "Stabilized platform operations across large production estates.",
    ],
  },
  {
    Icon: SiDocker,
    label: "Docker",
    color: "#0DB7ED",
    achievements: [
      "Automated build and deployment workflows with Dockerized services.",
      "Reduced deployment time by 50% through container-first releases.",
      "Improved environment consistency across multiple delivery stages.",
    ],
  },
  {
    Icon: SiJenkins,
    label: "Jenkins",
    color: "#D24939",
    achievements: [
      "Designed and optimized CI/CD pipelines across 5 environments.",
      "Increased release frequency by 40% with reliable automation gates.",
      "Improved deployment reliability and reduced manual errors.",
    ],
  },
  {
    Icon: SiTerraform,
    label: "Terraform",
    color: "#7B42BC",
    achievements: [
      "Standardized infrastructure provisioning with repeatable automation patterns.",
      "Improved infra consistency and rollout confidence for platform changes.",
      "Supported faster environment setup for delivery and testing teams.",
    ],
  },
  {
    Icon: SiAmazon,
    label: "AWS/Cloud",
    color: "#FF9900",
    achievements: [
      "Managed cloud infrastructure and platform resources at scale.",
      "Optimized infrastructure utilization for 30% cloud cost reduction.",
      "Improved reliability posture with production-focused operations.",
    ],
  },
  {
    Icon: SiLinux,
    label: "Linux",
    color: "#64748B",
    achievements: [
      "Managed 100+ production Linux servers with hardening and compliance.",
      "Sustained 99.99% uptime for mission-critical services.",
      "Led patching, security baseline, and operational stability practices.",
    ],
  },
  {
    Icon: SiPrometheus,
    label: "Prometheus",
    color: "#E6522C",
    achievements: [
      "Implemented observability for proactive monitoring and alerting.",
      "Improved incident visibility and early failure detection.",
      "Contributed to 35% MTTR reduction with better telemetry coverage.",
    ],
  },
  {
    Icon: SiGrafana,
    label: "Grafana",
    color: "#F46800",
    achievements: [
      "Built actionable dashboards for platform and service health.",
      "Accelerated root-cause analysis through high-signal visualization.",
      "Improved decision speed during incident response windows.",
    ],
  },
  {
    Icon: SiPython,
    label: "Python",
    color: "#3776AB",
    achievements: [
      "Developed modular AI agents for task automation and orchestration.",
      "Built evaluation pipelines reaching 95% test coverage across edge cases.",
      "Improved response consistency by 18% through structured benchmarking.",
    ],
  },
  {
    Icon: SiGit,
    label: "Git",
    color: "#F1502F",
    achievements: [
      "Enabled controlled release workflows with CI-integrated versioning.",
      "Supported collaborative delivery across infra and application teams.",
      "Improved change traceability for operational and project workstreams.",
    ],
  },
]

const STATS: StatItem[] = [
  {
    label: "Servers Managed",
    end: 100,
    suffix: "+",
    subtext: "Production Linux estate",
  },
  {
    label: "Clusters Operated",
    end: 100,
    suffix: "+",
    subtext: "Kubernetes and platform clusters",
  },
  {
    label: "Production Uptime",
    end: 99.99,
    suffix: "%",
    decimals: 2,
    subtext: "Mission-critical reliability",
  },
  {
    label: "MTTR Reduction",
    end: 35,
    suffix: "%",
    subtext: "Faster incident recovery",
  },
  {
    label: "Release Velocity",
    end: 40,
    suffix: "%",
    subtext: "CI/CD modernization outcome",
  },
  {
    label: "Task Throughput",
    end: 200,
    suffix: "%",
    subtext: "AI-driven workflow acceleration",
  },
]

const HIGHLIGHTS: HighlightCard[] = [
  {
    title: "CI/CD Modernization",
    context: "Rebuilt delivery pipelines across 5 environments.",
    impact: "+40% release velocity and 50% faster deployment time.",
    targetId: "experience",
  },
  {
    title: "Reliability Engineering",
    context: "Platform hardening and observability maturity.",
    impact: "99.99% uptime with 35% MTTR reduction.",
    targetId: "experience",
  },
  {
    title: "Kubernetes Scale",
    context: "Container platform growth and traffic resilience.",
    impact: "Supported 3x traffic growth without latency degradation.",
    targetId: "skills",
  },
  {
    title: "AI in DevOps",
    context: "Multi-agent orchestration for engineering workflows.",
    impact: "200% throughput and 45% manual triage reduction.",
    targetId: "projects",
  },
]

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Walmart Global Tech",
    role: "Senior System Engineer III",
    period: "Nov 2020 - Present",
    location: "Chennai",
    summary:
      "Scaled enterprise DevOps and platform reliability across high-traffic, cloud-native systems with measurable delivery and uptime improvements.",
    highlights: [
      "CI/CD modernization across 5 environments",
      "100+ Linux servers and large Kubernetes footprint",
      "AI agents integrated into production DevOps workflows",
      "End-to-end observability and incident acceleration",
    ],
    metrics: [
      { label: "Release Velocity", value: "+40%" },
      { label: "Deployment Time", value: "-50%" },
      { label: "MTTR", value: "-35%" },
      { label: "Task Throughput", value: "+200%" },
    ],
    bullets: [
      "Designed and optimized CI/CD workflows using Jenkins, increasing release frequency by 40% and improving deployment reliability across 5 environments.",
      "Automated build, deployment, and configuration workflows using Bash scripting, Ansible, and Docker, reducing manual operational effort by ~60% and cutting deployment time by 50%.",
      "Managed and maintained Linux production servers, achieving 99.99% uptime and ensuring compliance with security standards.",
      "Deployed and administered Kubernetes clusters, enabling scalable containerized microservices and supporting 3x traffic growth without degradation in latency.",
      "Implemented observability stack using Prometheus, Grafana, and Splunk, reducing MTTR by 35% and improving early incident detection rates.",
      "Managed OneOps cloud infrastructure, optimizing platform resources and configurations to reduce cloud costs by 30%.",
      "Performed log file analysis, root cause investigations, and capacity planning to ensure data integrity and support RTO and RPO objectives for critical services.",
      "Designed and developed modular AI agents capable of task automation, decision-based execution, and workflow orchestration for a 3x productivity improvement in targeted tasks.",
      "Built a multi-agent orchestration framework enabling agent-to-agent communication and tool integration (APIs, CLI, cloud services), increasing task throughput by 200%.",
      "Developed a structured Agent Evaluation Framework measuring accuracy, latency, hallucination rate, task completion score, and reliability across edge cases with 95% test coverage.",
      "Implemented benchmarking pipelines for prompt optimization and output consistency validation, improving model response consistency by 18%.",
      "Integrated AI agents into DevOps workflows for log summarization, incident diagnostics, release note generation, and infrastructure documentation, reducing manual triage time by 45%.",
      "Architected a prototype Super Agent system with persistent memory, RAG knowledge, tool execution, and guardrail monitoring for end-to-end automation.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "System Engineer",
    period: "Aug 2017 - Nov 2020",
    summary:
      "Built a strong reliability foundation through Linux hardening, automation, and operational runbook discipline in production infrastructure.",
    highlights: [
      "Linux hardening and patch lifecycle ownership",
      "Automated routine maintenance and backups",
      "Proactive monitoring and issue prevention",
      "L2/L3 support for critical incidents",
    ],
    metrics: [
      { label: "Role Scope", value: "L2/L3" },
      { label: "Core Focus", value: "Linux Ops" },
      { label: "Delivery Mode", value: "Automation" },
      { label: "Outcome", value: "Stability" },
    ],
    bullets: [
      "Administered and hardened Linux servers for production environments, implementing security best practices, patch management, and compliance controls.",
      "Automated system backups, user account management, and routine maintenance using Bash scripting to improve operational efficiency.",
      "Monitored infrastructure using Prometheus, Grafana, and open source monitoring tools, proactively troubleshooting performance issues.",
      "Provided L2/L3 technical support for hardware, software, and OS-level incidents.",
      "Improved system stability and recovery readiness through disciplined runbooks and maintenance processes.",
    ],
  },
  {
    company: "DREAMSPLUS CONSULTING PVT LTD",
    role: "Technical Support Executive",
    period: "May 2016 - Apr 2017",
    summary:
      "Delivered frontline infrastructure and security operations, strengthening workstation, firewall, and communication reliability for business teams.",
    highlights: [
      "Email and network security administration",
      "Firewall and workstation operational support",
      "Customer-facing service responsiveness",
      "Rapid issue handling in fast-paced environments",
    ],
    metrics: [
      { label: "Domain", value: "IT Support" },
      { label: "Focus", value: "Security" },
      { label: "Environment", value: "Ops Desk" },
      { label: "Strength", value: "Response" },
    ],
    bullets: [
      "Maintained email and network security systems, ensuring high availability, data protection, and uninterrupted communication.",
      "Administered network workstations and firewalls, strengthening organizational security posture and reducing vulnerability exposure.",
      "Delivered front-office interfaces and data provisioning services, improving responsiveness and service quality for customer-facing operations.",
      "Supported core IT operations and incident response workflows in a fast-paced service environment.",
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSpotlight, setActiveSpotlight] = useState<SectionId | null>(null)
  const [activeTech, setActiveTech] = useState<TechItem | null>(null)
  const [expandedExperience, setExpandedExperience] = useState<Record<string, boolean>>({})
  const [activeNav, setActiveNav] = useState<SectionId>("about")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [dark, setDark] = useState(true)
  const [themeHydrated, setThemeHydrated] = useState(false)

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [])

  useEffect(() => {
    const saved = window.localStorage.getItem("theme")
    const resolvedDark =
      saved === "light"
        ? false
        : saved === "dark"
          ? true
          : window.matchMedia("(prefers-color-scheme: dark)").matches

    const frame = window.requestAnimationFrame(() => {
      setDark(resolvedDark)
      setThemeHydrated(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    if (themeHydrated) {
      window.localStorage.setItem("theme", dark ? "dark" : "light")
    }
  }, [dark, themeHydrated])

  useEffect(() => {
    const hasOverlayOpen = Boolean(activeSpotlight || activeTech || menuOpen)
    document.body.style.overflow = hasOverlayOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeSpotlight, activeTech, menuOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return
      }

      setMenuOpen(false)
      setActiveTech(null)
      setActiveSpotlight(null)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    let frame = 0

    const updateScrollUi = () => {
      const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      const marker = window.scrollY + 140
      let currentSection: SectionId = "about"

      for (const section of sections) {
        if (marker >= section.offsetTop) {
          currentSection = section.id as SectionId
        }
      }

      setActiveNav((prev) => (prev === currentSection ? prev : currentSection))

      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const nextProgress = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0
      setScrollProgress(nextProgress)
      frame = 0
    }

    const onScroll = () => {
      if (frame) {
        return
      }

      frame = window.requestAnimationFrame(updateScrollUi)
    }

    updateScrollUi()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const openSpotlight = (sectionId: SectionId) => {
    setActiveTech(null)
    setActiveSpotlight(sectionId)
    setMenuOpen(false)
  }

  const scrollToSection = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) {
      setMenuOpen(false)
      return
    }

    const navOffset = 92
    const targetTop = section.getBoundingClientRect().top + window.scrollY - navOffset
    window.scrollTo({ top: targetTop, behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] text-gray-900 dark:text-white">
        {activeSpotlight && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8">
            <button
              type="button"
              aria-label="Close spotlight"
              onClick={() => setActiveSpotlight(null)}
              className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl rounded-2xl border border-blue-300/30 bg-white dark:bg-slate-900 p-5 md:p-7 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300 mb-1">
                    {activeSpotlight[0].toUpperCase()}
                    {activeSpotlight.slice(1)} Spotlight
                  </p>
                  <h4 className="text-2xl font-bold">
                    {activeSpotlight === "about" && "Profile Focus"}
                    {activeSpotlight === "skills" && "Technical Capability"}
                    {activeSpotlight === "experience" && "Career Timeline Focus"}
                    {activeSpotlight === "projects" && "Highlighted Outcomes"}
                    {activeSpotlight === "contact" && "Contact Hub"}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveSpotlight(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm"
                >
                  <FiArrowLeft />
                  Back
                </button>
              </div>

              {activeSpotlight === "about" && (
                <div className="space-y-5">
                  <p className="text-sm md:text-base opacity-90">
                    Senior DevOps & Platform Engineer with 10+ years of experience building resilient cloud-native systems,
                    CI/CD modernization, observability, and AI-driven automation.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {STATS.map((stat) => (
                      <div
                        key={`about-stat-${stat.label}`}
                        className="rounded-lg border border-blue-200/60 dark:border-blue-700/40 p-3 bg-blue-50/70 dark:bg-blue-500/10"
                      >
                        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          {stat.end}
                          {stat.suffix}
                        </p>
                        <p className="text-xs opacity-80">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSpotlight === "skills" && (
                <div>
                  <p className="text-xs md:text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Click a technology logo to open related achievement highlights.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {TECH_ICONS.map((tech) => (
                      <motion.button
                        key={`skills-spotlight-${tech.label}`}
                        type="button"
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTech(tech)}
                        className="rounded-lg border p-3 text-center bg-white/90 dark:bg-slate-900/60 shadow-sm transition hover:shadow-md"
                        style={{
                          borderColor: `${tech.color}66`,
                          boxShadow: `0 10px 20px ${tech.color}1f`,
                        }}
                      >
                        <div className="text-2xl flex justify-center mb-2" style={{ color: tech.color }}>
                          <tech.Icon />
                        </div>
                        <p className="text-xs font-medium text-slate-800 dark:text-slate-100">{tech.label}</p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {activeSpotlight === "experience" && (
                <div className="space-y-4 max-h-[50vh] overflow-auto pr-1">
                  {EXPERIENCE.map((item) => (
                    <div
                      key={`exp-spotlight-${item.company}`}
                      className="rounded-lg border border-blue-200/60 dark:border-blue-700/40 p-4 bg-blue-50/70 dark:bg-blue-500/10"
                    >
                      <p className="font-semibold">{item.company}</p>
                      <p className="text-sm opacity-80 mb-2">{item.role} • {item.period}</p>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        {item.bullets.slice(0, 3).map((bullet) => (
                          <li key={`${item.company}-${bullet}`}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeSpotlight === "projects" && (
                <div className="grid md:grid-cols-2 gap-4">
                  {HIGHLIGHTS.map((card) => (
                    <motion.button
                      key={`spotlight-${card.title}`}
                      type="button"
                      whileHover={{ y: -4, scale: 1.01 }}
                      onClick={() => {
                        setActiveSpotlight(null)
                        scrollToSection(card.targetId)
                      }}
                      className="text-left rounded-xl border border-blue-200 dark:border-blue-700/40 bg-blue-50/70 dark:bg-blue-500/10 p-4"
                    >
                      <p className="font-semibold mb-1">{card.title}</p>
                      <p className="text-sm opacity-85 mb-3">{card.context}</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">{card.impact}</p>
                    </motion.button>
                  ))}
                </div>
              )}

              {activeSpotlight === "contact" && (
                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+917448440011"
                    className="rounded-lg border border-blue-200/60 dark:border-blue-700/40 p-4 bg-blue-50/70 dark:bg-blue-500/10 inline-flex items-center justify-between gap-3"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiPhoneCall className="text-blue-700 dark:text-blue-300" />
                      +91 7448440011
                    </span>
                    <FiArrowUpRight className="opacity-70" />
                  </a>
                  <a
                    href="mailto:gjarunselvan@gmail.com"
                    className="rounded-lg border border-blue-200/60 dark:border-blue-700/40 p-4 bg-blue-50/70 dark:bg-blue-500/10 inline-flex items-center justify-between gap-3"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiMail className="text-blue-700 dark:text-blue-300" />
                      gjarunselvan@gmail.com
                    </span>
                    <FiArrowUpRight className="opacity-70" />
                  </a>
                  <a
                    href="https://linkedin.com/in/gjarunselvan"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-blue-200/60 dark:border-blue-700/40 p-4 bg-blue-50/70 dark:bg-blue-500/10 inline-flex items-center justify-between gap-3"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiLinkedin className="text-blue-700 dark:text-blue-300" />
                      LinkedIn
                    </span>
                    <FiArrowUpRight className="opacity-70" />
                  </a>
                  <a
                    href="https://github.com/gjarunselvan"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-blue-200/60 dark:border-blue-700/40 p-4 bg-blue-50/70 dark:bg-blue-500/10 inline-flex items-center justify-between gap-3"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiGithub className="text-blue-700 dark:text-blue-300" />
                      GitHub
                    </span>
                    <FiArrowUpRight className="opacity-70" />
                  </a>
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    const target = activeSpotlight
                    setActiveSpotlight(null)
                    window.setTimeout(() => scrollToSection(target), 100)
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
                >
                  Open Section <FiArrowUpRight />
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {activeTech && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8">
            <button
              type="button"
              aria-label="Close technology details"
              onClick={() => setActiveTech(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.24 }}
              className="relative w-full max-w-2xl rounded-2xl border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 md:p-7 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border"
                    style={{
                      color: activeTech.color,
                      borderColor: `${activeTech.color}66`,
                      background: `${activeTech.color}1a`,
                    }}
                  >
                    <activeTech.Icon className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      Experience Achievement
                    </p>
                    <h4 className="text-2xl font-bold" style={{ color: activeTech.color }}>
                      {activeTech.label}
                    </h4>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTech(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm"
                >
                  <FiArrowLeft />
                  Back
                </button>
              </div>

              <ul className="space-y-2.5 list-disc pl-5 text-sm md:text-base text-slate-800 dark:text-slate-100">
                {activeTech.achievements.map((achievement) => (
                  <li key={`${activeTech.label}-${achievement}`}>{achievement}</li>
                ))}
              </ul>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTech(null)
                    setActiveSpotlight("experience")
                  }}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white"
                  style={{
                    background: `linear-gradient(120deg, ${activeTech.color}, #2563eb)`,
                  }}
                >
                  View Experience <FiArrowUpRight />
                </button>
              </div>
            </motion.div>
          </div>
        )}

        <AnimatedBackdrop />
        <div className="pointer-events-none fixed left-0 top-0 z-[75] h-[3px] w-full bg-transparent">
          <div
            className="h-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_16px_rgba(59,130,246,0.6)]"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>

        <header className="sticky top-0 z-50 border-b border-slate-300/40 dark:border-slate-700/40 bg-white/70 dark:bg-slate-900/55 backdrop-blur-xl">
          <nav className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto relative">
            <h1 className="text-lg md:text-xl font-semibold">Arun Selvan G J</h1>

            <div className="hidden md:flex space-x-6 text-sm items-center">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openSpotlight(item.id)}
                  className={`transition ${
                    activeNav === item.id
                      ? "text-blue-700 dark:text-blue-300 font-semibold"
                      : "hover:text-blue-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setDark((prev) => !prev)}
                className="text-xs border border-slate-300/50 dark:border-slate-600/70 rounded-full px-3 py-1.5 hover:bg-blue-500/10"
                aria-label="Toggle theme"
              >
                {dark ? "Light Mode" : "Dark Mode"}
              </button>

              <a
                href="/Arun_Selvan_GJ.pdf"
                download
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-white"
              >
                Resume
              </a>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                type="button"
                onClick={() => setDark((prev) => !prev)}
                aria-label="Toggle theme"
              >
                {dark ? <FiSun /> : <FiMoon />}
              </button>
              <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>

            {menuOpen && (
              <div className="absolute top-16 right-0 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col gap-4 md:hidden">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`text-left ${activeNav === item.id ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}`}
                  onClick={() => openSpotlight(item.id)}
                >
                  {item.label}
                </button>
                ))}
                <a href="/Arun_Selvan_GJ.pdf" download>
                  Resume
                </a>
              </div>
            )}
          </nav>
        </header>

        <section
          id="about"
          className="scroll-mt-24 max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Senior DevOps & Platform Engineer</h2>

            <p className="text-blue-500 mb-4">10+ Years • Kubernetes • CI/CD • Cloud • AI-Integrated Automation</p>

            <p className="leading-7 mb-8">
              Designing resilient cloud-native infrastructure powering 100+ servers and large-scale Kubernetes clusters.
              Specialized in CI/CD modernization, observability, cost optimization, and AI-driven DevOps innovation.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/Arun_Selvan_GJ.pdf"
                download
                className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 text-white"
              >
                Download Resume
              </a>

              <button
                type="button"
                onClick={() => openSpotlight("projects")}
                className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                View Highlights
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="pointer-events-none absolute -inset-5 md:-inset-7 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-indigo-500/25 blur-2xl" />

            <div className="relative rounded-[1.25rem] p-1.5 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_20px_55px_rgba(37,99,235,0.35)]">
              <div className="overflow-hidden rounded-[1rem] border border-white/30 dark:border-blue-300/20 bg-slate-900/20">
                <Image
                  src="/profile.jpg"
                  alt="Arun Selvan G J"
                  width={320}
                  height={320}
                  className="rounded-none w-64 md:w-80 h-64 md:h-80 object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {STATS.map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white/85 dark:bg-white/5 backdrop-blur-md border border-slate-300/70 dark:border-white/20 rounded-2xl py-7 px-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-300">
                <CountUp
                  end={item.end}
                  decimals={item.decimals ?? 0}
                  suffix={item.suffix}
                  duration={2.2}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
              <p className="mt-2 text-sm font-semibold">{item.label}</p>
              <p className="text-xs opacity-70 mt-1">{item.subtext}</p>
            </motion.div>
          ))}
        </section>

        <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-6 md:px-10 py-16">
          <h3 className="text-3xl font-bold mb-3 text-center">Context Highlights</h3>
          <p className="text-center opacity-80 max-w-3xl mx-auto mb-10">
            Selected outcomes from the resume. Hover for depth and click to jump into the relevant section.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((card, index) => (
              <motion.button
                key={card.title}
                type="button"
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.015 }}
                onClick={() => scrollToSection(card.targetId)}
                className="text-left rounded-2xl border border-blue-300/60 dark:border-blue-400/20 bg-white/85 dark:bg-white/5 backdrop-blur-md p-6 transition hover:shadow-xl hover:shadow-blue-500/15 hover:border-blue-500/60"
              >
                <p className="text-lg font-semibold mb-2">{card.title}</p>
                <p className="text-sm opacity-90 mb-4">{card.context}</p>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-blue-600 dark:text-blue-300 text-sm font-medium">{card.impact}</span>
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-blue-300/50 dark:border-blue-300/30">
                    Open <FiArrowUpRight />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 max-w-6xl mx-auto px-6 md:px-10 py-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-3 text-center bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Tech Stack
          </h3>
          <p className="text-center text-sm md:text-base text-slate-700 dark:text-slate-300 mb-10">
            Color-coded tools powering delivery, reliability, and scale. Tap any logo to view impact.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {TECH_ICONS.map((tech) => (
              <motion.button
                key={tech.label}
                type="button"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTech(tech)}
                className="rounded-xl border py-5 px-3 backdrop-blur-md shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2"
                style={{
                  borderColor: `${tech.color}66`,
                  background: dark
                    ? `linear-gradient(160deg, ${tech.color}1a, rgba(15,23,42,0.88))`
                    : `linear-gradient(160deg, ${tech.color}14, rgba(255,255,255,0.9))`,
                  boxShadow: `0 14px 30px ${tech.color}24`,
                }}
              >
                <div className="text-4xl flex justify-center mb-2" style={{ color: tech.color }}>
                  <tech.Icon />
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">{tech.label}</p>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Experience Timeline</h3>
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 max-w-3xl">
              A decade-long progression across enterprise operations, platform engineering, and AI-enabled DevOps delivery.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {EXPERIENCE.map((item, index) => {
                const isExpanded = Boolean(expandedExperience[item.company])
                const visibleBullets = isExpanded ? item.bullets : item.bullets.slice(0, 4)
                const placeLeft = index % 2 === 0

                return (
                  <motion.article
                    key={`${item.company}-${item.role}`}
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUp}
                    transition={{ delay: index * 0.06 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8"
                  >
                    <div className={`${placeLeft ? "md:col-start-1" : "md:col-start-3"} relative ml-10 md:ml-0`}>
                      <motion.div
                        whileHover={{ y: -3, scale: 1.01 }}
                        className="group relative overflow-hidden rounded-2xl border border-slate-300/70 dark:border-white/15 bg-white/90 dark:bg-white/5 backdrop-blur-md p-5 md:p-6 shadow-sm hover:shadow-xl transition"
                      >
                        <div
                          className={`absolute inset-x-0 top-0 h-1 ${
                            placeLeft
                              ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
                              : "bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500"
                          }`}
                        />

                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border border-blue-300/60 dark:border-blue-500/40 bg-blue-50/80 dark:bg-blue-500/10">
                            <FiBriefcase className="text-blue-600 dark:text-blue-300" />
                            {item.role}
                          </span>
                          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-slate-300/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70">
                            <FiCalendar className="opacity-80" />
                            {item.period}
                          </span>
                        </div>

                        <h4 className="font-semibold text-xl mb-1">{item.company}</h4>
                        {item.location && (
                          <p className="text-sm opacity-80 mb-3 inline-flex items-center gap-2">
                            <FiMapPin className="opacity-80" />
                            {item.location}
                          </p>
                        )}

                        <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-4">{item.summary}</p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {item.metrics.map((metric) => (
                            <div
                              key={`${item.company}-${metric.label}`}
                              className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-slate-50/80 dark:bg-slate-800/45 p-2.5"
                            >
                              <p className="text-[10px] uppercase tracking-[0.16em] opacity-70 mb-0.5">{metric.label}</p>
                              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">{metric.value}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.highlights.map((tag) => (
                            <span
                              key={`${item.company}-${tag}`}
                              className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-full border border-blue-300/50 dark:border-blue-400/30 bg-blue-50/70 dark:bg-blue-500/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <ul className="space-y-2.5 text-sm md:text-[15px] leading-relaxed">
                          {visibleBullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5">
                              <FiCheckCircle className="mt-0.5 shrink-0 text-blue-500 dark:text-blue-300" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {item.bullets.length > 4 && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedExperience((prev) => ({
                                ...prev,
                                [item.company]: !prev[item.company],
                              }))
                            }
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200"
                          >
                            {isExpanded ? "Show less" : "Show more achievements"}
                            {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                          </button>
                        )}
                      </motion.div>
                    </div>

                    <div className="absolute left-5 top-6 md:static md:col-start-2 md:justify-self-center">
                      <span className="relative flex h-4 w-4 items-center justify-center">
                        <span className="absolute inline-flex h-4 w-4 rounded-full bg-blue-400/35 animate-ping" />
                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.85)]" />
                      </span>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20 border-t border-slate-300/60 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-slate-300/70 dark:border-white/15 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md p-6 md:p-8 shadow-xl"
            >
              <div className="pointer-events-none absolute -top-24 -left-20 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -right-16 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative grid lg:grid-cols-[1.25fr_1fr] gap-7 md:gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300 mb-2">Contact</p>
                  <h3 className="text-2xl md:text-4xl font-bold mb-3">Let’s Build Something Great Together</h3>
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 max-w-2xl">
                    Open to impactful DevOps, Platform Engineering, and Reliability roles. If you have a team challenge in scale, uptime, or delivery velocity, let’s connect.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <span className="text-xs px-3 py-1 rounded-full border border-emerald-300/70 dark:border-emerald-500/40 bg-emerald-50/80 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                      Available for Senior Roles
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full border border-blue-300/70 dark:border-blue-500/40 bg-blue-50/80 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300">
                      DevOps • Platform • SRE
                    </span>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    <motion.a
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      href="tel:+917448440011"
                      className="group rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/45 p-4 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-10 w-10 rounded-lg bg-blue-500/15 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                          <FiPhoneCall />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.14em] opacity-70">Phone</p>
                          <p className="font-semibold text-sm md:text-base">+91 7448440011</p>
                        </div>
                      </div>
                      <FiArrowUpRight className="opacity-60 group-hover:opacity-100" />
                    </motion.a>

                    <motion.a
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      href="mailto:gjarunselvan@gmail.com"
                      className="group rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/45 p-4 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-10 w-10 rounded-lg bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 flex items-center justify-center">
                          <FiMail />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.14em] opacity-70">Email</p>
                          <p className="font-semibold text-sm md:text-base">gjarunselvan@gmail.com</p>
                        </div>
                      </div>
                      <FiArrowUpRight className="opacity-60 group-hover:opacity-100" />
                    </motion.a>
                  </div>
                </div>

                <div className="grid gap-3 content-start">
                  <motion.a
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href="https://linkedin.com/in/gjarunselvan"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/45 p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-lg bg-sky-500/15 text-sky-700 dark:text-sky-300 flex items-center justify-center">
                        <FiLinkedin />
                      </span>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-xs opacity-70">Professional profile</p>
                      </div>
                    </div>
                    <FiArrowUpRight className="opacity-60 group-hover:opacity-100" />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href="https://github.com/gjarunselvan"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/45 p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-lg bg-slate-600/15 text-slate-800 dark:text-slate-200 flex items-center justify-center">
                        <FiGithub />
                      </span>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-xs opacity-70">Code and projects</p>
                      </div>
                    </div>
                    <FiArrowUpRight className="opacity-60 group-hover:opacity-100" />
                  </motion.a>

                  <a
                    href="/Arun_Selvan_GJ.pdf"
                    download
                    className="rounded-xl border border-blue-400/40 dark:border-blue-500/40 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 flex items-center justify-between shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-500 transition"
                  >
                    <div>
                      <p className="font-semibold">Download Resume</p>
                      <p className="text-xs text-blue-100">Latest profile and achievements</p>
                    </div>
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, 30, -20, 0], y: [0, 24, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"
        animate={{ x: [0, -25, 12, 0], y: [0, -18, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl"
        animate={{ x: [0, -20, 18, 0], y: [0, 16, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
