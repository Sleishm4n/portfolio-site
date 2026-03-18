'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ExperienceCard from "./experienceCard"
import { experiences } from "@/lib/experience-data"

export default function ExperienceTree() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'end center']
    })
    const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <div ref={ref} className="relative min-h-screen w-full">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#6b2ca5]/10" />
            <motion.div
                style={{ height }}
                className="absolute left-4 sm:left-1/2 top-0 w-px bg-[#6b2ca5] origin-top"
            />
            {experiences.map((exp) => (
                <div className="relative w-full mb-16" key={exp.id}>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="absolute left-4 sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#6b2ca5]" />
                    <motion.div
                        initial={{ opacity: 0, x: exp.side === 'right' ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ margin: '-80px' }}
                        className={`
                        pl-10 sm:pl-0
                        sm:max-w-[45%]
                        ${exp.side === 'right' ? 'sm:ml-[calc(50%+2rem)]' : 'sm:mr-[calc(50%+2rem)]'}`}
                    >
                        <ExperienceCard {...exp} />
                    </motion.div>
                    </div>
            ))}
        </div>
        

    )
}