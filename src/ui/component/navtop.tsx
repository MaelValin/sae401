import { Link } from "react-router-dom";




interface NavTopProps {
    publieText: boolean;
    publie: boolean;
    returnbutton: boolean;
    name?: string;
    linkpublie?: string;
    linkreturn?: string;
}

export default function NavTop({ publieText, publie, returnbutton, name, linkpublie, linkreturn }: NavTopProps) {

    
    return (
        <div className='flex flex-row items-center justify-center w-full p-2 gap-2.5 border-b-2 border-solid border-[#030081] relative bg-white'>
            {returnbutton && (
                <Link to={linkreturn || "#"} className="flex items-center h-full absolute left-2">
                    <img src="../arrow.svg" alt="" className="fill-current text-red-500 w-10  " />
                </Link>
            )}
           
            <p className="text-xl text-[#030081] font-bold">{name}</p>
            {publie && (
                <Link to={linkpublie || "#"} className="flex items-center h-full absolute right-2">
                    {publieText ? (
                        <span className="text-sm text-[#1872B4] font-bold">publier</span>
                    ) : (
                        <img src="plus.svg" alt="" className=" text-red-500 w-10 rotate-180" />
                    )}
                </Link>
            )}
        </div>
    );
}
