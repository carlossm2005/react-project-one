
const Paciente = ({paciente, setPaciente, eliminarPaciente}) =>{

    const { nombre, nombreProp, correo, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="m-3 p-7 bg-slate-700 rounded-xl">
            <p className="font-semibold text-gray-100 my-3">
                Mascota: {''} 
                <span className="font-normal">{nombre}</span>
            </p>
            <p className="font-semibold text-gray-100 my-3">
                Propietario: {''} 
                <span className="font-normal">{nombreProp}</span>
            </p>
            <p className="font-semibold text-gray-100 my-3">
                Correo Electrónico: {''} 
                <span className="font-normal">{correo}</span>
            </p>
            <p className="font-semibold text-gray-100 my-3">
                Fecha de alta: {''} 
                <span className="font-normal">{fecha}</span>
            </p>
            <p className="font-semibold text-gray-100 my-3">
                Síntomas: {''} 
                <span className="font-normal">{sintomas}</span>
            </p>
            <div className="flex justify-between">
                <button
                    type="button"
                    className="py-2 px-4 bg-indigo-600 text-gray-200 font-bold rounded-2xl"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-4 bg-red-700 text-gray-200 font-bold rounded-2xl"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente