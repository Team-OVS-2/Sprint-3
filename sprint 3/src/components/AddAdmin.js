import React, { Component } from 'react'
import AdminService from '../services/AdminService';
 class AddAdmin extends Component {
    constructor(props) {
        super(props)
    this.state = {
    id: this.props.match.params.id,
    adminName: '',
    contactNumber:'',
    email:'',
    password: ''
}

this.changeAdminNameHandler = this.changeAdminNameHandler.bind(this);
this.changePasswordHandler = this.changePasswordHandler.bind(this);
this.changeContactNumberHandler = this.changeContactNumberHandler.bind(this);
this.changeEmailHandler = this.changeEmailHandler.bind(this);
this.saveOrUpdateAdmin = this.saveOrUpdateAdmin.bind(this);
}

componentDidMount(){
    if(this.state.id==='_add'){
        return
    }
    else{
        AdminService.getAdminById(this.state.id).then((res)=>
        {
            let admin=res.data;
            this.setState({
                adminName:admin.adminName,
                contactNumber:admin.contactNumber,
                email:admin.email,
            password: admin.password
            });
        });
    }
    }

    saveOrUpdateAdmin =(e) =>{
        e.preventDefault();
        let admin = { adminName: this.state.adminName, contactNumber:this.state.contactNumber, email:this.state.email, password: this.state.password};
        console.log('admin=> '+JSON.stringify(admin));

        if(this.state.id==='_add'){
            AdminService.addAdmin(admin).then(res =>{
                this.props.history.push('/admindetails');
            });
        
        }
        else{
            AdminService.updateAdmin(admin,this.state.id).then(res=>{
                this.props.history.push('/admindetails');
            });
        }
    }


changeAdminNameHandler= (event) => {
    this.setState({adminName: event.target.value});
}

changeContactNumberHandler= (event) => {
    this.setState({contactNumber: event.target.value});
}

changeEmailHandler= (event) => {
    this.setState({email: event.target.value});
}
changePasswordHandler= (event) => {
    this.setState({password: event.target.value});
}

     cancel()
     {
        this.props.history.push('/admindetails');
     }
     getTitle(){
         if(this.state.id==='_add'){
             return <h3 className="text-center">Add Admin</h3>
         }
         else{
             return <h3 className="text-center">Update Admin</h3>
         }
     }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset=md-3">
                            {
                                this.getTitle()
                            }
                        <div className="card-body">
                            <form>
                            <div className = "form-group">
                                            <label> Admin Name: </label>
                                            <input placeholder="Admin Name" name="adminName" className="form-control" 
                                                value={this.state.adminName} onChange={this.changeAdminNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Contact Number: </label>
                                            <input placeholder="Contact Number" name="contactNumber" className="form-control" 
                                                value={this.state.contactNumber} onChange={this.changeContactNumberHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        

                                <button className="btn btn-success" onClick={this.saveOrUpdateAdmin}>Save</button>
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
export default AddAdmin