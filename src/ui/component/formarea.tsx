import { useState } from "react";

interface FormAreaProps {
  name: string;
  title: string;
  titletext?: boolean;
  validitertext?: boolean;
  textvalider?: string;
  textinvalider?: string;
  difficulty?: boolean;
  variantdifficulty?: (value: string) => number;
  valuetext?: string;
  valueactive?: boolean;
}

export default function FormArea({
  name,
  title,
  titletext,
  textvalider,
  textinvalider,
  difficulty = false,
  variantdifficulty,
  validitertext,
  valuetext = "",
  valueactive,
}: FormAreaProps) {
  const [inputValue, setInputValue] = useState(valueactive ? valuetext : "");

  // Calculer dynamiquement la difficulté en fonction du nombre de caractères
  const difficultyLevel = variantdifficulty ? variantdifficulty(inputValue) : 0;
  const difficultyText =
    difficultyLevel < 7 ? "Easy" :
    difficultyLevel < 12 ? "Medium" : "Hard";

  // Logique de validation pour l'email
  const isValidEmail =
    name.toLowerCase() === "mail"
      ? inputValue.includes('@') && inputValue.includes('.') && !inputValue.endsWith('.')
      : true;

  // Validation basée sur la longueur
  const isValidLength = inputValue.length >= 12; // Par exemple, longueur minimale de 12 caractères

  // Validation spécifique pour chaque champ
  const validationText =
    inputValue.length === 0
      ? "" // Aucun texte si 0 caractères
      : name.toLowerCase() === "mail"
      ? isValidEmail
        ? textvalider // Afficher textvalider si l'email est valide
        : textinvalider // Afficher textinvalider si l'email est invalide
      : isValidLength
      ? textvalider // Afficher textvalider si la longueur est valide
      : textinvalider; // Afficher textinvalider si la longueur est invalide

  // Déterminer la couleur en fonction de la validation
  const validationClass =
    name.toLowerCase() === "mail" 
      ? isValidEmail
        ? "text-black" 
        : "text-red-500"
      : isValidLength
      ? "text-black"
      : "text-red-500";

  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      {titletext && <p className="text-black text-start text-sm w-full">{title}</p>}
      
      <input
        className="text-black text-sm w-full p-2.5 rounded-sm text-start"
        style={{
          outline: "2px solid rgba(2,0,96,1)",
          stroke:
            "linear-gradient(90deg, rgba(2,0,96,1) 7%, rgba(20,105,173,1) 39%, rgba(86,12,181,1) 83%, rgba(0,77,193,1) 100%)",
        }}
        type={name.toLowerCase().includes("mot de passe") ? "password" : "text"}
        name={name}
        id={name}
        maxLength={50}
        required
        placeholder={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <div className="flex flex-row items-start justify-between w-full gap-1">
        {validitertext && validationText && (
          <p className={`text-start text-sm w-full ${validationClass}`}>
            {validationText}
          </p>
        )}

        {difficulty && (
          <p id="difficulty" className="text-black text-sm w-full text-end">
            Difficulty: {difficultyText}
          </p>
        )}
      </div>
    </div>
  );
}
