import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import bgImage from "/src/assets/images/first_block.jpg";



function App() {
  document.documentElement.style.setProperty("--bg-image", `url(${bgImage})`);
 

  return (
    <>

    
  <Header/>
  <Routes>

  <Route path="/" element={<HomePage/>} />
   


  </Routes>

   
    </>
  )
}

export default App
