import Image from 'next/image';

export interface Project {
    title: string;
    subtitle?: string;
    description: string;
    tags?: string[];
    image?: string;
    href?: string;
}

export default function ProjectCard({ title, subtitle, description, tags, image, href }: Project) {
    const content = (
        <div className="group relative px-8 py-6 font-cinzel
                        border border-white/10 hover:border-white/25
                        transition-all duration-500 cursor-pointer text-left h-full">
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
            <h3 className="text-white/80 text-base mb-3 group-hover:text-white 
                        transition-colors duration-500">
                {title}
            </h3>
            {subtitle && (
                <h2 className="text-xs tracking-[0.2em] uppercase text-purple-400/60
                               group-hover:text-purple-400 transition-colors duration-500 mb-1">
                    {subtitle}
                </h2>
            )}

            

            <p className="text-white/40 text-sm leading-relaxed tracking-wide font-sans
                          group-hover:text-white/60 transition-colors duration-500 mb-4">
                {description}
            </p>

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
        </div>
    );

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
            {content}
        </a>
    ) : (
        <div className="h-full">{content}</div>
    );
}