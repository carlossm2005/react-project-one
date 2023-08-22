import { useEffect, useState } from "react"
import Formulario from "./componentes/formulario.jsx"
import Header from "./componentes/header.jsx"
import Listado from "./componentes/listado.jsx"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    console.log('eliminando paciente ', id );
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="pt-10 mx-5 flex">
          <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
          />
          <Listado 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
          />
        </div>
      </div>
    </>
  )
}

export default App
