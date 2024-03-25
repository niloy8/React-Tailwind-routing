import './App.css'
import Nav from './components/NAV/Nav'
import Navbar from './components/NAV/Navbar'
import Gym from './components/Priceoption/Gym'
function App() {
  return (
    <>
      <h1 className='text-7xl bg-yellow-400 text-center text-slate-50 p-3'>Open World</h1>
      <Nav></Nav>
      <Navbar></Navbar>
      <Gym></Gym>
    </>
  )
}

export default App
