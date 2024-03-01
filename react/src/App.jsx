import ItemListContainer from '../src/components/ItemListContainer';
import NavBar from '../src/components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda" /> 
    </div>
  );
}

export default App;