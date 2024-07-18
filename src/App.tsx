import Hero from "./components/hero/Hero";
import "./App.css";
import About from "./components/about/About";
import Logo from "./components/logo/Logo";
import Navbar from "./components/navbar/Navbar";
import Teaser from "./components/teaser/Teaser";
import GetTheGame from "./components/get-the-game/GetTheGame";
import Separator from "./components/separator/Separator";
import Author from "./components/author/Author";
import Factsheet from "./components/fact-sheet/Factsheet";
import Media from "./components/media/Media";
import Features from "./components/features/Features";

function App() {
  return (
    <div className="container">
      <div className="body">
        <Navbar />
        <Hero />
        <Logo />
        <Teaser />
        <GetTheGame />
        <Separator />
        <About />
        <Separator />
        <Features />
        <Separator />
        <Factsheet />
        <Separator />
        <Media />
        <Separator />
        <Author />
      </div>
    </div>
  );
}

export default App;
