
import './App.scss'
import {Route,BrowserRouter, Routes} from "react-router-dom"
import SharedLayOut from './sharedLayout'
import Home from './pages/home';
import Destination from './pages/destination';
import Crew from './pages/crew';
import Technology from './pages/tecnologies';
function App() {

  return (
    <BrowserRouter basename='/space-tourism-template/'>
      <Routes>
        <Route path='/' element={<SharedLayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technologies" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
