import { cva } from "class-variance-authority";
import { cn } from "./utils/cn";

const buttonVariants = cva("rounded-md font-medium focus:outline-none", {
  variants: {
    variant: {
      default:
        "bg-cyan-500 text-white shadow-lg hover:bg-cyan-400 focus:bg-cyan-400 focus:ring-cyan-500",
      destructive:
        "bg-red-500 text-white shadow-lg hover:bg-red-400 focus:bg-red-400  focus:ring-red-500",
      emerald:
        "bg-emerald-500 text-white shadow-lg hover:bg-emerald-400 focus:bg-emerald-400  focus:ring-emerald-500",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

// Interface simplifiée avec uniquement les props nécessaires

interface ButtonProps {
  variant?: "default" | "destructive" | "emerald";
  size?: "default" | "sm" | "lg";
  children?: React.ReactNode;
  className?: string;
}

function Button({
  variant,
  size,

  className,
  children,

  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
    <Button variant="default" size="default">
      Click me
    </Button>

    <Button variant="destructive" size="sm">
      Click me
    </Button>

    <Button variant="emerald" size="lg">
      Click me
    </Button>
    </div>
    
  );
}

