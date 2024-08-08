// AnimatedLetters.js
import { CSSProperties, FC } from "react";
import { BackgroundDecoration } from "../BackgroundDecoration/BackgroundDecoration";
import "./WelcomeText.scss";

interface WelcomeTextProps {
  text: string;
}

export const WelcomeText: FC<WelcomeTextProps> = ({ text }) => {
  const letters = text.split("");

  return (
    <div className="animated-letters">
      <BackgroundDecoration />
      {letters.map((letter: string, index: number) => (
        <span
          key={index}
          className="letter"
          style={{ "--index": index } as CSSProperties}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
