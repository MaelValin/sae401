import { useState } from "react";

// Interface pour définir les variantes possibles des champs
interface FormAreaProps {
  name: "pseudo" | "mail" | "mot de passe" | "confirmer mot de passe";
  title: string;
  titletext?: boolean;
  textvalider?: string;
  textinvalider?: string;
  difficulty?: boolean;
  variantdifficulty?: (value: string) => number;
  valuetext?: string;
  valueactive?: boolean;
  validitertext?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

  // Validation spécifique pour chaque champ
  const isValidEmail =
    name === "mail"
      ? inputValue.includes('@') && inputValue.includes('.') && !inputValue.endsWith('.')
      : true;

  const isValidPassword = name === "mot de passe" ? inputValue.length >= 8 : true;

  const isPasswordMatch =
    name === "confirmer mot de passe" ? inputValue === valuetext : true;

  const isValidLength = name !== "mail" && name !== "confirmer mot de passe" ? inputValue.length >= 4 : true;

  // Modifier la validation pour le cas du "Confirmer mot de passe"
  const validationText = () => {
    if (inputValue.length === 0) return ""; // Aucun texte si 0 caractères

    switch (name) {
      case "mail":
        return isValidEmail
          ? textvalider // Si l'email est valide
          : textinvalider; // Si l'email est invalide
      case "mot de passe":
        return isValidPassword
          ? textvalider // Si le mot de passe est valide
          : textinvalider; // Si le mot de passe est invalide
      case "confirmer mot de passe":
        return isPasswordMatch
          ? "Les mots de passe correspondent !" // Texte personnalisé pour confirmer que les mots de passe correspondent
          : "Les mots de passe ne correspondent pas."; // Texte personnalisé si les mots de passe ne correspondent pas
      default:
        return isValidLength
          ? textvalider // Si la longueur est valide
          : textinvalider; // Si la longueur est invalide
    }
  };

  // Déterminer la couleur en fonction de la validation
  const validationClass = () => {
    switch (name) {
      case "mail":
        return isValidEmail ? "text-black" : "text-red-500";
      case "mot de passe":
        return isValidPassword ? "text-black" : "text-red-500";
      case "confirmer mot de passe":
        return isPasswordMatch ? "text-black" : "text-red-500";
      default:
        return isValidLength ? "text-black" : "text-red-500";
    }
  };

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
        type={
          name === "mot de passe" || name === "confirmer mot de passe"
            ? "password"
            : "text"
        }
        name={name}
        id={name}
        maxLength={50}
        required
        placeholder={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="flex flex-row items-start justify-between w-full gap-1">
        {validitertext && validationText() && (
          <p className={`text-start text-sm w-full ${validationClass()}`}>
            {validationText()}
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
