import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Dictionary App</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="highlands" />
      </main>
      <footer className="App-footer">
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/nicky-stevens-ba763a8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nicky Stevens
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/NicStevens/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dictionary-nicky-stevens.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
