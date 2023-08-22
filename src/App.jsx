import { useState } from "react"
import Formulario from "./componentes/formulario.jsx"
import Header from "./componentes/header.jsx"
import Listado from "./componentes/listado.jsx"

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <>
      <div className="container">
        <Header />
        <div className="pt-10 mx-5 flex">
          <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          />
          <Listado 
          pacientes = {pacientes}
          />
        </div>
      </div>
    </>
  )
}

export default App
