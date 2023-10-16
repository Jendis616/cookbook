import './App.css';
import cookbook_img from './img/Cook_Book.jpg';

const header = <h1>Cookbook</h1>

function App() {
  return (
    <div className="App">
      {header}
      <br/>
      <img src={cookbook_img} alt="image"/>
    </div>
  );
}

export default App;
