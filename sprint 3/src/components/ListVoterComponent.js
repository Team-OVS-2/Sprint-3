import React, { Component } from 'react'
import VoterService from '../services/VoterService'

class ListVoterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
               reg_society: []
        }
        this.addVoter = this.addVoter.bind(this);
        this.editVoter = this.editVoter.bind(this);
        this.deleteVoter = this.deleteVoter.bind(this);
    }

    deleteVoter(voterId){
        VoterService.deleteVoter(voterId).then( res => {
            this.setState({reg_society: this.state.reg_society.filter(voter => voter.voterId !== voterId)});
        });
    }
    viewVoter(voterId){
        this.props.history.push(`/view-voter/${voterId}`);
    }

    editVoter(voterId){
        this.props.history.push(`/add-voter/${voterId}`);
    }

    componentDidMount(){
        VoterService.getVoters().then((res) => {
            this.setState({reg_society: res.data});
        });
    }

    addVoter(){
        this.props.history.push('/add-voter/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Voters List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addVoter}> Add Voter</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> VoterIdCardNo</th>
                                    <th> Voter First Name</th>
                                    <th> Voter Last Name</th>
                                    <th>Voter Gender</th>
                                    <th> Voter Password</th>
                                    <th>Voter ReservationCategory</th>
                                    <th>Voter MobileNo</th>
                                    <th>Voter EmailId</th>
                                    <th>Voter Address1</th>
                                    <th>Voter Address2</th>
                                    <th>Voter Mandal </th>
                                    <th> Voter District</th>
                                    <th> Voter Pincode</th>
                                    {/* <th> Society Id</th> */}
                                    {/* <th> Voter CastedVote</th> */}
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.reg_society.map(
                                        voter => 
                                        <tr key = {voter.voterId}>
                                            <td> { voter.voterIdCardNo} </td> 
                                             <td> { voter.firstName} </td>   
                                             <td> {voter.lastName}</td>
                                             <td> { voter.gender} </td>  
                                             <td> { voter.password} </td>  
                                             <td> { voter.reservationCategory} </td>  
                                             <td> { voter.mobileno} </td>  
                                             <td> {voter.emailId}</td>
                                             <td> { voter.address1} </td>  
                                             <td> { voter.address2} </td> 
                                             <td> { voter.mandal} </td>   
                                             <td> { voter.district} </td>
                                             <td> { voter.pincode} </td>   
                                             {/* <td> { voter.societyId} </td>    */}
                                             {/* <td> { voter.castedVote} </td>   */}
                                             <td>
                                             <button onClick={ () => this.editVoter(voter.voterId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVoter(voter.voterId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewVoter(voter.voterId)} className="btn btn-info">View </button>
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

export default ListVoterComponent