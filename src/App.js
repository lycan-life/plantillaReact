import React,{Fragment,useState} from 'react';
import Header from './components/Header'
import Pres from './components/Pres';
import Productos from './components/Productos';
import Footer from './components/Footer';
import Despliegue from './components/Despliegue';
function App() {
  const fecha = new Date().getFullYear();
  const [curso, guardarCurso] = useState([]);
  return (
    <Fragment>

      
      <Header/>

      <Pres />
      <Productos
        curso = {curso}
        guardarCurso = {guardarCurso}
      />
      <Despliegue
          curso = {curso}
          guardarCurso = {guardarCurso}  
        />
      <Footer
        fecha={fecha}
      />

    </Fragment>
    
  );
}

export default App;
