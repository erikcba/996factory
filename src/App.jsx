import './App.css'
import Navbar from './components/Navbar'
import FormSection from './sections/FormSection'
import HeroSection from './sections/HeroSection'
import Servicios from './sections/Servicios'
import SubHero from './sections/SubHero'


function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Servicios/>
      <FormSection/>
    </>
  )
}

export default App
