

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Pags/Home';
import Conversoes from './Pags/Conversoes';
import Sobrenos from './Pags/Pricing';
import ListaCarrossel from './Pags/templates/ListaCarrossel';
import Pricing from './Pags/Pricing';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/conversoes' element={<Conversoes/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          
          
          
        </Routes>
      </BrowserRouter>
    
      
      
    </div>
  );
}

export default App;
