import axios from 'axios';

const EOFFICER_API_BASE_URL = "http://localhost:8080/officer";

class EOfficerService {

    getElectionOfficers(){
        return axios.get(EOFFICER_API_BASE_URL);
    }

    createElectionOfficer(officer){
        return axios.post(EOFFICER_API_BASE_URL, officer);
    }

    getElectionOfficerById(officerId){
        return axios.get(EOFFICER_API_BASE_URL + '/' +  officerId);
    }

    updateElectionOfficer(officer,  officerId){
        return axios.put(EOFFICER_API_BASE_URL + '/' +  officerId,  officer);
    }

    deleteElectionOfficer(officerId){
        return axios.delete(EOFFICER_API_BASE_URL + '/' +  officerId);
    }
}

export default new EOfficerService();