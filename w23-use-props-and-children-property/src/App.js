import logo from './logo.svg';
import './App.css';
import Reporter from './Reporter';

function App() {
  return (
    <div className="App">
      <h1>W23 Reporter and flying words</h1>
      <div className="content">
        <img src="/images/mumin.png" alt="" />
        <Reporter name="Antero Mertaranta">Löikö mörkö sisään</Reporter>
        <Reporter name="Kevin McGran">I know it's a rough time now, but did you at least enjoy playing in the tournament</Reporter>
      </div>
    </div>
  );
}

export default App;
