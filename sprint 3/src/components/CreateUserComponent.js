import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userId: this.props.match.params.userId,
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            contactno:''
        }
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.userId === '_add'){
            return
        }else{
            UserService.getUserById(this.state.userId).then( (res) =>{
                let users = res.data;
                this.setState({password: users.password,
                    firstName: users.firstName,
                    lastName: users.lastName,
                    email : users.email,
                    contactno: users.contactno
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let users = {password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, contactno: this.state.contactno};
        console.log('users => ' + JSON.stringify(users));

        // step 5
        if(this.state.userId === '_add'){
            UserService.createUser(users).then(res =>{
                this.props.history.push('/userdetails');
            });
        }else{
            UserService.updateUser(users, this.state.userId).then( res => {
                this.props.history.push('/userdetails');
            });
        }
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeContactNoHandler= (event) => {
        this.setState({contactno: event.target.value});
    }

    cancel(){
        this.props.history.push('/userdetails');
    }

    getTitle(){
        if(this.state.userId === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
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
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ContactNO: </label>
                                            <input placeholder="Contact no" name="contactno" className="form-control" 
                                                value={this.state.contactno} onChange={this.changeContactNoHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
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

export default CreateUserComponent