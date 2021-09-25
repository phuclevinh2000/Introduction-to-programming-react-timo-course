import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="infoCard">
        <span><img src="/images/Vamklogo.jpg" alt="" /></span>
        <h1>Timo Kankaanpää</h1>
        <h2>KTL</h2>
        <h2>Lic. Sc. (Econ. & Bus.Adm.)</h2>
      </div>
      <div className="infoCard2">
        <h3>yiliopettaja</h3>
        <span>Tietotekniikka</span>
        <h3>principal lecturer</h3>
        <span>Information technology</span>
      </div>
      <div className="infoCard2">
        <h2>Tekniikan yksikkä</h2>
        <h2>School of technology</h2>
      </div>
      <div className="infoCard2">
        <p>tka@vamk.fi</p>
        <span>+358 40 767 080</span>
      </div>
      <div className="infoCard2">
        <span>Wolffintie 30, FI-65200 VAASA, Finland</span>
      </div>
    </div>
  );
}

export default App;
