"use client";
import Image from 'next/image';
import AnimatedLetters from '@/components/animatedLetters';
import ProjectCard, { Project } from '@/components/projectCard';
import ShuffleButton from '@/components/shuffleButton';
import { useState } from 'react';
import { Github, Mail, Linkedin  } from "@deemlol/next-icons";
import NowPlaying from '@/components/nowPlaying';
import SkillCard from '@/components/skillCard';

export default function Home() {
    const [shuffle, setShuffle] = useState<() => void>(() => () => {});
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [tappedIndex, setTappedIndex] = useState<number | null>(null);

    const activeIndex = hoveredIndex ?? tappedIndex;

    const PROJECTS: Project[] = [
        {
            title: "Password Stength Evaluator",
            subtitle: "Machine Learning",
            description: "A defensive password-strength checker using statistical patterns from leaked datasets. Combines entropy analysis, pattern detection, and ML models to estimate password predictability — without storing or cracking passwords.",
            tags: ["Python", "scikit-learn", "NLP", "Security", "ML"],
            href: "https://github.com/Sleishm4n/PasswordStrengthChecker"
        },
        {
            title: "Multi-Language Sudoku Solver",
            subtitle: "Algorithms & Languages",
            description: "A comprehensive exploration of Sudoku solving across Python, Rust, C++ and Java. Covers backtracking, constraint solving, and stochastic algorithms across 9×9 and 16×16 grids.",
            tags: ["Python", "Rust", "C++", "Java", "Backtracking", "CSP"],
            href: "https://github.com/Sleishm4n/Sudokus"
        },
        {
            title: "Git Auto-Commit",
            subtitle: "Developer Tooling & ML",
            description: "A CLI tool that generates commit messages from git diffs — starting with heuristic rules, then upgraded to a local LLM for semantic understanding.",
            tags: ["Python", "LLM", "CLI", "NLP", "Git"],
            href: "https://github.com/Sleishm4n/auto-git-commit"
        },
    ];

    const SKILLS: string[] = [
        "Python", "Java", "Git", "C/C++", "Machine Learning", "Testing and Debugging", "Linux", "Docker", "React",
    ];

    return (
        <main className="min-h-screen w-full bg-bg flex flex-col items-center text-center">
            
            {/* Hero */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-6">
                <div className="flex items-center justify-center">
                    <div className="w-48 h-48 md:w-75 md:h-80 rounded-full flex items-center justify-center shadow-2xl md:pb-5">
                        <Image 
                            src="/yose.jpg"
                            alt="Yose" 
                            className="w-full h-full object-cover rounded-full"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">  
                    <AnimatedLetters text="Sam Leishman" onShuffleReady={(fn) => setShuffle(() => fn)} />
                    <p className="font-cinzel text-sm md:text-lg text-gray-400">
                        Computing Science Student : University of Glasgow
                    </p>
                    <div className="flex justify-center mb-2.5">
                        <ShuffleButton onClick={shuffle} />
                    </div>
                    <div>
                        <NowPlaying />
                    </div>
                    
                </div>
            </section>

            {/* About */}
            <section id="about" className="min-h-screen flex flex-col items-center justify-center px-10 py-20">
                <h2 className="font-cinzel text-sm tracking-[0.2em] uppercase text-white/40 mb-6">About</h2>
            </section>

            {/* Projects */}
            <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-10 py-20">
                <h2 className="font-cinzel text-sm tracking-[0.2em] uppercase text-white/40 mb-6">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-10 py-20">
                <h2 className="font-cinzel text-sm tracking-[0.2em] uppercase text-white/40 mb-6">Skills</h2>
                {/* <AnimatedSkills /> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
                    {SKILLS.map((skill, i) => (
                        <SkillCard
                            key={skill}
                            skill={skill}
                            isHovered={activeIndex === null ? null : activeIndex === i ? true : false}
                            onHover={() => setHoveredIndex(i)}
                            onLeave={() => setHoveredIndex(null)}
                            onTap={() => setTappedIndex(prev => prev === i ? null : i)}
                        />
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-10 py-20">
                <h2 className="font-cinzel text-sm tracking-[0.2em] uppercase text-white/40 mb-6">Contact</h2>
                <p className="font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70 mb-6">
                    Feel free to reach out to me through email or Linkedin, or just checkout my github
                </p>
                <div className="items-center justify-center grid grid-cols-3 gap-6 w-full">
                    <a           
                        href="https://github.com/Sleishm4n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <Github size={32} color="#6b2ca5" className="group-hover:opacity-70 transition-opacity" />
                        <span className="font-cinzel text-xs tracking-widest text-white/40 group-hover:text-white/70 transition-colors">GitHub</span>
                    </a>
                    <a
                        href="mailto:sam.g.leishman@gmail.com"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <Mail size={32} color="#6b2ca5" className="group-hover:opacity-70 transition-opacity" />
                        <span className="font-cinzel text-xs tracking-widest text-white/40 group-hover:text-white/70 transition-colors">Email</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sam-leishman-0a174528b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <Linkedin size={32} color="#6b2ca5" className="group-hover:opacity-70 transition-opacity" />
                        <span className="font-cinzel text-xs tracking-widest text-white/40 group-hover:text-white/70 transition-colors">LinkedIn</span>
                    </a>
                </div>
            </section>

        </main>
    );
}