import yose from './yose.jpg';


export default function Home() {
  return (
    <main className="w-full h-full overflow-auto relative">
        <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-full flex items-center justify-center  text-4xl font-bold text-gray-900 shadow-2xl">
                <img 
                    src={yose.src} 
                    alt="Yose" 
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
        </div>
        <div className="flex items-center justify-center">  
            <h1 className = "text-3xl font-bold underline">
                Hello my name is Sam!
            </h1>
        </div>
    </main>
  );
}
