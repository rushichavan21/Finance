import Navbar from './components/navbar/Navbar'
import Options from './components/options/Options'
import Home from './pages/home/Home'
import {Routes, Route, useLocation} from 'react-router-dom'
import InProcess from './pages/inprocess/InProcess'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Footer from './components/footer/Footer'
import RoadmapLanding from './components/roadmap/RoadmapLanding'
import Calculator from './components/calculator/Calculator'
import Portfolio from './pages/portfolio/Portfolio'
import AskAi from './pages/askAi/AskAi'
const App = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <div>
      {!isAuthPage && (
        <>
          <Navbar/> 
          <Options/>
        </>
      )}
      <div className={`page-container ${isAuthPage ? 'auth-page' : ''}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/watchlist' element={<InProcess/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/news' element={<InProcess/>}/>
          <Route path='/tracker' element={<InProcess/>}/>
          <Route path='/ask-ai' element={<AskAi/>}/>
          <Route path='/roadmap' element={<RoadmapLanding/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </div>
  )
}

export default App
