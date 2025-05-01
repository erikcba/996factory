import './App.css'
import Navbar from './components/Navbar'
import FormSection from './sections/FormSection'
import GaleriaSection from './sections/GaleriaSection'
import HeroSection from './sections/HeroSection'
import Servicios from './sections/Servicios'
import SubHero from './sections/SubHero'


function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Servicios/>
      <GaleriaSection/>
      <FormSection/>
    </>
  )
}

export default App
