import { useState } from "react";
import { BackgroundDecoration } from "./components/BackgroundDecoration/BackgroundDecoration";
import { WelcomeText } from "./components/WelcomeText/WelcomeText";
import { MoviesList } from "./pages/MoviesList";

export const App = () => {
  const [showWelcomeText, setShowWelcomeText] = useState<boolean>(true);
  setTimeout(() => {
    setShowWelcomeText(false);
  }, 4000);

  return (
    <div className="app-container">
      <BackgroundDecoration />
      <MoviesList />
      {showWelcomeText && <WelcomeText text="WMF" />}
    </div>
  );
};
