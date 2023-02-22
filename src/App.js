import { Component } from 'react';
import Router from './Routers/Router'
import HomePage from './Components/Home_Page/HomePage'

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){ 
        return (
          <div>
            gfdg
            <HomePage />
            <Router />
          </div>
        )
      }
}

export default App;