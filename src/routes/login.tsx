import Button from "../ui/component/button";
import FormArea from "../ui/component/formarea";



export default function Login() {

  return (
    <>
      <section className='flex flex-col items-center pt-10 h-screen'>
       <img src="logoWalkergram.png" alt="" className='w-[128px]' />

       <div className='flex flex-col items-center justify-center w-96 mt-10 px-10 gap-2.5'>
      <FormArea name="Speudonyme" validiter={true} textvalider="speudo valider" textinvalider="speudo invalide" />
      <FormArea name="Mail" validiter={true} textvalider="mail valider" textinvalider="mail invalide" />
      <FormArea name="Mot de passe" validiter={true} textvalider="mot de passe correct" textinvalider="mot de passe incorrect" difficulty={true} variantdifficulty="easy" />
      <FormArea name="Confirmer Mot de passe" validiter={true} textvalider="mot de passe correct" textinvalider="mot de passe incorrect"  />
       <Button name="S'incrire" link="/Connexion" />
       </div>
         
      </section>
    </>
  );
}
