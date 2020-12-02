import React, { Component } from 'react'
import CooperativeSocietyService from '../services/CooperativeSocietyService'

class ListCooperativeSocietyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                society: []
        }
        this.addCooperativeSociety = this.addCooperativeSociety.bind(this);
        this.editCooperativeSociety = this.editCooperativeSociety.bind(this);
        this.deleteCooperativeSociety = this.deleteCooperativeSociety.bind(this);
    }

    deleteCooperativeSociety(societyId){
        CooperativeSocietyService.deleteCooperativeSociety(societyId).then( res => {
            this.setState({society: this.state.society.filter(societies => societies.societyId !== societyId)});
        });
    }
    viewCooperativeSociety(societyId){
        this.props.history.push(`/view-society/${societyId}`);
    }
    editCooperativeSociety(societyId){
        this.props.history.push(`/add-society/${societyId}`);
    }

    componentDidMount(){
        CooperativeSocietyService.getCooperativeSocieties().then((res) => {
            this.setState({society: res.data});
        });
    }

    addCooperativeSociety(){
        this.props.history.push('/add-society/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">CooperativeSociety List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCooperativeSociety}> Add CooperativeSociety</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> CooperativeSociety Society Name</th>
                                    <th> CooperativeSociety Head Of Society</th>
                                    <th> CooperativeSociety Village</th>
                                    <th> CooperativeSociety Mandal</th>
                                    <th> CooperativeSociety District</th>
                                    <th> CooperativeSociety Pincode</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.society.map(
                                        societies=> 
                                        <tr key = {societies.societyId}>
                                             <td> {societies.societyName} </td>   
                                             <td> {societies.headOfSociety} </td>   
                                             <td> {societies.village}</td>
                                             <td> {societies.mandal}</td>
                                             <td> {societies.district}</td>
                                             <td> {societies.pincode}</td>
                                             <td>
                                                 <button onClick={ () => this.editCooperativeSociety(societies.societyId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCooperativeSociety(societies.societyId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCooperativeSociety(societies.societyId)} className="btn btn-info">View </button>
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

export default ListCooperativeSocietyComponent