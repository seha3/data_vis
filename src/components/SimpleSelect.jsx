import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class SimpleSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      estados: "",
      year: "",
      sort: "",
      data: ""
    }
    // this.handleChange = this.handleChange.bind(this)
  }
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div className="dropdown d-inline p-2">
                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Estado
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/" id="1" estados="AGS">Aguascalientes</a>
                  <a className="dropdown-item" href="/" id="2" estados="BCN">Baja California</a>
                  <a className="dropdown-item" href="/" id="3" estados="BCS">Baja California Sur</a>
                  <a className="dropdown-item" href="/" id="4" estados="CAM">Campeche</a>
                  <a className="dropdown-item" href="/" id="5" estados="CHS">Chiapas</a>
                  <a className="dropdown-item" href="/" id="6" estados="CHI">Chihuahua</a>
                  <a className="dropdown-item" href="/" id="7" estados="COA">Coahuila</a>
                  <a className="dropdown-item" href="/" id="8" estados="COL">Colima</a>
                  <a className="dropdown-item" href="/" id="9" estados="CDMX">Ciudad de México</a>
                  <a className="dropdown-item" href="/" id="10" estados="DGO">Durango</a>
                  <a className="dropdown-item" href="/" id="11" estados="EM">Estado de México</a>
                  <a className="dropdown-item" href="/" id="12" estados="GTO">Guanajuato</a>
                  <a className="dropdown-item" href="/" id="13" estados="GRO">Guerrero</a>
                  <a className="dropdown-item" href="/" id="14" estados="HGO">Hidalgo</a>
                  <a className="dropdown-item" href="/" id="15" estados="JAL">Jalisco</a>
                  <a className="dropdown-item" href="/" id="16" estados="MICH">Michoacán</a>
                  <a className="dropdown-item" href="/" id="17" estados="MOR">Morelos</a>
                  <a className="dropdown-item" href="/" id="18" estados="NAY">Nayarit</a>
                  <a className="dropdown-item" href="/" id="19" estados="NL">Nuevo León</a>
                  <a className="dropdown-item" href="/" id="20" estados="OAX">Oaxaca</a>
                  <a className="dropdown-item" href="/" id="21" estados="PUE">Puebla</a>
                  <a className="dropdown-item" href="/" id="22" estados="QRO">Querétaro</a>
                  <a className="dropdown-item" href="/" id="23" estados="QR">Quintana Roo</a>
                  <a className="dropdown-item" href="/" id="24" estados="SLP">San Luis Potosí</a>
                  <a className="dropdown-item" href="/" id="25" estados="SIN">Sinaloa</a>
                  <a className="dropdown-item" href="/" id="26" estados="SON">Sonora</a>
                  <a className="dropdown-item" href="/" id="27" estados="TAB">Tabasco</a>
                  <a className="dropdown-item" href="/" id="28" estados="TAM">Tamaulipas</a>
                  <a className="dropdown-item" href="/" id="29" estados="TLAX">Tlaxcala</a>
                  <a className="dropdown-item" href="/" id="30" estados="VER">Veracruz</a>
                  <a className="dropdown-item" href="/" id="31" estados="YUC">Yucatán</a>
                  <a className="dropdown-item" href="/" id="32" estados="ZAC">Zacatecas</a>
                </div>
            
                <div className="dropdown d-inline p-2">
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Año
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/" year="1">1990 -1999</a>
                        <a className="dropdown-item" href="/" year="2">2000 - 2009</a>
                        <a className="dropdown-item" href="/" year="3">2010 - 2019</a>
                    </div>
                </div>
            
                <div className="dropdown d-inline p-5">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ordenar Datos
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/" sort="Ascendente">Ascendente</a>
                        <a className="dropdown-item" href="/" sort="Descendente">Descendente</a>
                        <a className="dropdown-item" href="/" sort="Alfabeticamente">Alfabeticamente</a>
                    </div>
                </div>
            </div>
        )
    }
}
