import axios from 'axios';

const NCANDIDATE_API_BASE_URL ="http://localhost:8080/candidate"
class NominatedCandidateService{
    getNominatedCandidates()
    {
        return axios.get(NCANDIDATE_API_BASE_URL);
    }
    createNominatedCandidate(candidate)
    {
        return axios.post(NCANDIDATE_API_BASE_URL,candidate);
    }
    getNominatedCandidateById(candidateId)
    {
        return axios.get(NCANDIDATE_API_BASE_URL + '/' +candidateId);
    }
    updateNominatedCandidate(candidate,candidateId)
    {
        return axios.put(NCANDIDATE_API_BASE_URL + '/' + candidateId , candidate);
    }
    deleteNominatedCandidate(candidateId)
    {
        return axios.delete(NCANDIDATE_API_BASE_URL + '/' +candidateId);
    }


}
export default new NominatedCandidateService()