import { Link } from "react-router-dom";

interface MembreelementProps {
    pseudo: string;
    mail: string;
    link?: string;
    id: number;
}

export default function Membreelement({pseudo, mail, link }: MembreelementProps) {
    return (
        <div className="flex flex-row items-center justify-between px-5 max-w-full md:max-w-[600px] w-full p-2 gap-2.5">
        <div className="flex flex-col w-full">
        <p className="text-xl font-bold text-[#030081] uppercase">{pseudo}</p>
        <p className="text-sm ">{mail}</p>
        </div>
        <Link to={link||""} className="flex items-center h-full">
        <img src="pen.svg" alt="" className="w-7"/>
        </Link>
        
      </div>
    );
}
