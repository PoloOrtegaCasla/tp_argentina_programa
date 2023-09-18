import React from "react";
import { Home } from "./componentes/Home";
import { About } from "./componentes/About";
import { Routes, Route } from 'react-router-dom';
import Layout  from "./componentes/Layout";
import Peliculas from "./componentes/peliculas";
import { Contact } from "./componentes/Contact";
import ListaDeTareas from './componentes/ListaDeTareas';
import './App.css';
function App() {
    return (
      <div>
        <h1>Routes</h1>
        <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
        <Routes>
          <Route path="/" element={<Layout />}>
             <Route path="about" element={<About />} />
             <Route path="/" element={<Home />} />
             <Route path="peliculas" element={<Peliculas />} />
             <Route path="*" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    );
  }
  
  export default App;


