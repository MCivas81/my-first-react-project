import logo from './logo.svg';
import './App.css';
import consola from 'consola';

function App() {
  const today = new Date();
  const date = today.getFullYear();
  const renderButton = function () {
    consola.success('Hello')
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <main>
          <h1>My First React Project</h1>
          <button className="my-button" onClick={renderButton}>Button</button>
        </main>
      <footer>Copyright by Me {date}</footer>
    </div>
  );
}

export default App;
