"use client";
import yose from './yose.jpg';
import AnimatedLetters from '@/components/animatedLetters';
import NavButton from '@/components/navButton';

export default function Home() {
  return (
    <main className="h-screen w-full bg-bg flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center justify-center">
            <div className="w-75 h-80 rounded-full flex items-center justify-center text-4xl font-bold text-gray-900 shadow-2xl pb-5">
                <img 
                    src={yose.src} 
                    alt="Yose" 
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
        </div>
        <div className="flex items-center justify-center">  
            <AnimatedLetters text="Sam Leishman" />
        </div>
        <div className='flex items-center justify-center '>
            <p className='font-robotoMono'>
                Third year computing science student at the University of Glasgow
            </p>
        </div>
        <div className='flex flex-row gap-5 justify-between m-5'>
            <NavButton text="About" href="./about/" />
            <NavButton text="Skills" href="./skills/" />      
            <NavButton text="Projects" href="./projects/" />      
            <NavButton text="Contact" href="./contact/" />
        </div>
    </main>
  );
}
