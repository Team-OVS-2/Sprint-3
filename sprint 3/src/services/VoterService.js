import axios from 'axios';

const VOTER_API_BASE_URL = "http://localhost:8080/reg_society";

class VoterService {

    getVoters(){
        return axios.get(VOTER_API_BASE_URL);
    }

    createVoter(voter){
        return axios.post(VOTER_API_BASE_URL, voter);
    }

    getVoterById(voterId){
        return axios.get(VOTER_API_BASE_URL + '/' + voterId);
    }

    updateVoter(voter, voterId){
        return axios.put(VOTER_API_BASE_URL + '/' + voter,voterId);
    }

    deleteVoter(voterId){
        return axios.delete(VOTER_API_BASE_URL + '/' + voterId);
    }
}

export default new VoterService()