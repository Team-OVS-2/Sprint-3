import React, { Component } from 'react'
import AdminService from '../services/AdminService';


class ListAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
                admindetails: []
        }
     this.addAdmin=this.addAdmin.bind(this);
        this.editAdmin = this.editAdmin.bind(this);
        this.deleteAdmin = this.deleteAdmin.bind(this);
    }

    deleteAdmin(id){
        AdminService.deleteAdmin(id).then( res => {
            this.setState({admindetails: this.state.admindetails.filter(admin => admin.id !== id)});
        });
    }
    viewAdmin(id){
        this.props.history.push(`/view-admindetails/${id}`);
    }
    editAdmin(id){
        this.props.history.push(`/add-admindetails/${id}`);
    }

    componentDidMount(){
        AdminService.getAdmins().then((res) => {
            this.setState({ admindetails: res.data});
        });
    }
addAdmin(){
    this.props.history.push('/add-admindetails/_add');
}
    
    render() {
        return (
            <div>
                 <h2 className="text-center">Admin List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAdmin}>Add Admin</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Admin Id</th>
                                    <th> Admin Name</th>
                                    <th> Contact Number </th>
                                    <th> Email </th>
                                    <th> Password </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.admindetails.map(
                                        admin => 
                                        <tr key = {admin.id}>
                                             <td> { admin.id} </td> 
                                             <td> { admin.adminName} </td>   
                                             <td> { admin.contactNumber} </td>  
                                             <td> { admin.email} </td>  
                                             <td> {admin.password}</td>
                                          
                                             <td>
                                                 <button onClick={ () => this.editAdmin(admin.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAdmin(admin.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAdmin(admin.id)} className="btn btn-info">View </button>
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

export default ListAdmin