import logo from './logo.svg';
import './App.css';
import ComponentName from './ComponentName';

function App() {
  const country = "Finland"
  return (
    <div className="App">
      <h1>W22 Hello country example</h1>
      <ComponentName country={country}/>
    </div>
  );
}

export default App;
