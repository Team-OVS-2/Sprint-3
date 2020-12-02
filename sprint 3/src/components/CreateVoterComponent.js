import React, { Component } from 'react'
import VoterService from '../services/VoterService';

class CreateVoterComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            voterId: this.props.match.params.voterId,
            voterIdCardNo:'',
            firstName:'',
            lastName:'',
            gender:'',
            password:'',
            reservationCategory:'',
            mobileno:'',
            emailId:'',
            address1:'',
            address2:'',
            mandal:'',
            district:'',
            pincode:'',
            society:{district:'',
        headOfSociety:'',
    mandal:'',
pincode:'',
societyId:'',
societyName:'',
village:''
},
castedVote:''
};

this.changeVoterIdCardNoHandler = this.changeVoterIdCardNoHandler.bind(this);
this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
this.changeGenderHandler = this.changeGenderHandler.bind(this);
this.changePasswordHandler = this.changePasswordHandler.bind(this);
this.changeReservationCategoryHandler = this.changeReservationCategoryHandler.bind(this);
this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
this.changeAddress1Handler = this.changeAddress1Handler.bind(this);
this.changeMandalHandler = this.changeMandalHandler.bind(this);
this.changeDistrictHandler = this.changeDistrictHandler.bind(this);
this.changePincodeHandler = this.changePincodeHandler.bind(this);
this.changeSocietyHandler=this.changeSocietyHandler.bind(this);
this.changeCastedVoteHandler = this.changeCastedVoteHandler.bind(this);
this.saveOrUpdateVoter = this.saveOrUpdateVoter.bind(this);
    }

    componentDidMount(){
        if(this.state.voterId === '_add'){
            return
        }else{
       VoterService.getVoterById(this.state.voterId).then( (res) =>{
            let voters = res.data;
            this.setState({voterIdCardNo: voters.voterIdCardNo,
                firstName: voters.firstName,
                lastName:voters.lastName,
                gender:voters.gender,
                password:voters.password,
                reservationCategory:voters.reservationCategory,
                mobileno:voters.mobileno,
                emailId:voters.emailId,
                address1:voters.address1,
                address2:voters.address2,
                mandal:voters.mandal,
                district:voters.district,
                pincode:voters.pincode,
                society:voters.society,
                castedVote:voters.castedVote
            });
        });
    }
}

    saveOrUpdateVoter = (e) => {
        e.preventDefault();
        let voters = {voterIdCardNo:this.state.voterIdCardNo, firstName: this.state.firstName, lastName: this.state.lastName, gender:this.state.gender, password:this.state.password, reservationCategory:this.state.reservationCategory, mobileno:this.state.mobileno
            , emailId: this.state.emailId, address1:this.state.address1,address2:this.state.address2,mandal:this.state.mandal,district:this.state.district,pincode:this.state.pincode,society:this.state.society,castedVote:this.state.castedVote};
            console.log('voters => ' + JSON.stringify(voters));

            if(this.state.voterId === '_add'){
                VoterService.createVoter(voters).then(res =>{
                    this.props.history.push('/reg_society');
                });
            }else{
               VoterService.updateVoter(voters, this.state.voterId).then( res => {
                    this.props.history.push('/reg-society');
                });
            }
        }

    

    changeVoterIdCardNoHandler= (event) => {
        this.setState({voterIdCardNo: event.target.value});
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeReservationCategoryHandler= (event) => {
        this.setState({reservationCategory: event.target.value});
    }
    changeMobileNoHandler= (event) => {
        this.setState({mobileno: event.target.value});
    }
    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeAddress1Handler= (event) => {
        this.setState({address1: event.target.value});
    }
    changeAddress2Handler= (event) => {
        this.setState({address2: event.target.value});
    }
    changeMandalHandler= (event) => {
        this.setState({mandal: event.target.value});
    }
    changeDistrictHandler= (event) => {
        this.setState({district: event.target.value});
    }
    changePincodeHandler= (event) => {
        this.setState({pincode: event.target.value});
    }
    changeSocietyHandler= (event) => {
        this.setState({society: event.target.value});
    }
    changeCastedVoteHandler= (event) => {
        this.setState({castedVote: event.target.value});
    }

 
    cancel()
    {
        this.props.history.push('/reg_society');
    }
    getTitle()
    {
        if(this.state.voterId === '_add'){
            return <h3 className="text-center">Add Voter</h3>
        }else{
            return <h3 className="text-center">Update Voter</h3>
        }
    }
    render()
     {
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
                                            <label> VoterIdCardNo: </label>
                                            <input placeholder="VoterIdCardNo" name="voterIdCardNo" className="form-control" 
                                                value={this.state.voterIdCardNo} onChange={this.changeVoterIdCardNoHandler}/>
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
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> ReservationCategory: </label>
                                            <input placeholder="ReservationCategory" name="reservationCategory" className="form-control" 
                                                value={this.state.reservationCategory} onChange={this.changeReservationCategoryHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> MobileNo: </label>
                                            <input placeholder="MobileNo" name="mobileno" className="form-control" 
                                                value={this.state.mobileno} onChange={this.changeMobileNoHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> EmailId: </label>
                                            <input placeholder="EmailId" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Address1: </label>
                                            <input placeholder="Address1" name="address1" className="form-control" 
                                                value={this.state.address1} onChange={this.changeAddress1Handler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Address2: </label>
                                            <input placeholder="Address2" name="address2" className="form-control" 
                                                value={this.state.address2} onChange={this.changeAddress2Handler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Mandal: </label>
                                            <input placeholder="Mandal" name="mandal" className="form-control" 
                                                value={this.state.mandal} onChange={this.changeMandalHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> District: </label>
                                            <input placeholder="District" name="district" className="form-control" 
                                                value={this.state.district} onChange={this.changeDistrictHandler}/>
                                        </div>
                                    
                                        <div className = "form-group">
                                            <label> Pincode: </label>
                                            <input placeholder="Pincode" name="pincode" className="form-control" 
                                                value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                        </div>

                                        

                                        <div className = "form-group">
                                            <label> CastedVote: </label>
                                            <input placeholder="CastedVote" name="castedVote" className="form-control" 
                                                value={this.state.castedVote} onChange={this.changeCastedVoteHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateVoter}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
                            
    }

}

export default CreateVoterComponent