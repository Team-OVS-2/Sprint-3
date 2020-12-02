import React, { Component } from 'react';
import NominatedCandidateService from '../services/NominatedCandidateService';

class CreateNominatedCandidateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            candidateId: this.props.match.params.candidateId,
            nominationFormNo: '',
            society_Voter: {
                voterId : '',
voterIdCardNo :'',
firstName : '',
lastName : '',
gender : '',
password : '',
reservationCategory :'',
mobileno : '',
emailId : '',
address1 :'',
address2 : '',
mandal : '',
district : '',
pincode : '',
society : {
    societyId :'',
    societyName : '',
    headOfSociety : '',
    village : '',
    mandal : '',
    district : '',
    pincode : ''

},
castedVote : ''

            }
            
            
        }
        this.changeNominationFormNoHandler = this.changeNominationFormNoHandler.bind(this);
        this.changeSociety_VoterHandler = this.changeSociety_VoterHandler.bind(this);
        this.changeSocietyHandler=this.changeSocietyHandler.bind(this);
    }

    //step 3
    componentDidMount(){

        // step 4
        if(this.state.candidateId === '_add'){
            return
        }else{
            NominatedCandidateService.getcandidateIdById(this.state.candidateId).then( (res) =>{
                let candidates = res.data;
                this.setState({nominationFormNo: candidates.nominationFormNo,
                    society_Voter: candidates.society_Voter,society: candidates.society
                   
                });
            });
        }        
    }
    saveOrUpdateNominatedCandidate = (e) => {
        e.preventDefault();
        let candidates = {nominationFormNo: this.state.nominationFormNo, society_Voter: this.state.society_Voter,society: this.state.society}; 
        console.log('candidates => ' + JSON.stringify(candidates));
         // step 5
         if(this.state.candidateId === '_add'){
            NominatedCandidateService.createNominatedCandidate(candidates).then(res =>{
                this.props.history.push('/candidate');
            });
        }else{
            NominatedCandidateService.updateNominatedCandidate(candidates, this.state.candidateId).then( res => {
                this.props.history.push('/candidate');
            });
        }
    }

    changeNominationFormNoHandler= (event) => {
        this.setState({nominationFormNo: event.target.value});
    }
    changeSociety_VoterHandler= (event) => {
        this.setState({society_Voter: event.target.value});
        // this.setState(Object.assign(this.state.reg_society,{candidateId:event.target.value}));
    }
    changeSocietyHandler= (event) => {
        this.setState({society: event.target.value});
    }
    cancel(){
        this.props.history.push('/candidate');
    }

    getTitle(){
        if(this.state.candidateId === '_add'){
            return <h3 className="text-center">Add NominatedCandidate</h3>
        }else{
            return <h3 className="text-center">Update NominatedCandidate</h3>
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
                                            <label> NominationFormNo: </label>
                                            <input placeholder="NominationFormNo" name="nominationFormNo" className="form-control" 
                                                value={this.state.nominationFormNo} onChange={this.changeNominationFormNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Society_Voter: </label>
                                            <input placeholder="Society_Voter" name="society_Voter" className="form-control" 
                                                value={this.state.society_Voter} onChange={this.changeSociety_VoterHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateNominatedCandidate}>Save</button>
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

export default CreateNominatedCandidateComponent
