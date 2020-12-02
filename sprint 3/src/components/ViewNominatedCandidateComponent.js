import React, { Component } from 'react';
import NominatedCandidateService from '../services/NominatedCandidateService';

class ViewNominatedCandidateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                candidateId: this.props.match.params.candidateId,
                candidate: {}
        }
    }

    componentDidMount(){
        NominatedCandidateService.getNominatedCandidateById(this.state.candidateId).then( res => {
            this.setState({candidate: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View NominatedCandidate Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> NominatedCandidate NominationFormNo: </label>
                            <div> { this.state.candidate.nominationFormNo }</div>
                        </div>
                        <div className = "row">
                            <label> NominatedCandidate Society_Voter: </label>
                            <div> { this.state.candidate.society_Voter }</div>
                        </div>
                        </div>
                    </div>

                </div>
        
        )
    }
}

export default ViewNominatedCandidateComponent
