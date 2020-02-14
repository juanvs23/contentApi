import React, { Component } from 'react'
import * as data from '../data'

const LigaContext = React.createContext()
export { LigaContext }
class LigaProvider extends Component {
    state = {
        equipos: data.default
    }
    render() {
        return (
            <LigaContext.Provider value={{
             state: this.state.equipos,
             victoria:(id)=>{
                let equipos=[...this.state.equipos]
                equipos[id].titulos=equipos[id].titulos+1
                this.setState({
                    equipos
                })
                
             }
          }}>
          {this.props.children}
          </LigaContext.Provider>
        )
    }

}
export default LigaProvider
