"use client";
import Image from 'next/image';
import AnimatedLetters from '@/components/animatedLetters';
import ProjectCard, { Project } from '@/components/projectCard';
import ShuffleButton from '@/components/shuffleButton';
import { useState } from 'react';
import { Github, Mail, Linkedin  } from "@deemlol/next-icons";
import NowPlaying from '@/components/nowPlaying';
import SkillCard from '@/components/skillCard';
import AboutCard, { AboutCardProps } from '@/components/aboutCard';

export default function Home() {
    const [shuffle, setShuffle] = useState<() => void>(() => () => {});
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [tappedIndex, setTappedIndex] = useState<number | null>(null);

    const activeIndex = hoveredIndex ?? tappedIndex;

    const PROJECTS: Project[] = [
        {
            title: "Password Strength Evaluator",
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

    const ABOUTS: AboutCardProps[] = [
        {
            label: "Currently", value: "BSc Computing Science", sub: "University of Glasgow | 3rd Year",
            isHovered: null,
            onHover: function (): void {
                throw new Error('Function not implemented.');
            },
            onLeave: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            label: "This Summer", value: "Ciena", sub: "Returning Intern",
            isHovered: null,
            onHover: function (): void {
                throw new Error('Function not implemented.');
            },
            onLeave: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            label: "Computing Interests", value: "Machine Learning | Algorithms | Networks",
            sub: '',
            isHovered: null,
            onHover: function (): void {
                throw new Error('Function not implemented.');
            },
            onLeave: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            label: "Favourite Problems", value: "Algorithmic Challenges",
            sub: '',
            isHovered: null,
            onHover: function (): void {
                throw new Error('Function not implemented.');
            },
            onLeave: function (): void {
                throw new Error('Function not implemented.');
            }
        },

        {
            label: "Beyond the screen", value: "Gym | Scout Leader | Cooking/Baking",
            sub: '',
            isHovered: null,
            onHover: function (): void {
                throw new Error('Function not implemented.');
            },
            onLeave: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            label: "Favourite Superhero", value: "SpiderMan",
            sub: '“With great power comes great responsibilty”',
            isHovered: null,
            onHover: function (): void {
                throw new Error('Function not implemented.');
            },
            onLeave: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            label: "Currently reading", value: "Childern of Dune",
            sub: '“Most deadly errors arise from obsolete assumptions.”',
            isHovered: null,
            onHover: function (): void {
                throw new Error('Function not implemented.');
            },
            onLeave: function (): void {
                throw new Error('Function not implemented.');
            }
        },        
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
                <div className="w-14 h-px bg-linear-to-r from-purple-400 to-transparent mb-2" />
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col gap-5 text-left">
                        <p className="font-cinzel text-white/60 text-sm leading-loose font-light tracking-wide">
                            I'm Sam. A Comp-Sci student who loves to solve problems and build things that interest me by tying in personal 
                            ideas with my current academic topics. I spend a lot of my time at university making projects that help me grow 
                            as a software engineer across different areas, machine learning and algorithms mainly.
                        </p>
                        <p className="font-cinzel text-white/60 text-sm leading-loose font-light tracking-wide">
                            Outside of coursework, I spend a fair amount of time tinkering with personal projects. I've always enjoyed maths 
                            and physics as well and they've definitely shaped the way I approach problems and enjoy seeing how they continue 
                            to tie in with my studies.
                        </p>
                        <p className="font-cinzel text-white/60 text-sm leading-loose font-light tracking-wide">
                            When I'm not coding, I'm probably baking, playing video games or consuming some work of science fiction. I also 
                            have a deep love for music so will likely have my headphones in.
                        </p>
                        <p className="font-cinzel text-white/60 text-sm leading-loose font-light tracking-wide">
                            I'm always looking for the next challenge...
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {ABOUTS.map(({ label, value, sub }, i) => (
                            <AboutCard
                                label= {label}
                                value = {value}
                                sub = {sub}
                                isHovered={activeIndex === null ? null : activeIndex === i ? true : false}
                                onHover={() => setHoveredIndex(i)}
                                onLeave={() => setHoveredIndex(null)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-10 py-20">
                <h2 className="font-cinzel text-sm tracking-[0.2em] uppercase text-white/40 mb-6">Projects</h2>
                <div className="w-14 h-px bg-linear-to-r from-purple-400 to-transparent mb-2" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-10 py-20">
                <h2 className="font-cinzel text-sm tracking-[0.2em] uppercase text-white/40 mb-6">Skills</h2>
                <div className="w-14 h-px bg-linear-to-r from-purple-400 to-transparent mb-2" />
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