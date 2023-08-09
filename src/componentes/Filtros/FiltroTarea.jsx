import { BotonFiltro, ContenedorBotonesFiltros, ContenedorFiltros } from "./FiltrosTareas.components";

const FiltroTarea = ({
    activeFilter, 
    mostrarTareas, 
    tareasActivas, 
    tareasCompletadas}) => {

    return (
        <ContenedorFiltros>
            <ContenedorBotonesFiltros>
                <BotonFiltro action={()=>mostrarTareas()} active= {activeFilter} filter='Todos'/>
                <BotonFiltro action={()=>tareasActivas()} active= {activeFilter} filter='Activos'/>
                <BotonFiltro action={()=>tareasCompletadas()} active= {activeFilter} filter='Completados'/>
            </ContenedorBotonesFiltros>
        </ContenedorFiltros>
    )
}

export default FiltroTarea;