import './App.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Main from './Components/Main'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);

  return (
    <>
      <Main />
    </>
  )
}

export default App
