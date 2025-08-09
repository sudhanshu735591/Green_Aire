import './App.css'
import Company_Introduction from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Products from './component/Products';
import Oem from './component/Oem';
import Contact from './component/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Company_Introduction/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Oem' element={<Oem/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App