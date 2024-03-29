import React, {useEffect}  from 'react'
import notFound from "./image.png"
import useSound from 'use-sound';
import laughing from "./laugh.mp3";
import warning from "./warning.mp3"

const PageNotFound = () => {
  const date = new Date();
  const hours = date.getHours();
  const [play] = useSound(laughing);
  const [play2] = useSound(warning)
  const handleMouseEnter = () => {
    if(hours>13){
      play(); 
    }else{
      play2()
    }
  };
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);
  
  // const [audio] = useState(new Audio(''));
  return (
    <div  className='flex  h-[90vh]' >
      
        <div onMouseOver={handleMouseEnter} className=" relative flex justify-center items-center  h-full w-full">
            <div className='rounded-[2rem] bg-[#161D2F] ' >
                <div className='rounded-[4rem]' >
            <div className='bg-[#2f3e63] rounded-[5rem]' >
    <img className='rounded-full' src={notFound} alt="" width={500} height={500} />
    </div>  </div>
            </div>
    <div className='absolute' >
        <h2 className='text-2xl text-indigo-700 font-bold' >Page Not Found ! Wrong Path 🥲🥲😂</h2>
    </div>
        </div>
    </div>
  )
}

export default PageNotFound