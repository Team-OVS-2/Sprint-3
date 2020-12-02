import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class ViewAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            admindetails: {}
        }
    }

    componentDidMount(){
      AdminService.getAdminById(this.state.id).then( res => {
            this.setState({admindetails: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Admin Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                        <label> Admin Id: </label>
                            <div> { this.state.admindetails.id }</div>
                        </div>

                            <label> Admin Name: </label>
                            <div> { this.state.admindetails.adminName }</div>
                        </div>

                        <div className = "row">
                            <label> Contact Number: </label>
                            <div> { this.state.admindetails.contactNumber }</div>
                        </div>

                        <div className = "row">
                            <label> Email: </label>
                            <div> { this.state.admindetails.email }</div>
                        </div>

                        <div className = "row">
                            <label> Password: </label>
                            <div> { this.state.admindetails.password }</div>
                        </div>
                       
                    </div>

                </div>
            
        )
    }
}

export default ViewAdmin