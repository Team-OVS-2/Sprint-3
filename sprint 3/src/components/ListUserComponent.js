import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                userdetails: []
                
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(userId){
        UserService.deleteUser(userId).then( res => {
            this.setState({userdetails: this.state.userdetails.filter(users => users.userId !== userId)});
        });
    }
    viewUser(userId){
        this.props.history.push(`/view-userdetails/${userId}`);
    }
    editUser(userId){
        this.props.history.push(`/add-userdetails/${userId}`);
    }

    
    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({userdetails: res.data});
        });
    }
   
    addUser(){
        this.props.history.push('/add-userdetails/_add')
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    {/* <th> User Id</th> */}
                                    <th> User Password</th>
                                    <th> User First Name</th>
                                    <th> User Last Name</th>
                                    <th> User Email Id</th>
                                    <th> Contact no</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.userdetails.map(
                                        users => 
                                        <tr key = {users.userId}>
                                          
                                             <td> {users.password} </td>   
                                             <td> {users.firstName} </td>   
                                             <td> {users.lastName}</td>
                                             <td> {users.email}</td>
                                             <td> {users.contactno}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(users.userId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(users.userId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(users.userId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent