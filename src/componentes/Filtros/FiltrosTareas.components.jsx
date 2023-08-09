const ContenedorFiltros = ( { children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            {children}
        </div>
    )
}

const ContenedorBotonesFiltros = ({
    children
}) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
};

const BotonFiltro = ({ action, active, filter }) => {
    return (
        <button onClick={action}
        className={`hover:text-blue cursor-pointer transition-all duration-300 ease-in-out ${
            active && filter && active.toLowerCase().includes(filter.toLowerCase())
              ? "text-blue-400"
              : "text-gray-400"
          }`}>{filter}</button>
    )
}


export {ContenedorFiltros, ContenedorBotonesFiltros, BotonFiltro}