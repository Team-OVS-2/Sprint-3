import React, { Component } from 'react';
import NominatedCandidateService from '../services/NominatedCandidateService';

class ListNominatedCandidateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                candidate: []
        }
        this.addNominatedCandidate = this.addNominatedCandidate.bind(this);
        this.editNominatedCandidate = this.editNominatedCandidate.bind(this);
        this.deleteNominatedCandidate = this.deleteNominatedCandidate.bind(this);
    }
    deleteNominatedCandidate(candidateId){
        NominatedCandidateService.deleteNominatedCandidate(candidateId).then( res => {
            this.setState({candidate: this.state.candidate.filter(candidates => candidates.candidateId !== candidateId)});
        });
    }
    viewNominatedCandidate(candidateId){
        this.props.history.push(`/view-candidate/${candidateId}`);
    }
    editNominatedCandidate(candidateId){
        this.props.history.push(`/add-candidate/${candidateId}`);
    }
    componentDidMount(){
        NominatedCandidateService.getNominatedCandidates().then((res) => {
            this.setState({candidate: res.data});
        });
    }
   
    addNominatedCandidate(){
        this.props.history.push('/add-candidate/_add')
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">NominatedCandidates List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addNominatedCandidate}> Add NominatedCandidate</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                            
                                    <th> NominatedCandidate NominationFormNo</th>
                                    <th> NominatedCandidate Society_Voter</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    this.state.candidate.map(
                                        candidates => 
                                        <tr key = {candidates.candidateId}>
                                          
                                             <td> {candidates.nominationFormNo} </td>   
                                             <td> {candidates.society_Voter} </td>   
                                             
                                                 <button onClick={ () => this.editNominatedCandidate(candidates.candidateId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNominatedCandidate(candidates.candidateId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewNominatedCandidate(candidates.candidateId)} className="btn btn-info">View </button>
                                             
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

export default ListNominatedCandidateComponent
                            