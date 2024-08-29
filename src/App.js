import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">📖</header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        Coded by Nicky Stevens and is open-sourced on{" "}
        <a
          href="https://github.com/NicStevens/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
