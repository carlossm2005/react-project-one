import Paciente from "./paciente"

const Listado = ({pacientes, setPaciente, eliminarPaciente}) =>{

    return (
        <div className="listado w-1/2 my-5">
            <h2 className="text-3xl text-center text-gray-400 font-semibold pb-6">Listado de Pacientes</h2>
            <p className="font-bold text-center text-gray-400 pb-6">
                Administra tus {''} 
                <span className="text-indigo-600">Pacientes y Citas</span>
            </p>
            { pacientes && pacientes.length ? (
                <>
                {pacientes.map( (paciente) =>{
                    return (
                        <Paciente 
                        key = {paciente.id}
                        paciente = {paciente}
                        setPaciente = {setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                        />
                    )
                })}
                </>
            ) : (
                <>
                <h1 className="m-3 p-7 bg-slate-700 rounded-xl text-gray-400 font-semibold text-3xl text-center">
                    No hay pacientes
                </h1>
                </>
            ) }
            
        </div>
    )
}

export default Listado