import { useState } from "react";


interface FormAreaProps {
  name: string;
  title: string;
  titletext?: boolean;
  validitertext?: boolean;
  validiter?: boolean;
  textvalider?: string;
  textinvalider?: string;
  difficulty?: boolean;
  variantdifficulty?: number; // Maintenant un nombre
  valuetext?: string;
  valueactive?: boolean;
}

export default function FormArea({
  name,
  title,
  titletext,
  validiter = true,
  textvalider,
  textinvalider,
  difficulty = true,
  variantdifficulty = 0, // Valeur par défaut
  validitertext,
  valuetext = "", // Valeur par défaut
  valueactive,
}: FormAreaProps) {
  const [inputValue, setInputValue] = useState(valueactive ? valuetext : "");

  // Convertir le nombre en niveau de difficulté
  const difficultyText =
    variantdifficulty < 7
      ? "easy"
      : variantdifficulty < 12
      ? "medium"
      : "hard";

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
        type="text"
        name={name}
        id={name}
        required
        placeholder={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Permet à l'utilisateur de modifier le texte
      />
      <div className="flex flex-row items-start justify-between w-full gap-1">
        {validitertext && (
          <p className="text-black text-start text-sm w-full">
            {validiter ? textvalider : textinvalider}
          </p>
        )}

        <p id="difficulty" className="text-black  text-sm w-full text-end">
          {difficulty
            ? `difficulty: ${difficultyText}`
            : ""}
        </p>
      </div>
    </div>
  );
}
