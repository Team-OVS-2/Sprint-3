import React, { Component } from 'react'
import EOfficerService from '../services/EOfficerService'

export class ListEOfficerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                officer: []
        }
        this.addOfficer = this.addOfficer.bind(this);
        this.editOfficer = this.editOfficer.bind(this);
        this.deleteOfficer = this.deleteOfficer.bind(this);
    }

    deleteOfficer(officerId){
        EOfficerService.deleteElectionOfficer(officerId).then( res => {
            this.setState({officer: this.state.officer.filter(officers => officers.officerId !== officerId)});
        });
    }
    viewOfficer(officerId){
        this.props.history.push(`/view-officer/${officerId}`);
    }
    editOfficer(officerId){
        this.props.history.push(`/add-officer/${officerId}`);
    }

    componentDidMount(){
        EOfficerService.getElectionOfficers().then((res) => {
            this.setState({ officer: res.data});
        });
    }

    addOfficer(){
        this.props.history.push('/add-officer/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Election Officers List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addOfficer}> Add Election Officer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Email Id</th>
                                <th> Password</th>
                                <th> Gender</th>
                                <th> Mobile No</th>
                                <th> Address1</th>
                                <th> Address2</th>
                                <th> District</th>
                                <th> Pincode</th>
                                <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.officer.map(
                                        officers => 
                                        <tr key = {officers.officerId}> 
                                              <td> {officers.firstName}</td>   
                                              <td> {officers.lastName}</td>   
                                              <td> {officers.emailId}</td>
                                              <td> {officers.password}</td>
                                              <td> {officers.gender}</td>
                                              <td> {officers.mobileno}</td> 
                                              <td> {officers.address1}</td>
                                              <td> {officers.address2}</td>
                                              <td> {officers.district}</td>
                                              <td> {officers.pincode}</td>  
                                             <td>
                                                 <button onClick={ () => this.editOfficer(officers.officerId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOfficer(officers.officerId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewOfficer(officers.officerId)} className="btn btn-info">View </button>
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

export default ListEOfficerComponent