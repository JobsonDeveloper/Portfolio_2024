import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './views/home/Home';
import { useEffect } from 'react';
import Aos from 'aos';
import { Qualifications } from './views/qualifications/Qualifications';
import { Knowledge } from './views/knowledge/Knowledge';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path='/' element={<Home />} />
        <Route path='/qualifications' element={<Qualifications />} />
        <Route path='/Knowledge' element={<Knowledge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
