import axios from 'axios'

import http from "../http-common";

class UserService {
  getUsers() {
    return http.get("/");
  }

  createUser(data) {
    return http.post("/register", data);
  }

  updateUser(data, id) {
    return http.put(`/updateDetails/${id}`, data);
  }

  deleteUser(id) {
    return http.delete(`/Delete/${id}`);
  }

  getUserById(id){
    return http.get(`/${id}`);
  }
  validateUser(email,password){
    return http.get(`/LoginValidation/${email}/${password}`);
  }

  
}

export default new UserService();