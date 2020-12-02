import React, { Component } from 'react'
import CooperativeSocietyService from '../services/CooperativeSocietyService';

class CreateCooperativeSocietyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            societyId: this.props.match.params.societyId,
            societyName: '',
            headOfSociety: '',
            village: '',
            mandal: '',
            district:'',
            pincode:''
        }
        this.changeSocietyNameHandler = this.changeSocietyNameHandler.bind(this);
        this.changeHeadOfSocietyHandler = this.changeHeadOfSocietyHandler.bind(this);
        this.changeVillageHandler = this.changeVillageHandler.bind(this);
        this.changeMandalHandler = this.changeMandalHandler.bind(this);
        this.changeDistrictHandler = this.changeDistrictHandler.bind(this);
        this.changePincodeHandler = this.changePincodeHandler.bind(this);
        this.saveOrUpdateCooperativeSociety = this.saveOrUpdateCooperativeSociety.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.societyId === '_add'){
            return
        }else{
            CooperativeSocietyService.getCooperativeSocietyById(this.state.societyId).then( (res) =>{
                let societies = res.data;
                this.setState({societyName: societies.societyName,
                    headOfSociety: societies.headOfSociety,
                    village: societies.village,
                    mandal : societies.mandal,
                    district : societies.district,
                    pincode: societies.pincode
                });
            });
        }        
    }
    saveOrUpdateCooperativeSociety = (e) => {
        e.preventDefault();
        let societies = {societyName: this.state.societyName, headOfSociety: this.state.headOfSociety, village: this.state.village, mandal: this.state.mandal,  district: this.state.district, pincode: this.state.pincode };
        console.log('societies=> ' + JSON.stringify(societies));

        // step 5
        if(this.state.societyId === '_add'){
            CooperativeSocietyService.createCooperativeSociety(societies).then(res =>{
                this.props.history.push('/society');
            });
        }else{
            CooperativeSocietyService.updateCooperativeSociety(societies, this.state.societyId).then( res => {
                this.props.history.push('/society');
            });
        }
    }
    changeSocietyNameHandler= (event) => {
        this.setState({societyName: event.target.value});
    }
    
    changeHeadOfSocietyHandler= (event) => {
        this.setState({headOfSociety: event.target.value});
    }

    changeVillageHandler= (event) => {
        this.setState({village: event.target.value});
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

    cancel(){
        this.props.history.push('/society');
    }

    getTitle(){
        if(this.state.societyId === '_add'){
            return <h3 className="text-center">Add CooperativeSociety</h3>
        }else{
            return <h3 className="text-center">Udate CooperativeSociety</h3>
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
                                            <label> Society Name: </label>
                                            <input placeholder="SocietyName" name="societyName" className="form-control" 
                                                value={this.state.societyName} onChange={this.changeSocietyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Head Of Society: </label>
                                            <input placeholder="HeadOfSociety" name="headOfSociety" className="form-control" 
                                                value={this.state.headOfSociety} onChange={this.changeHeadOfSocietyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Village: </label>
                                            <input placeholder="Village" name="village" className="form-control" 
                                                value={this.state.village} onChange={this.changeVillageHandler}/>
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
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCooperativeSociety}>Save</button>
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

export default CreateCooperativeSocietyComponent