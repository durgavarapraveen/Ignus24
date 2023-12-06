
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom'
import Menu from './Navbar/Menu'
import Logo from './Navbar/Logo'
import Events from './Components/Events'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/logo' element={<Logo />} />
          <Route path='/' element={<Events />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
