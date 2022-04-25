import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/js/dist/collapse'
import '../node_modules/bootstrap/js/dist/dropdown'
import "../node_modules/bootstrap/js/dist/carousel"
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import InformesHigieneYSeguridad from './components/Servicios/ListOfServices/InformesHigieneySeguridad';
import Habilitaciones from './components/Servicios/ListOfServices/Habilitaciones';
import ProgramasDeSecuridad from './components/Servicios/ListOfServices/ProgramasDeSeguridad'
import Capacitaciones from './components/Servicios/ListOfServices/Capacitaciones';
import PlanesDeEvacuacion from './components/Servicios/ListOfServices/PlanesDeEvacuacion';
import ProgramaDeErgonomia from './components/Servicios/ListOfServices/ProgramaErgonomia';
import PrevencionesART from './components/Servicios/ListOfServices/PrevencionesART';
import HabilitacionBomberos from './components/Servicios/ListOfServices/HabilitacionDeBomberos';
import MedicionDeRuidos from './components/Servicios/ListOfServices/MedicionDeRuidos';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact={true} path="/" element={<Home/>} />
          <Route exact={true} path="/servicios/Informes-Tecnicos" element={<InformesHigieneYSeguridad/>}/>
          <Route exact={true} path="/servicios/Habilitaciones" element={<Habilitaciones/>}/>
          <Route exact={true} path="/servicios/Programa-de-Seguridad" element={<ProgramasDeSecuridad/>}/>
          <Route exact={true} path="/servicios/Capacitaciones-y-Formacion" element={<Capacitaciones/>}/>
          <Route exact={true} path="/servicios/Planes-de-Evacuacion" element={<PlanesDeEvacuacion/>}/>
          <Route exact={true} path="/servicios/Programa-de-Ergonomia" element={<ProgramaDeErgonomia/>}/>
          <Route exact={true} path="/servicios/Prevenciones-de-ART" element={<PrevencionesART/>}/>
          <Route exact={true} path="/servicios/Habilitacion-de-Bomberos" element={<HabilitacionBomberos/>}/>
          <Route exact={true} path="/servicios/Medicion-de-Ruidos" element={<MedicionDeRuidos/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
