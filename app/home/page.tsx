import yose from './yose.jpg';
import AnimatedLetters from '@/components/animatedLetters';
import Button from '@/components/button';

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
            <p className='font-robotoMono'>Third year computing science student at the University of Glasgow</p>
        </div>
        <Button text="About" href="./about/" />
        <Button text="Contact" href="./contact/" />
        <Button text="Projects" href="./projects/" />      
    </main>
  );
}
