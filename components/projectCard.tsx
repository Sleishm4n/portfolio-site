import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Project {
    title: string;
    subtitle?: string;
    description: string;
    status: string;
    date: string;
    tags?: string[];
    image?: string;
    href?: string;
    isHovered?: boolean | null;
    onHover?: () => void; 
    onLeave?: () => void;
}

export default function ProjectCard({ title, subtitle, description, status, date, tags, image, href, isHovered, onHover, onLeave }: Project) {
    const content = (
        <motion.div 
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            animate={{
                scale: isHovered === true ? 1.08 : isHovered === false ? 0.93 : 1,
                opacity: isHovered === true ? 1 : isHovered === false ? 0.35 : 1,
                zIndex: isHovered === true ? 10 : 1
            }}
            transition={{ duration: 0.2 }}
            className="group relative px-8 pt-10 pb-6 font-cinzel
                        border border-white/10 hover:border-white/25
                        transition-all duration-500 cursor-pointer text-left h-full flex flex-col"
        >
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-4 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute top-0 left-0 w-px h-4 bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-4 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-px h-4 bg-purple-500/60" aria-hidden="true" />

            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-cover mb-4 opacity-60 
                               group-hover:opacity-80 transition-opacity duration-500"
                />
            )}
            <div className='rounded-full mb-1 bg-purple-400/60 px-1.5 pb-1 pt-1 text-white/80 text-xs absolute top-4 right-4'>
                {status}
            </div>

            {subtitle && (
                <p className="text-xs tracking-[0.2em] uppercase text-purple-400/60 font-cinzel
                               group-hover:text-purple-400 transition-colors duration-500 mb-1">
                    {subtitle}
                </p>
            )}

            <p className="text-white/80 text-base mb-3 group-hover:text-white font-cinzel
                        transition-colors duration-500">
                {title}
            </p>
            
            <p className='text-[10px] tracking-[0.2em] uppercase text-purple-400/80
                               group-hover:text-purple-400 transition-colors duration-500 mb-1'>
                {date}
            </p>

            <p className="text-white/40 text-[14px] leading-relaxed tracking-wide font-space
                          group-hover:text-white/60 transition-colors duration-500 mb-4">
                {description}
            </p>
            <div className='mt-auto'>
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span key={tag} 
                              className="text-xs font-sans tracking-wider text-purple-400/50
                                         border border-purple-500/20 px-2 py-0.5
                                         group-hover:text-purple-400/70 group-hover:border-purple-500/40
                                         transition-all duration-500">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
                <div className="flex gap-3 mt-auto pt-4">
                    {href && (
                        <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-sans tracking-wider text-purple-400/50 border border-purple-500/20 px-3 py-1.5
                                    hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300">
                            GitHub ↗
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return content
}