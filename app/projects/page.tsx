'use client';

import ProjectCard from '@/components/projectCard';
import { useState } from 'react';
import { PROJECTS } from '@/lib/projects-data';

export default function Projects(){

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [tappedIndex, setTappedIndex] = useState<number | null>(null);
    
    return (
        <main className="min-h-screen w-full bg-bg flex flex-col items-center text-center">
            <section className="w-full flex flex-col items-center px-10 py-20">
                <h2 className="font-cinzel text-3xl tracking-[0.2em] uppercase text-white/80 mb-6">Projects</h2>
                <div className="w-14 h-px bg-linear-to-r from-purple-400 to-transparent mb-12" />
                <div className="columns-1 md:columns-2 gap-6 w-full max-w-5xl">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>
        </main>

        
    );
}   