
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  // console.log(`location` + location.pathname);

  return (
    <>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />} location={location} key={location.key} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />}  />
          <Route path="contact" element={<Contact />}  />
        </Route>
      </Routes>
      </AnimatePresence>
    </>
    
  );
}

export default App;
