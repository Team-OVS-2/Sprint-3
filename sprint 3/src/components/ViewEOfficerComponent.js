import React, { Component } from 'react'
import EOfficerService from '../services/EOfficerService'

class ViewEOfficerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            officerId: this.props.match.params.officerId,
            officer: {}
        }
    }

    componentDidMount(){
        EOfficerService.getElectionOfficerById(this.state.officerId).then( res => {
            this.setState({officer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Election Officer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Officer Id: </label>
                            <div>{ this.state.officer.officerId }</div>
                        </div>
                        <div className = "row">    
                            <label> First Name: </label>
                            <div> { this.state.officer.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.officer.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Email ID: </label>
                            <div> { this.state.officer.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Password: </label>
                            <div> { this.state.officer.password }</div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.officer.gender }</div>
                        </div>
                        <div className = "row">
                            <label> Mobile No: </label>
                            <div> { this.state.officer.mobileno }</div>
                        </div>
                        <div className = "row">
                            <label> Address1: </label>
                            <div> { this.state.officer.address1 }</div>
                        </div>
                        <div className = "row">
                            <label> Address2: </label>
                            <div> { this.state.officer.address2 }</div>
                        </div>
                        <div className = "row">
                            <label> District: </label>
                            <div> { this.state.officer.district }</div>
                        </div>
                        <div className = "row">
                            <label> Pincode: </label>
                            <div> { this.state.officer.pincode }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEOfficerComponent