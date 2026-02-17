"use client"

import { useEffect, useRef, useState } from "react"

export default function Home() {

  /* =========================
     SCROLL REVEAL ANIMATION
  ========================== */
  const revealRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp")
          }
        })
      },
      { threshold: 0.2 }
    )

    revealRef.current.forEach((el) => el && observer.observe(el))
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el)
    }
  }

  /* =========================
     PARALLAX HERO
  ========================== */
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">

      {/* FLOATING PARTICLES (CSS BASED - STABLE) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold">Arun Selvan G J</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a
            href="/Arun_Selvan_GJ.pdf"
            download
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
          >
            Download Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-10 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div style={{ transform: `translateY(${offset * 0.2}px)` }}>
          <h2 className="text-5xl font-bold mb-6">
            Senior DevOps & Platform Engineer
          </h2>

          <p className="text-lg text-blue-300 mb-4">
            CI/CD • Kubernetes • AI-Integrated Automation • Cloud Infrastructure
          </p>

          <p className="text-gray-300 mb-8 leading-7">
            10+ years building high-availability systems, managing 100+ servers,
            administering Kubernetes clusters, reducing MTTR by 35% and optimizing
            infrastructure cost by up to ₹2Cr annually.
          </p>

          <div className="flex gap-4">
            <a
              href="/Arun_Selvan_GJ.pdf"
              download
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Download Resume
            </a>
            <a
              href="https://linkedin.com/in/gjarunselvan"
              target="_blank"
              className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            className="rounded-full w-80 h-80 object-cover border-4 border-blue-500 shadow-2xl"
          />
        </div>

      </section>

      {/* TECH LOGOS */}
      <section ref={addToRefs} className="relative z-10 max-w-6xl mx-auto px-10 py-16 opacity-0 transition duration-700">
        <h3 className="text-3xl font-bold text-center mb-12">Tech Stack</h3>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center text-center">

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-12 mx-auto hover:scale-110 transition"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" className="h-12 mx-auto hover:scale-110 transition"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" className="h-12 mx-auto hover:scale-110 transition"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-12 mx-auto hover:scale-110 transition"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="h-12 mx-auto hover:scale-110 transition"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" className="h-12 mx-auto hover:scale-110 transition"/>

        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" ref={addToRefs} className="relative z-10 max-w-4xl mx-auto px-10 py-20 opacity-0 transition duration-700">
        <h3 className="text-3xl font-bold mb-12 text-center">Experience Timeline</h3>

        <div className="border-l border-blue-500 pl-6 space-y-12">

          <div>
            <h4 className="text-xl font-semibold">Walmart Global Tech (2020–Present)</h4>
            <p className="text-gray-400 mb-3">Senior System Engineer III</p>
            <p className="text-gray-300 leading-7">
              CI/CD modernization (40% faster releases), 50% deployment time reduction,
              99.99% uptime, 35% MTTR improvement, AI-based DevOps automation framework.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Cognizant (2017–2020)</h4>
            <p className="text-gray-400 mb-3">System Engineer</p>
            <p className="text-gray-300 leading-7">
              Linux hardening, patch automation, monitoring, backup systems, disaster recovery.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">DreamsPlus (2016–2017)</h4>
            <p className="text-gray-400 mb-3">Technical Support Executive</p>
            <p className="text-gray-300 leading-7">
              Firewall administration, network security, enterprise email systems.
            </p>
          </div>

        </div>
      </section>

      {/* COMPANY LOGOS */}
      <section ref={addToRefs} className="relative z-10 max-w-6xl mx-auto px-10 py-20 opacity-0 transition duration-700">
        <h3 className="text-3xl font-bold text-center mb-12">Organizations</h3>

        <div className="flex justify-center gap-16 items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Cognizant_logo.svg" className="h-12"/>
        </div>
      </section>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .animate-fadeUp {
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }

        .particle {
          position: absolute;
          bottom: -10px;
          width: 4px;
          height: 4px;
          background: rgba(59,130,246,0.6);
          border-radius: 50%;
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
          to {
            transform: translateY(-110vh);
            opacity: 0;
          }
        }
      `}</style>

    </div>
  )
}