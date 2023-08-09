import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Componente para manejar y renderizar la función de agregar una tarea.
const TareaInput = ({ addTarea }) => {

    const [titulo, setTitulo] = useState('');

    const handleAddTarea = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTarea(titulo);
            setTitulo('');
            mostrarNotificacion();
        }
    }
    
    const mostrarNotificacion = () => {
        toast.success('¡Tarea agregada!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            });
        };
    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input
                className="focus:shadow-lg font-Inter focus:shadow-gray-500 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                onKeyDown={(e) => handleAddTarea(e)}
                placeholder="Ingresa una nueva  tarea..."
            />
        </div>)
}

export default TareaInput;