import NavTop from "../ui/component/navtop";
import { useState } from "react";



export default function Postpage() {
  const [text, setText] = useState("");
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <section className="flex flex-col items-center h-screen relative ">
      
      <NavTop publieText={true} publie={true} returnbutton={true} name="Publication" linkpublie="" linkreturn="/actuality" />
      
      <div className="flex flex-col items-center justify-center p-2 pt-5 relative w-full maw-w-full md:max-w-[900px] ">
      <textarea
      className="text-black text-sm w-full h-40 p-2.5 rounded-sm text-start justify-baseline "
      style={{
        outline: "2px solid rgba(2,0,96,1)",
        stroke:
        "linear-gradient(90deg, rgba(2,0,96,1) 7%, rgba(20,105,173,1) 39%, rgba(86,12,181,1) 83%, rgba(0,77,193,1) 100%)",
      }}
      name="post"
      maxLength={280}
      required
      placeholder="Ecrivez votre publication"
      value={text}
      onChange={handleChange}
      
      />
      
      <p className={`text-end w-full text-xs absolute right-5 bottom-3 ${text.length === 280 ? 'text-red-500' : 'text-[#1872B4]'}`}>
        {text.length} Caractère{text.length > 1 ? 's' : ''}
      </p>
      </div>
    </section>
  );
}

