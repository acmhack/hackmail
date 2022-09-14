import logo from './PickHacks_Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
            <label>
                Company Email:
                <input type="text" name="name" />
            </label>
            <label>
                Company Name:
                <input type="text" name="name" />
            </label>
            <label>
                Body Text:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
