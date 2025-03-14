import Button from "../ui/component/button";
import FormArea from "../ui/component/formarea";
import { Link } from "react-router-dom";



export default function Connexion() {

  return (
    <>
      <section className='flex flex-col items-center pt-10 h-screen'>
       <img src="logoWalkergram.png" alt="" className='w-[128px]' />

       <div className='flex flex-col items-center justify-center w-96 mt-10 px-10 gap-2.5'>
      <FormArea name="Mail" title="" titletext={false} validitertext={true} textvalider="mail valider" textinvalider="mail invalide" difficulty={false}/>
      <FormArea name="Mot de passe" title="" titletext={false} validitertext={true} textvalider="mot de passe correct" textinvalider="mot de passe incorrect" difficulty={false} />
      
       <Button name="Connexion" link="/actuality" />
       <Link className="text-[#0038FF] text-sm font-bold hover:text-[#030081]" to="/login">Sign In</Link>
       <Link className=" text-sm font-bold pt-5 hover:text-[#0038FF]" to="/dashboard">Dashboard</Link>
       </div>
         
      </section>
    </>
  );
}
