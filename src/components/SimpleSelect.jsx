import React from 'react'


function SimpleSelect() {
    return (
        <div className="dropdown d-inline p-2">
            <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Estado
            </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/">Aguascalientes</a>
            <a className="dropdown-item" href="/">Baja California</a>
            <a className="dropdown-item" href="/">Baja California Sur</a>
            <a className="dropdown-item" href="/">Campeche</a>
            <a className="dropdown-item" href="/">Chiapas</a>
            <a className="dropdown-item" href="/">Chihuahua</a>
            <a className="dropdown-item" href="/">Coahuila</a>
            <a className="dropdown-item" href="/">Colima</a>
            <a className="dropdown-item" href="/">Ciudad de México</a>
            <a className="dropdown-item" href="/">Durango</a>
            <a className="dropdown-item" href="/">Estado de México</a>
            <a className="dropdown-item" href="/">Guanajuato</a>
            <a className="dropdown-item" href="/">Guerrero</a>
            <a className="dropdown-item" href="/">Hidalgo</a>
            <a className="dropdown-item" href="/">Jalisco</a>
            <a className="dropdown-item" href="/">Michoacán</a>
            <a className="dropdown-item" href="/">Morelos</a>
            <a className="dropdown-item" href="/">Nayarit</a>
            <a className="dropdown-item" href="/">Nuevo León</a>
            <a className="dropdown-item" href="/">Oaxaca</a>
            <a className="dropdown-item" href="/">Puebla</a>
            <a className="dropdown-item" href="/">Querétaro</a>
            <a className="dropdown-item" href="/">Quintana Roo</a>
            <a className="dropdown-item" href="/">San Luis Potosí</a>
            <a className="dropdown-item" href="/">Sinaloa</a>
            <a className="dropdown-item" href="/">Sonora</a>
            <a className="dropdown-item" href="/">Tabasco</a>
            <a className="dropdown-item" href="/">Tamaulipas</a>
            <a className="dropdown-item" href="/">Tlaxcala</a>
            <a className="dropdown-item" href="/">Veracruz</a>
            <a className="dropdown-item" href="/">Yucatán</a>
            <a className="dropdown-item" href="/">Zacatecas</a>
          </div>
        
        <div className="dropdown d-inline p-2">
          <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Año
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/">1990 -1995</a>
            <a className="dropdown-item" href="/">1991</a>
            <a className="dropdown-item" href="/">1992</a>
          </div>
        </div>
        
        <div className="dropdown d-inline p-5">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ordenar Datos
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/">Ascendente</a>
            <a className="dropdown-item" href="/">Descendente</a>
            <a className="dropdown-item" href="/">Alfabeticamente</a>
          </div>
        </div>
      </div>

        
    )
}

export default SimpleSelect

