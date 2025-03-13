

import { Link } from 'react-router-dom';

interface ButtonProps {
  name: string;
  link: string;
}
        
export default function Button({ name, link }: ButtonProps) {

    return (
      <>
        <Link style={{ background: 'linear-gradient(90deg, rgba(2,0,96,1) 7%, rgba(20,105,173,1) 39%, rgba(86,12,181,1) 83%, rgba(0,77,193,1) 100%)' }} className='text-white text-xl w-full p-2.5 rounded-sm text-center' to={link}>{name}</Link>
      </>
    );
  }