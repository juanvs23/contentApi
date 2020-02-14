import React, { Component } from 'react'
import * as data from './data'
import Equipos from './component/equipos'
import LigaProvider from './component/liga'

class App extends Component {
  state = {
    equipos: data
  }


  render() {
    console.log(this.state.equipos.default)
    return (
      <div className="App">
      <header className="App-header">
        
      </header>
      <div className="container"> 
      <LigaProvider>
        <Equipos />
      </LigaProvider>  
      </div>
    </div>
    );
  }
}

export default App;
