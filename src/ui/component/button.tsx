

import { Link } from 'react-router-dom';

interface ButtonProps {
  name: string;
  link: string;
  
}
        
export default function Button({ name, link }: ButtonProps) {

    return (
      <>
      
           
        <div className="group w-full flex" >
          <Link className='text-white text-xl w-full p-2.5 rounded-sm text-center z-0 relative group-hover:bg-[#222a4054]' to={link}>
            <p className='text-white text-xl w-full text-center z-20 relative '>{name}</p>
            <div className='absolute inset-0 bg-[#00000000] w-full rounded-sm flex items-center justify-center h-full z-10 group-hover:bg-[#030081] group-active:bg-[#030081]'></div>
            <div style={{ background: 'linear-gradient(90deg, rgba(2,0,96,1) 7%, rgba(20,105,173,1) 39%, rgba(86,12,181,1) 83%, rgba(0,77,193,1) 100%)'}} className='absolute inset-0 bg-[#00000000] w-full rounded-sm flex items-center justify-center h-full z-0 group-hover:bg-[#222a4054]'></div>
          </Link>
        </div>    
      </>
    );
  }