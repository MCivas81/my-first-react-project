import logo from './logo.svg';
import './App.css';

function App() {
  var today = new Date();
  var date = today.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <main>
          <h1>My First React Project</h1>
        </main>
      </header>
      <footer>Copyright by Me {date}</footer>
    </div>
  );
}

export default App;
