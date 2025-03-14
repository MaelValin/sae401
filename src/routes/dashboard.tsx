import NavTop from "../ui/component/navtop";
import MemberElement from "../ui/component/memberelement";
import Datamember from "../data/member.json";

export default function Dashboard() {
  return (
    <>
      <section className="flex flex-col items-center min-h-screen overflow-auto">
        {/* Barre de navigation fixe */}
        <div className="fixed w-full top-0">
          <NavTop 
            publieText={false} 
            publie={false} 
            returnbutton={true} 
            name="Membres" 
            linkpublie="" 
            linkreturn="/connexion" 
          />
        </div>

        {/* Liste des membres */}
        <div className="flex flex-col items-center justify-center w-full gap-2.5 py-10 h-fit">
          {Datamember && Datamember.length > 0 ? (
            Datamember.map((member) => (
              <MemberElement 
                key={member.id}
                pseudo={member.pseudo} 
                mail={member.mail} 
                link={`/dashmember/${member.id}`}
                id={member.id}
              />
            ))
          ) : (
            <p className="text-gray-500">Aucun membre trouvé.</p>
          )}
        </div>
      </section>
    </>
  );
}
