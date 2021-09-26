// import logo from './logo.svg';
import './App.css';
import ImageBrowser from './ImageBrowser';

function App() {
  return (
    <div className="App">
      <p>This is the Finnish nature picture 2019</p>
      <ImageBrowser 
        imageUrl="http://www.vuodenluontokuva.fi/vlk/userfiles/vlk2019/palkitut/d.1.%20karhu%20ja%20korppi.%20ville%20heikkinen.jpg"
      />
    </div>
  );
}

export default App;
