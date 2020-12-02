import React, { Component } from 'react'
import UserService from '../services/UserService';
//import {BrowserRouter as Link} from 'react-router-dom'

class LoginUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            email: '',
            password:''
        }
        this.changeemailIdHandler = this.changeemailIdHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this);  
        this.validateLogin = this.validateLogin.bind(this);  
    }

    // step 3
    componentDidMount(){

        // step 4
        // if(this.state.id === '_login'){
        //     return
        // }else{
            UserService.getUserById(this.state.email).then( (res) =>{
                let user = res.data;
                this.setState({
                    email: user.email,
                    password : user.password
                });
            });
                
    }

    validateLogin = (e) => {
        e.preventDefault();
        let user = {email: this.state.email,password:this.state.password};
        console.log('user => ' + JSON.stringify(user));

                UserService.validateUser(this.state.email, this.state.password).then( (res) =>{
                    let users = res.data;
                    if(users.email===user.email && users.password===user.password){
                             this.props.history.push('/home');
                             alert("Login Successful");
                         }
                         else
                         {
                             alert("Login Failed");
                         }
                        });
                }
  
    changeemailIdHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    cancel(){
        this.props.history.push('/userdetails');
    }

    getTitle(){
        if(this.state.userId === '_add'){
            return <h3 className="text-center">Register</h3>
        }else{
            return <h3 className="text-center">Login</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                       
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input type="email" placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeemailIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password : </label>
                                            <input type="password" placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                       
                                       <button className="btn btn-success" onClick={this.validateLogin}>Login</button>
                                    
                                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginUser