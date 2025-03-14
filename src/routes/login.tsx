import Button from "../ui/component/button";
import FormArea from "../ui/component/formarea";
import { Link } from "react-router-dom";


export default function Login() {

  return (
    <>
      <section className='flex flex-col items-center pt-10 h-screen'>
       <img src="logoWalkergram.png" alt="" className='w-[128px]' />

       <div className='flex flex-col items-center justify-center w-96 mt-10 px-10 gap-2.5'>
      <FormArea name="Speudonyme"  title="" titletext={false} validitertext={true} validiter={true} textvalider="speudo valider" textinvalider="speudo invalide" difficulty={false} />
      <FormArea name="Mail" title="" titletext={false} validitertext={true} validiter={true} textvalider="mail valider" textinvalider="mail invalide" difficulty={false} />
      <FormArea name="Mot de passe" title="" titletext={false} validitertext={true} validiter={true} textvalider="mot de passe correct" textinvalider="mot de passe incorrect" difficulty={true} variantdifficulty={0} />
      <FormArea name="Confirmer Mot de passe" title="" titletext={false} validitertext={true} validiter={true} textvalider="mot de passe correct" textinvalider="mot de passe incorrect" difficulty={false} />
       <Button name="S'incrire" link="" />
       <Link className="text-[#0038FF] text-sm font-bold hover:text-[#030081]" to="/Connexion">Sign Out</Link>
       </div>
         
      </section>
    </>
  );
}
