import FiltroTarea from "../Filtros/FiltroTarea";
import Tarea from "../Tarea/Tarea";

//Renderización del listado de tareas
const ListaTareas = ({ tareas, handleCompletarTarea, handleEliminarTarea, filtroActivo, mostrarTareas, tareasActivas, tareasCompletadas }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {tareas.map(tarea => {
                return (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        handleCompletarTarea={handleCompletarTarea}
                        handleEliminarTarea={handleEliminarTarea}
                    />
                )
            })}
            <FiltroTarea 
                filtroActivo ={filtroActivo}
                mostrarTareas ={mostrarTareas}
                tareasActivas ={tareasActivas}
                tareasCompletadas ={tareasCompletadas}
            />
        </div>
    )
}

export default ListaTareas;