"use client";
import Image from 'next/image';
import AnimatedLetters from '@/components/animatedLetters';
import ProjectCard, { Project } from '@/components/projectCard';
import ShuffleButton from '@/components/shuffleButton';
import { useState } from 'react';
import { Github, Mail, Linkedin } from "@deemlol/next-icons";
import NowPlaying from '@/components/nowPlaying';
import AboutCard, { AboutCardProps } from '@/components/aboutCard';
import { SKILLS } from '@/lib/skills-data';
import SkillsGrid from '@/components/skillsGrid';
import Link from 'next/link';
import ExperienceTree from '@/components/experienceTree';
import NetworkBackground from '@/components/networkBackground';

export default function Home() {
    const [shuffleState, setShuffleState] = useState<{ run: () => void }>({ run: () => {} });
    
    const [hoveredAboutIndex, setHoveredAboutIndex] = useState<number | null>(null);
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);

    const PROJECTS: Project[] = [
        {
            title: "mentats",
            subtitle: "First-Principles Deep Learning",
            description: "A deep learning and neural network framework built from scratch in Rust with zero external crates and published on crates.io (~20 downloads). Implements custom tensors, SGD/Adam optimizers, a 97.43% MNIST classifier and Conditional VAEs (CVAE) with free-bits KL annealing.",
            tags: ["Rust", "Deep Learning", "VAE / CVAE", "Linear Algebra", "Crates.io"],
            href: "https://github.com/Sleishm4n/mentats",
            cratesHref: "https://crates.io/crates/mentats",
            liveHref: "/mentats",
            status: 'Ongoing',
            date: 'Mar 2026'
        },
        {
            title: "Marine Sensor Dashboard",
            subtitle: "UofG Team Project - Systems & Data Visualisation",
            description: "A cross-platform desktop app built for Malin Group to monitor and visualise live marine sensor data during heavy marine lifts. Built with Electron and React, the app ingests real-time telemetry and presents it through an interactive dashboard designed for field operators.",
            tags: ["Electron", "React", "TypeScript", "Jest", "Node.js", "MQTT"],
            extHref: "https://malingroup.com",
            status: 'Complete',
            date: 'Sep 2025'
        },
        {
            title: "Git Auto-Commit",
            subtitle: "Developer Tooling & ML",
            description: "A CLI tool that generates commit messages from git diffs - starting with heuristic rules, then upgraded to a local LLM for semantic understanding. Uses a local Ollama model (qwen2.5:3b) with parsed git diffs from current project.",
            tags: ["Python", "LLM", "CLI", "NLP", "Git"],
            href: "https://github.com/Sleishm4n/auto-git-commit",
            status: 'Complete',
            date: 'Feb 2026'
        },
    ];

    const ABOUTS: AboutCardProps[] = [
        { label: "Currently", value: "BSc Computing Science", sub: "University of Glasgow | 3rd Year" },
        { label: "This Summer", value: "Ciena", sub: "Returning Intern" },
        { label: "Computing Interests", value: "Machine Learning | Algorithms | Networks", sub: '' },
        { label: "Favourite Problems", value: "Algorithmic Challenges", sub: '' },
        { label: "Beyond the screen", value: "Gym | Scout Leader | Cooking/Baking", sub: '' },
        { label: "Favourite Superhero", value: "Spider-Man", sub: '“With great power comes great responsibility”' },
        { label: "Currently reading", value: "Children of Dune", sub: '“Most deadly errors arise from obsolete assumptions.”' },        
    ];

    return (
        <main className="min-h-screen w-full bg-bg flex flex-col items-center text-center">  
            {/* Hero Section */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-transparent">
                <NetworkBackground />
                
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(13,16,24,0.4)_100%)] pointer-events-none z-0" />

                {/* Top Block: Profile Picture Box */}
                <div className="relative z-10 flex items-center justify-center max-w-4xl mx-auto p-4 md:p-6">
                    <div className="w-44 h-44 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-3xl border border-white/5 overflow-hidden bg-cards">
                        <Image 
                            src="/yose.jpg"
                            alt="Sam Leishman" 
                            className="w-full h-full object-cover"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>

                {/* Bottom Block: Text & Info Box */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-2 space-y-4"> 
                    <div className="space-y-1">
                        <AnimatedLetters text="Sam Leishman" onShuffleReady={(fn) => setShuffleState({ run: fn })} />
                        <p className="font-dm uppercase text-xs md:text-sm tracking-[0.15em] text-white/50">
                            Computing Science student at the University of Glasgow
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4 pt-2">
                        <div className="transform transition-transform active:scale-95">
                            <ShuffleButton onClick={shuffleState.run} />
                        </div>
                        <div className="w-full max-w-xs border-t border-white/5 pt-4">
                            <NowPlaying />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-thistle-700 to-transparent z-10" />
            </section>

            

            {/* About */}
            <section id="about" className="min-h-screen flex flex-col items-center justify-center px-10 py-20 max-w-4xl mx-auto p-6">
                <h2 className="font-dm text-sm tracking-[0.2em] uppercase text-white/40 mb-6">// About</h2>
                <div className="w-14 h-px bg-linear-to-r from-thistle-400 to-transparent mb-7" />
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col gap-5 text-center">
                        <p className="font-ibmPlex text-white/60 text-sm leading-loose font-light tracking-wide">
                            Hi, I'm Sam, a third-year Computing Science student at the University of Glasgow. My university projects 
                            have helped me grow as a software engineer in different areas including machine learning, 
                            algorithms and networking. I love solving problems and building things that tie in my personal
                            interests and my academic coursework.
                        </p>
                        <p className="font-ibmPlex text-white/60 text-sm leading-loose font-light tracking-wide">
                            When I'm not at university I spend most of my time on personal projects. My favourite project so far is mentats, 
                            the neural network framework I built from scratch in Rust which highlights my skills in machine learning. I've always enjoyed 
                            maths and physics and seeing how they shape my approach to problems.
                        </p>
                        <p className="font-ibmPlex text-white/60 text-sm leading-loose font-light tracking-wide">
                            When I'm not coding, you'll find me playing video games or consuming some work of science fiction. 
                        </p>
                        <p className="font-ibmPlex text-white/60 text-sm leading-loose font-light tracking-wide">
                            I'm especially interested in systems, machine learning, and building tools that are both useful and technically demanding.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {ABOUTS.map(({ label, value, sub }, i) => (
                            <AboutCard
                                key={label}
                                label={label}
                                value={value}
                                sub={sub}
                                isHovered={hoveredAboutIndex === null ? null : hoveredAboutIndex === i}
                                onHover={() => setHoveredAboutIndex(i)}
                                onLeave={() => setHoveredAboutIndex(null)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-linear-to-r from-transparent via-thistle-700 to-transparent my-16" />

            {/* Experience */}
            <section id='experience' className='min-h-screen w-full flex flex-col items-center justify-center px-10 py-20 max-w-4xl mx-auto p-6'>
                <h2 className="font-dm text-sm tracking-[0.2em] uppercase text-white/40 mb-6">// Experience</h2>
                <div className="w-14 h-px bg-linear-to-r from-thistle-400 to-transparent mb-7" />
                <ExperienceTree />
            </section>
            
            <div className="w-full h-px bg-linear-to-r from-transparent via-thistle-700 to-transparent my-16" />

            {/* Projects */}
            <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-10 py-20 max-w-4xl mx-auto p-6">
                <h2 className="font-dm text-sm tracking-[0.2em] uppercase text-white/40 mb-6">// Projects</h2>
                <div className="w-14 h-px bg-linear-to-r from-thistle-400 to-transparent mb-7" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-5">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard 
                            key={project.title} 
                            {...project} 
                            isHovered={hoveredProjectIndex === null ? null : hoveredProjectIndex === i}
                            onHover={() => setHoveredProjectIndex(i)}
                            onLeave={() => setHoveredProjectIndex(null)}
                        />
                    ))}
                </div>

                <Link className='font-dm text-xl mt-2 text-white/40 hover:text-thistle-400/80' href={'/projects'}> View all →</Link>
                <div className="w-24 h-px bg-linear-to-r from-thistle-400 to-transparent mb-7" />
            </section>

            <div className="w-full h-px bg-linear-to-r from-transparent via-thistle-700 to-transparent my-10" />

            {/* Skills */}
            <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-10 py-20 max-w-4xl mx-auto p-6">
                <h2 className="font-dm text-sm tracking-[0.2em] uppercase text-white/40 mb-6">// Skills</h2>
                <div className="w-14 h-px bg-linear-to-r from-thistle-400 to-transparent mb-7" />
                <SkillsGrid skills={SKILLS} />
            </section>

            <div className="w-full h-px bg-linear-to-r from-transparent via-thistle-700 to-transparent my-16" />

            {/* Contact */}
            <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-10 py-20 max-w-4xl mx-auto p-6">
                <h2 className="font-dm text-sm tracking-[0.2em] uppercase text-white/40 mb-6">// Contact</h2>
                <div className="w-14 h-px bg-linear-to-r from-thistle-400 to-transparent mb-7" />
                <p className="font-ibmPlex text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70 mb-6">
                    Feel free to reach out to me through email or LinkedIn, or check out my GitHub
                </p>
                <div className="items-center justify-center grid grid-cols-3 gap-6 w-full">
                    <a           
                        href="https://github.com/Sleishm4n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <Github size={32} color="#824F82" className="group-hover:opacity-70 transition-opacity" />
                        <span className="font-space text-xs tracking-widest text-white/40 group-hover:text-white/80 transition-colors">GitHub</span>
                    </a>
                    <a
                        href="mailto:sam.g.leishman@gmail.com"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <Mail size={32} color="#824F82" className="group-hover:opacity-70 transition-opacity" />
                        <span className="font-space text-xs tracking-widest text-white/40 group-hover:text-white/80 transition-colors">Email</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sam-leishman-0a174528b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <Linkedin size={32} color="#824F82" className="group-hover:opacity-70 transition-opacity" />
                        <span className="font-space text-xs tracking-widest text-white/40 group-hover:text-white/70 transition-colors">LinkedIn</span>
                    </a>
                </div>
            </section>
        </main>
    );
}