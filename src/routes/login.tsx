import { useState } from "react";
import Button from "../ui/component/button";
import FormArea from "../ui/component/formarea";
import { Link } from "react-router-dom";

export default function Login() {
  // États pour chaque champ du formulaire
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fonction pour valider la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérification si le mot de passe et la confirmation du mot de passe sont identiques
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    // Vous pouvez ajouter d'autres vérifications si nécessaire (comme vérifier la validité de l'email)
    // Si tout est valide, vous pouvez envoyer les données ou effectuer l'inscription.
    console.log("Inscription réussie !", { pseudo, email, password });
  };

  return (
    <>
      <section className="flex flex-col items-center pt-10 h-screen">
        <img src="logoWalkergram.png" alt="" className="w-[128px]" />

        <div className="flex flex-col items-center justify-center w-96 mt-10 px-10 gap-2.5">
          <FormArea
            name="pseudo"
            title=""
            titletext={false}
            validitertext={true}
            textvalider="pseudo valide"
            textinvalider="pseudo invalide"
            difficulty={false}
            valuetext={pseudo}
            valueactive={true}
            onChange={(e) => setPseudo(e.target.value)} // Ajoutez cette gestion d'événements pour le pseudo
          />
          <FormArea
            name="mail"
            title=""
            titletext={false}
            validitertext={true}
            textvalider="mail valide"
            textinvalider="mail invalide"
            difficulty={false}
            valuetext={email}
            valueactive={true}
            onChange={(e) => setEmail(e.target.value)} // Ajoutez cette gestion d'événements pour l'email
          />
          <FormArea
            name="mot de passe"
            title=""
            titletext={false}
            validitertext={true}
            textvalider="mot de passe correct"
            textinvalider="mot de passe incorrect"
            difficulty={true}
            variantdifficulty={(value) => value.length}
            valuetext={password}
            valueactive={true}
            onChange={(e) => setPassword(e.target.value)} // Ajoutez cette gestion d'événements pour le mot de passe
          />
          <FormArea
            name="confirmer mot de passe"
            title=""
            titletext={false}
            validitertext={false}
            textvalider="mot de passe confirmé"
            textinvalider="mot de passe incorrect"
            difficulty={false}
            valuetext={confirmPassword}
            valueactive={true}
            onChange={(e) => setConfirmPassword(e.target.value)} // Ajoutez cette gestion d'événements pour la confirmation
          />
          <Button name="S'inscrire" link="" /> {/* Ajoutez le gestionnaire de soumission */}
          <Link className="text-[#0038FF] text-sm font-bold hover:text-[#030081]" to="/Connexion">Se connecter</Link>
        </div>
      </section>
    </>
  );
}
