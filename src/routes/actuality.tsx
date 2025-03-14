import NavTop from "../ui/component/navtop";
import Postelement from "../ui/component/postelement";
import postdata from "../data/postdata.json";
import member from "../data/member.json";



export default function Actuality() {
  
  return (
    <section className="flex flex-col items-center h-screen relative">
      <div className="w-full fixed ">
      <NavTop publieText={false} publie={true} returnbutton={false} name="Actualités" linkpublie="/postpage" linkreturn="" />
      </div>
     
    <div className="flex flex-col items-center justify-center w-full pt-15 gap-2.5">
      {postdata.map((post) => {
        const memberName = member.find((m) => m.id.toString() === post.id_pseudo)?.pseudo || "Unknown";
        return (
          <Postelement
        key={post.id}
        pseudo={memberName}
        para={post.para}
        date={post.date}
        id={post.id}
          />
        );
      })}
    </div>

    

     
    </section>
  );
}

