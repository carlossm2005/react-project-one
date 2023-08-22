import { useEffect, useState } from "react"
import ErrorPopUp from "./error";


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) =>{
    const [nombre, setNombre] = useState('');
    const [nombreProp, setNombreProp] = useState('');
    const [correo, setCorreo] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if ( Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre);
            setNombreProp(paciente.nombreProp);
            setCorreo(paciente.correo);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    const generarID = () =>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if ([nombre, nombreProp, correo, fecha, sintomas].includes('')) {
            setError(true);
        } else{ 
            setError(false);

           const objetoPaciente = {
            nombre,
            nombreProp,
            correo,
            fecha,
            sintomas
            };

        setNombre('');
        setNombreProp('');
        setCorreo('');
        setFecha('');
        setSintomas('');

        if (paciente.id) {
            objetoPaciente.id = paciente.id;

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {

            objetoPaciente.id = generarID();
            setPacientes([...pacientes, objetoPaciente]);
            
        }
        }
    }

    return (
        <div className="formulario w-1/2 my-5">
            <h2 className="text-3xl text-center text-gray-400 font-semibold pb-6">Seguimiento Pacientes</h2>

            <p className="font-bold text-center text-gray-400 pb-6">
                Añade pacientes y {''}
                <span className="text-indigo-600">Administralos</span>
            </p>

            <form 
            className="bg-slate-800 rounded-lg shadow-md p-5"
            onSubmit={handleSubmit}
            >
                {error && <ErrorPopUp/>}
                <div className="mb-5">
                    <label
                        htmlFor="mascota" 
                        className="block text-gray-200 font-semibold">
                        Nombre de la mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="placeholder-slate-400 w-full p-2 mt-2"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario" 
                        className="block text-gray-200 font-semibold">
                        Nombre del propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="placeholder-slate-400 w-full p-2 mt-2"
                        value={nombreProp}
                        onChange={ (e) => setNombreProp(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email" 
                        className="block text-gray-200 font-semibold">
                        Correo Electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo electrónico"
                        className="placeholder-slate-400 w-full p-2 mt-2"
                        value={correo}
                        onChange={ (e) => setCorreo(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta" 
                        className="block text-gray-200 font-semibold">
                        Fecha de alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="placeholder-slate-400 w-full p-2 mt-2"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas" 
                        className="block text-gray-200 font-semibold">
                        Sintomas
                    </label>
                    <textarea
                        id="mascota"
                        type="text"
                        placeholder="Sintomas"
                        className="placeholder-slate-400 w-full p-2 mt-2"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    />
                </div>
                <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 rounded-full text-gray-100 font-bold"
                value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario