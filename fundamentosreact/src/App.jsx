import { useState } from 'react'
import foto from './assets/foto.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>HOJA DE VIDA APRENDIZ</h1>
        <h2>ANALISIS Y DESARROLLO DE SOFTWARE</h2>
        <p>Karen Lizeth Prieto</p>
        <img src={foto} alt="foto de perfil" width="250"/>
        <h3>INFORMACIÓN PERSONAL:</h3>
        <p>Karen Lizeth Prieto Mendivelso</p>
        <p>18 años</p>
        <p>Bogotá</p>
        <p>lizethprieto38@gmail.com</p>
        <p>Analisis y desarrollo de software</p>
        <h3>CURSOS REALIZADOS:</h3>
        <p>Curso de estilismo</p>
        <h3>OBJETIVO PROFESIONAL</h3>
        <p>Deseo aprender React para fortalecer mis habilidades en el desarrollo frontend y crear aplicaciones web modernas, dinámicas y escalables. Me gustaría aplicar estos conocimientos en proyectos de plataformas empresariales, comercio electrónico y aplicaciones que mejoren la experiencia de los usuarios.</p>
        <button>Conoce más sobre mí</button>
      </div>
    </>
  )
}

export default App
