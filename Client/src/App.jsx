import Navbar from './components/navbar/Navbar'
import Options from './components/options/Options'
import Home from './pages/home/Home'
import {Routes, Route, useLocation} from 'react-router-dom'
import InProcess from './pages/inprocess/InProcess'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'

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
          <Route path='/portfolio' element={<InProcess/>}/>
          <Route path='/news' element={<InProcess/>}/>
          <Route path='/tracker' element={<InProcess/>}/>
          <Route path='/crypto' element={<InProcess/>}/>
          <Route path='/roadmap' element={<InProcess/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
