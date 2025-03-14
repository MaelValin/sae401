

interface PostelementProps {
    pseudo: string;
    para: string;
    date: string;
    id: number;
}

export default function Postelement({pseudo, para, date}: PostelementProps) {
    return (
        <div className="flex flex-col items-center justify-between px-5 max-w-full md:max-w-[700px] p-3 gap-2.5">
        <div className="flex flex-col w-full">
        <p className="text-xl font-bold text-[#030081] uppercase w-full">{pseudo}</p>
        <p className="text-sm w-full">{para}</p>
        </div>
        <p className="text-end w-full text-[#1872B4] text-xs">publier le {date}</p>
        
      </div>
    );
}
