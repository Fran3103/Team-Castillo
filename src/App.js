
import './App.css';
import Contacto from './Componentes/Contacto';
import Header from './Componentes/Header';


import Rutinas from './Componentes/Rutinas';
import Testimonios from './Componentes/Testimonios';


function App() {
  return (
    <div className="App">
      <Header/>
      <Rutinas/>
      <Testimonios/>
      <Contacto/>
    </div>
  );
}

export default App;
