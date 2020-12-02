import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            userdetails: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.userId).then( res => {
            this.setState({userdetails: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> User Password: </label>
                            <div> { this.state.userdetails.password }</div>
                        </div>
                        <div className = "row">
                            <label> User First Name: </label>
                            <div> { this.state.userdetails.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> User Last Name: </label>
                            <div> { this.state.userdetails.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> User Email ID: </label>
                            <div> { this.state.userdetails.email }</div>
                        </div>
                        <div className = "row">
                            <label> User Contact No: </label>
                            <div> { this.state.userdetails.contactno}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent