import logo from './logo.svg';
import './App.css';

function App() {
  const today = new Date();
  const date = today.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <main>
          <h1>My First React Project</h1>
        </main>
      <footer>Copyright by Me {date}</footer>
    </div>
  );
}

export default App;
