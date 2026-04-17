// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Navbar from './components/navbar.jsx'
// import 'remixicon/fonts/remixicon.css'
// import Footer from './components/Footer.jsx'
// import PreLoader from './components/PreLoader.jsx'
// import 'animate.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import Projects from './components/Projects.jsx'

// // ..
// AOS.init();

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <PreLoader />
//     <div className='container mx-auto px-4'>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/projects" element={<Projects />} />
//       </Routes>
//       <Footer />
//     </div>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import Projects from './components/Projects.jsx'

import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './components/About.jsx'

AOS.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PreLoader />
      <div className="container mx-auto px-4">
        <Navbar />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
)
