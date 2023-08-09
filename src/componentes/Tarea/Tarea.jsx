//Renderización de la tarea.
const Tarea = ( { tarea, handleCompletarTarea, handleEliminarTarea }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 ">
            <div className="flex items-center">
                {
                    tarea.completed ? (
                        <div onClick={ () => handleCompletarTarea(tarea.id)} className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <img
                                className="h-4 w-4 " src="/check-icon.svg" alt="Check Icon"
                            />
                        </div>
                    ) : 
                    (<span onClick={ () => handleCompletarTarea(tarea.id)} className="border border-gray-500 border-solid p-3 rounded-full cursor-pointer"></span>
                    )
                }
                
                <p className={`pl-3 ${tarea.completed ? "line-through" : ""}`}>
                    {tarea.title}
                </p>
            </div>
            <img onClick={ () => handleEliminarTarea(tarea.id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon"  />
        </div>
    )
}

export default Tarea;