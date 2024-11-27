import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './views/home/Home';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
