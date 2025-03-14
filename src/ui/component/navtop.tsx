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
                    <svg
                    className="w-10 text-[#030081] hover:text-[#1872B4] active:text-[#1872B4] "
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" />
                    </svg>

                </Link>
            )}
           
            <p className="text-xl text-[#030081] font-bold">{name}</p>
            {publie && (
                <Link to={linkpublie || "#"} className="flex items-center h-full absolute right-2">
                    {publieText ? (
                        <span className="text-sm text-[#1872B4] hover:text-red-600 font-bold">publier</span>
                    ) : (
                        <svg
                        className="w-10 text-[#030081] hover:text-[#1872B4] active:text-[#1872B4]rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M6 12H18M12 6V18" />
                        </svg>


                    )}
                </Link>
            )}
        </div>
    );
}
