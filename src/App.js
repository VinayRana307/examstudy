import { Component } from 'react';
import Router from './Routers/Router'
import HomePage from './Components/Home_Page/HomePage'
import profileAvatar from './Assets/utils/images/profileAvatar.png'

class App extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:'',
      value:true,
    }
  }
handlesumbit = (e) =>{
  e.preventDefault();
  let {username , password} = this.state;
  
  if(username == 'Rana' && password == 'Rana321'){
      alert('success')
      this.setState({value:false})
  }
  else{
    alert('User not found')
  }
}
  render(){ 
        return (
          <div>
          {this.state.value?
          <div className="container-fluid background">
            
            <form className="userdata" onSubmit={this.handlesumbit}>
            <table>
              <tr>
                <td><img src={profileAvatar} className="avtar_img"/></td>
              </tr>
              <tr>
                <td>Username :</td>
                <td><input type="text" value={this.state.username} name="username" onChange={(e)=>this.setState({username:e.target.value})}/></td>
              </tr>
              <tr>
                <td>Password :</td>
                <td><input type="password" value={this.state.password} name="password" onChange={(e)=>this.setState({password:e.target.value})}/></td>
              </tr>
              <tr>
                <td><button type="submit">Login</button></td>
              </tr>
            </table>
            </form>
          </div>
           
          : 
          <Router />
        }
        </div>
        )
      }
}

export default App;
