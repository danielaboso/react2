import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  );
}

export default App;
