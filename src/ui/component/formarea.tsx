import { cva } from 'class-variance-authority';




const formAreaVariants = cva("", {
  variants: {
    difficulty: {
      true: (props: FormAreaProps) => {
        switch (props.variantdifficulty) {
          case "easy":
            return "Easy difficulty text";
          case "medium":
            return "Medium difficulty text";
          case "hard":
            return "Hard difficulty text";
          default:
            return "";
        }
      },
      false: () => "",
    },
  },
  defaultVariants: {
    difficulty: false,
  },
});

interface FormAreaProps {
  name: string;
  validiter?: boolean;
  textvalider?: string;
  textinvalider?: string;
  difficulty?: boolean;
  variantdifficulty?: "easy" | "medium" | "hard";
}

export default function FormArea({ name, validiter = true, textvalider, textinvalider, difficulty = true, variantdifficulty }: FormAreaProps) {
  return (
    <>
      <div className='flex flex-col items-start justify-center w-full gap-1'>
        <input
          className="text-black text-sm w-full p-2.5 rounded-sm text-start"
          style={{
            outline: '1px solid rgba(2,0,96,1)',
            stroke: 'linear-gradient(90deg, rgba(2,0,96,1) 7%, rgba(20,105,173,1) 39%, rgba(86,12,181,1) 83%, rgba(0,77,193,1) 100%)'
          }}
          type="text"
          name={name}
          id={name}
          required
          placeholder={name}
        />
        <p className="text-black text-start text-sm w-full">{validiter ? textvalider : textinvalider}</p>
        <p id="difficulty" className="text-black text-start text-sm w-full">
          {difficulty ? formAreaVariants({ difficulty: true, variantdifficulty }) : ""}
        </p>
      </div>
    </>
  );
}
