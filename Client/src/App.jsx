
import Navbar from './components/navbar/Navbar'
import Options from './components/options/Options'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      <div className="page-container">
      <Navbar/> 
      <Options/>
      <Home/>
      </div>
    </div>
  )
}

export default App
