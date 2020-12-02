import axios from 'axios';

const OVS_API_BASE_URL = "http://localhost:8080/society";

class CooperativeSocietyService {

    getCooperativeSocieties(){
        return axios.get(OVS_API_BASE_URL);
    }

    createCooperativeSociety(society){
        return axios.post(OVS_API_BASE_URL, society);
    }

    getCooperativeSocietyById(societyId){
        return axios.get(OVS_API_BASE_URL + '/' + societyId);
    }

    updateCooperativeSociety(society, societyId){
        return axios.put(OVS_API_BASE_URL + '/' + societyId, society);
    }

    deleteCooperativeSociety(societyId){
        return axios.delete(OVS_API_BASE_URL + '/' + societyId);
    }
}

export default new CooperativeSocietyService();