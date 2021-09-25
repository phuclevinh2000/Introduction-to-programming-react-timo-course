import logo from './logo.svg';
import './App.css';

function App() {
  const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  // console.log(day)
  return (
    <div className="App">
      <h1>W13 weekdays in table</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Weekday</th>
            </tr>
          </thead>
        
          <tbody>
          {day.map((dayinweek) => (
            <tr key={dayinweek}><td>{dayinweek}</td></tr>
          ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default App;
