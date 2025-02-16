
import Navbar from './components/navbar/Navbar'
import Options from './components/options/Options'
import Home from './pages/home/Home'
import {Routes,Route} from 'react-router-dom'
import InProcess from './pages/inprocess/InProcess'
const App = () => {
  return (
    <div>
      <Navbar/> 
      <Options/>
      <div className="page-container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/watchlist' element={<InProcess/>}/>
          <Route path='/portfolio' element={<InProcess/>}/>
          <Route path='/news' element={<InProcess/>}/>
          <Route path='/tracker' element={<InProcess/>}/>
          <Route path='/crypto' element={<InProcess/>}/>
          <Route path='/roadmap' element={<InProcess/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App
