import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/admindetails";

class AdminService {

    getAdmins(){
        return axios.get(ADMIN_API_BASE_URL);
    }

    updateAdmin(id,admindetails){
        return axios.put(ADMIN_API_BASE_URL + '/' + admindetails,id);
    }

    getAdminById(id){
        return axios.get(ADMIN_API_BASE_URL + '/' + id);
    }

 addAdmin(admin){
    return axios.post(ADMIN_API_BASE_URL,admin);
}
 
    deleteAdmin(id){
        return axios.delete(ADMIN_API_BASE_URL + '/' + id);
    }
}

export default new AdminService();