import React, { Component } from 'react'
import VoterService from '../services/VoterService'

class ViewVoterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            voterId: this.props.match.params.voterId,
           reg_society: {}
        }
    }

    componentDidMount(){
        VoterService.getVoterById(this.state.voterId).then( res => {
            this.setState({reg_society: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Voter Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                        <label> VoterIdCardNo: </label>
                            <div> { this.state.reg_society.voterIdCardNo }</div>
                        </div>

                        <div className = "row">
                        <label> Voter First Name: </label>
                            <div> { this.state.reg_society.firstName }</div>
                        </div>

                        <div className = "row">
                            <label> Voter Last Name: </label>
                            <div> { this.state.reg_society.lastName }</div>
                        </div>

                        <div className = "row">
                        <label> Voter Gender: </label>
                            <div> { this.state.reg_society.gender }</div>
                        </div>

                        <div className = "row">
                        <label> Voter Password: </label>
                            <div> { this.state.reg_society.password }</div>
                        </div>

                        <div className = "row">
                            <label> Voter ReservationCategory: </label>
                            <div> { this.state.reg_society.reservationCategory }</div>
                        </div>

                        <div className = "row">
                        <label> Voter MobileNo: </label>
                            <div> { this.state.reg_society.mobileno }</div>
                        </div>

                        <div className = "row">
                        <label> Voter EmailId: </label>
                            <div> { this.state.reg_society.emailId }</div>
                        </div>

                        <div className = "row">
                        <label> Voter Address1: </label>
                            <div> { this.state.reg_society.address1 }</div>
                        </div>

                        <div className = "row">
                        <label> Voter Address2: </label>
                            <div> { this.state.reg_society.address2 }</div>
                        </div>

                        <div className = "row">
                        <label> Voter Mandal: </label>
                            <div> { this.state.reg_society.mandal }</div>
                        </div>

                        <div className = "row">
                        <label> Voter District: </label>
                            <div> { this.state.reg_society.district }</div>
                        </div>

                        <div className = "row">
                        <label> Voter Pincode: </label>
                            <div> { this.state.reg_society.pincode }</div>
                        </div>

                         {/* <div className = "row">
                        <label> Society Id: </label>
                            <div> { this.state.reg_society.societyId }</div>
                        </div>

                        <div className = "row">
                        <label> Voter CastedVote: </label>
                            <div> { this.state.reg_society.castedVote }
                            </div>  */}
                        </div>
                    </div>

                </div>
            
        )
    }
}

export default ViewVoterComponent