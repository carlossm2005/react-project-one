
const Paciente = ({paciente}) =>{

    const { nombre, nombreProp, correo, fecha, sintomas } = paciente;

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
        </div>
    )
}

export default Paciente