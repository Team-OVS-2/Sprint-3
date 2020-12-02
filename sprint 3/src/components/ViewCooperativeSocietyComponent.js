import React, { Component } from 'react'
import CooperativeSocietyService from '../services/CooperativeSocietyService'

export class ViewCooperativeSocietyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            societyId: this.props.match.params.societyId,
            society: {}
        }
    }

    componentDidMount(){
        CooperativeSocietyService.getCooperativeSocietyById(this.state.societyId).then( res => {
            this.setState({society: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View CooperativeSociety Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> CooperativeSociety Society Id: </label>
                            <div> { this.state.society.societyId }</div>
                        </div>
                    <div className = "row">
                            <label> CooperativeSociety Society Name: </label>
                            <div> { this.state.society.societyName }</div>
                        </div>
                        <div className = "row">
                            <label> CooperativeSociety Head Of Society: </label>
                            <div> { this.state.society.headOfSociety }</div>
                        </div>
                        <div className = "row">
                            <label> CooperativeSociety Village: </label>
                            <div> { this.state.society.village }</div>
                        </div>
                        <div className = "row">
                            <label> CooperativeSociety Mandal: </label>
                            <div> { this.state.society.mandal }</div>
                        </div>
                        <div className = "row">
                            <label> CooperativeSociety District: </label>
                            <div> { this.state.society.district}</div>
                        </div>
                        <div className = "row">
                            <label> CooperativeSociety Pincode: </label>
                            <div> { this.state.society.pincode}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCooperativeSocietyComponent