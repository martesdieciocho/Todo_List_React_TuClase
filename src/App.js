//Importando componentes
import Titulo from './componentes/Titulo/Titulo';
import TareaInput from './componentes/TareaInput/TareaInput';
import ListaTareas from './componentes/ListaTareas/ListaTareas';


import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  //manejo de estados para las tareas
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || []); //Cargando datos almacenados en el LocalStorage

  //Petición para carga de lista de tareas mediante JSONPlaceHolder limitando el resultado solo a 5 valores. Condicional para validar existencia de datos en LocalStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("tareas"));
    if (storedData) {
      setTareas(storedData);
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(res => res.json())
        .then(data => {
          setTareas(data);
          localStorage.setItem("tareas", JSON.stringify(data));
        });
    }
  }, []);

  //Manejando estados para los filtros de la app
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [tareasFiltradas, setTareasFiltradas] = useState(tareas);


  //función para agregar una nueva tarea a la lista
  const addTarea = (title) => {
    const ultId = tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1;
    const nuevaTarea = {
      id: ultId,
      title,
      completed: false
    }
    const listaTareas = [...tareas]
    listaTareas.push(nuevaTarea)
    setTareas(listaTareas)
    console.log(listaTareas);
    localStorage.setItem("tareas", JSON.stringify(listaTareas)); //Actualizando los datos del localStorage
  }

  //función para manipular el comportamiento al completar una tarea
  const handleCompletarTarea = (id) => {
    const actualizarLista = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completed: !tarea.completed }
      }
      return tarea;

    })

    setTareas(actualizarLista);
  }

  //función para manipular el comportamiento al eliminar una tarea
  const handleEliminarTarea = (id) => {
    const actualizarLista = tareas.filter(tarea => tarea.id !== id)
    setTareas(actualizarLista);
    localStorage.setItem("tareas", JSON.stringify(actualizarLista)); //Actualizando los datos del localStorage
    toast.error(`Tarea eliminada correctamente`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
  //Funciones para manejar el comportamiento de los filtros
  const mostrarTareas = () => {
    setFiltroActivo('todos')
  }

  const tareasActivas = () => {
    setFiltroActivo('activos')
  }

  const tareasCompletadas = () => {
    setFiltroActivo('completados')
  }

  //Manejando el estado de los filtros
  useEffect(() => {
    if (filtroActivo === 'todos') {
      setTareasFiltradas(tareas)
    } else if (filtroActivo === 'activos') {
      const tareasActivas = tareas.filter(tarea => tarea.completed === false)
      setTareasFiltradas(tareasActivas)
    } else if (filtroActivo === 'completados') {
      const tareasCompletadas = tareas.filter(tarea => tarea.completed === true)
      setTareasFiltradas(tareasCompletadas)
    }
  }, [filtroActivo, tareas])

  return (
    //Estilos para contenedor principal
    <div className=" bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Titulo />
        <TareaInput addTarea={addTarea} />
        <ListaTareas
          tareas={tareasFiltradas}
          filtroActivo={filtroActivo}
          handleCompletarTarea={handleCompletarTarea}
          handleEliminarTarea={handleEliminarTarea}
          mostrarTareas={mostrarTareas}
          tareasActivas={tareasActivas}
          tareasCompletadas={tareasCompletadas}
        />

      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
