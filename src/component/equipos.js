import React from 'react'
import { LigaContext } from './liga'



class Equipo extends React.Component {

    render() {
        return (
            <LigaContext.Consumer>
            {
                (value) => {
                    const equipos=value.state
                
                    return equipos.map((equipo,i)=>{
                    console.log(equipo)
                        return(<div key={i} className="col-md-4">
        <div className="card text-white bg-primary mb-3" >
  <div className="card-header">{equipo.nombre}</div>
  <div className="card-body">
    <h4 className="card-title">Titulos Ganados</h4>
    <p className="card-text">Total: {equipo.titulos}</p>
    <button type="button" onClick={()=>{
        console.log('hola desde ', i)
        value.victoria(i)
        
    }} className="btn btn-success">Victoria</button>
    
  </div>
</div>
        </div>)
                    })
                    
                }

            }
            
            
    </LigaContext.Consumer>)
    }


}
const Equipos = () => {

    return (
        <div className="row">
     
        <Equipo />
    
        </div>

    )


}

export default Equipos
