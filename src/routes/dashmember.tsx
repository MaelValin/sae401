import { useParams } from "react-router-dom";
import NavTop from "../ui/component/navtop";
import FormArea from "../ui/component/formarea";
import Button from "../ui/component/button";
import members from "../data/member.json";

export default function Dashmember() {
  const { id } = useParams<{ id: string }>();

  // Conversion de l'ID en nombre pour correspondre aux données JSON
  const member = members.find((member) => member.id === Number(id));

  if (!member) {
    return <div>Membre non trouvé</div>;
  }

  return (
    <section className="flex flex-col items-center h-screen">
      <div className="w-full relative ">
        <NavTop
          publieText={false}
          publie={false}
          returnbutton={true}
          name={member.pseudo}
          linkpublie=""
          linkreturn="/dashboard"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-96 mt-10 px-10 pt-10 gap-2.5">
        <FormArea
          name="pseudo"
          title="Pseudo"
          titletext={true}
          validitertext={false}
          textvalider="Pseudo validé"
          textinvalider="Pseudo invalide"
          difficulty={false}
          valuetext={member.pseudo} // Correction de `name` → `pseudo` si nécessaire
          valueactive={true}
        />
        
          <FormArea
            name="mail"
            title="Mail"
            titletext={true}
            validitertext={true}
            textvalider="Mail validé"
            textinvalider="Mail invalide"
            difficulty={false}
            valuetext={member.mail}
            valueactive={true}
          />
          <div className="py-10 w-full flex flex-row items-center justify-between gap-2.5">
          <Button name="Update" link="" />
        </div>
      </div>
    </section>
  );
}

