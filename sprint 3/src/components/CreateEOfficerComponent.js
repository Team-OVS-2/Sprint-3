import React, { Component } from 'react'
import EOfficerService from '../services/EOfficerService';

class CreateEOfficerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            officerId: this.props.match.params.officerId,
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            gender: '',
            mobileno: '',
            address1: '',
            address2: '',
            district: '',
            pincode: ''
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeMobilenoHandler = this.changeMobilenoHandler.bind(this);
        this.changeAddress1Handler = this.changeAddress1Handler.bind(this);
        this.changeAddress2Handler = this.changeAddress2Handler.bind(this);
        this.changeDistrictHandler = this.changeDistrictHandler.bind(this);
        this.changePincodeHandler = this.changePincodeHandler.bind(this);
        this.saveOrUpdateElectionOfficer = this.saveOrUpdateElectionOfficer.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.officerId === '_add'){
            return
        }else{
            EOfficerService.getElectionOfficerById(this.state.officerId).then( (res) =>{
                let officers = res.data;
                this.setState({
                
                    firstName: officers.firstName,
                    lastName: officers.lastName,
                    emailId: officers.emailId,
                    password: officers.password,
                    gender: officers.gender,
                    mobileno: officers.mobileno,
                    address1: officers.address1,
                    address2: officers.address2,
                    district: officers.district,
                    pincode: officers.pincode
                });
            });
        }        
    }
    saveOrUpdateElectionOfficer = (e) => {
        e.preventDefault();
        let officers = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, password: this.state.password,
                       gender: this.state.gender, mobileno: this.state.mobileno, address1: this.state.address1, address2: this.state.address2,
                       district: this.state.district, pincode: this.state.pincode };
        console.log('officers => ' + JSON.stringify(officers));

        // step 5
        if(this.state.officerId === '_add'){
            EOfficerService.createElectionOfficer(officers).then(res =>{
                this.props.history.push('/officer');
            });
        }else{
            EOfficerService.updateElectionOfficer(officers, this.state.officerId).then( res => {
                this.props.history.push('/officer');
            });
        }
    }

   
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    changeMobilenoHandler= (event) => {
        this.setState({mobileno: event.target.value});
    }

    changeAddress1Handler= (event) => {
        this.setState({address1: event.target.value});
    }

    changeAddress2Handler= (event) => {
        this.setState({address2: event.target.value});
    }

    changeDistrictHandler= (event) => {
        this.setState({district: event.target.value});
    }

    changePincodeHandler= (event) => {
        this.setState({pincode: event.target.value});
    }

    cancel(){
        this.props.history.push('/officer');
    }

    getTitle(){
        if(this.state.officerId === '_add'){
            return <h3 className="text-center">Add Election Officer</h3>
        }else{
            return <h3 className="text-center">Update Election Officer</h3>
        }
    }
    render() {
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
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile No: </label>
                                            <input placeholder="Mobile No" name="mobileno" className="form-control" 
                                                value={this.state.mobileno} onChange={this.changeMobilenoHandler}/>
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
                                            <label> District: </label>
                                            <input placeholder="District" name="district" className="form-control" 
                                                value={this.state.district} onChange={this.changeDistrictHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Pincode: </label>
                                            <input placeholder="Pincode" name="pincode" className="form-control" 
                                                value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                        </div>
                                          
                                        <button className="btn btn-success" onClick={this.saveOrUpdateElectionOfficer}>Save</button>
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

export default CreateEOfficerComponent