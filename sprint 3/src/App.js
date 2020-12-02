import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import './App.css';
import ListAdmin from './components/ListAdmin';
import AddAdmin from './components/AddAdmin';
import ViewAdmin from './components/ViewAdmin';
import ListCooperativeSocietyComponent from './components/ListCooperativeSocietyComponent';
import CreateCooperativeSocietyComponent from './components/CreateCooperativeSocietyComponent';
import ViewCooperativeSocietyComponent from './components/ViewCooperativeSocietyComponent';
import ListEOfficerComponent from './components/ListEOfficerComponent';
import CreateEOfficerComponent from './components/CreateEOfficerComponent';
import ViewEOfficerComponent from './components/ViewEOfficerComponent';
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListNominatedCandidateComponent from './components/ListNominatedCandidateComponent';
import ViewNominatedCandidateComponent from './components/ViewNominatedCandidateComponent';
import CreateNominatedCandidateComponent from './components/CreateNominatedCandidateComponent';
import ViewVoterComponent from './components/ViewVoterComponent';
import ListVoterComponent from './components/ListVoterComponent';
import CreateVoterComponent from './components/CreateVoterComponent';import UserService from './services/UserService';
class App extends Component {
  render() {
    return (
      <div className='login'>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/user" className="navbar-brand">
            Online Voting System
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/admins"} className="nav-link">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/societies"} className="nav-link">
              CooperativeSociety
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/officers"} className="nav-link">
              Election Officers
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/candidates"} className="nav-link">
              Nominated Candidate
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
              Users
              </Link>
            </li>
            </div>
            
  </nav>
 
  
        
        
        
        <div className="container">
          <Router>
          <Switch>
           
            <Route exact path="/add" component={RegisterUser} />
            <Route path="/user" component={LoginUser} />
        
              {/* <Route exact path  = "/"  component = {ListAdmin}></Route> */}
              <Route path = "/admins" component = {ListAdmin}></Route>
              <Route path = "/add-admindetails/:id" component = {AddAdmin}></Route>
              <Route path = "/view-admindetails/:id" component = {ViewAdmin}></Route> 
              
               {/* <Route path = "/" exact component = {ListCooperativeSocietyComponent}></Route> */}
               <Route path = "/societies" component = {ListCooperativeSocietyComponent}></Route>
               <Route path = "/add-society/:societyId" component = {CreateCooperativeSocietyComponent}></Route>   
                <Route path = "/view-society/:societyId" component = {ViewCooperativeSocietyComponent}></Route> 

                {/* <Route path = "/" exact component = {ListVoterComponent}></Route>  */}
            <Route path = "/voters" component = {ListVoterComponent}></Route>
               <Route path = "/add-reg_society/:voterId" component = {CreateVoterComponent}></Route>   
                <Route path = "/view-reg_society/:voterId" component = {ViewVoterComponent}></Route> 
            
              {/* <Route path = "/" exact component = {ListEOfficerComponent}></Route> */}
              <Route path = "/officers" component = {ListEOfficerComponent}></Route>
              <Route path = "/add-officer/:officerId" component = {CreateEOfficerComponent}></Route>
              <Route path = "/view-officer/:officerId" component = {ViewEOfficerComponent}></Route>


              {/* <Route path = "/" exact component = {ListNominatedCandidateComponent}></Route> */}
              <Route path = "/candidates" component = {ListNominatedCandidateComponent}></Route>
              <Route path = "/add-candidate/:candidateId" component = {CreateNominatedCandidateComponent}></Route>
              <Route path = "/view-candidate/:candidateId" component = {ViewNominatedCandidateComponent}></Route>
            
            
            {/* <Route exact path = "/"  component = {ListUserComponent}></Route> */}
            <Route path = "/users" component = {ListUserComponent}></Route>
            <Route path = "/add-userdetails/:userId" component = {CreateUserComponent}></Route>
            <Route path = "/view-userdetails/:userId" component = {ViewUserComponent}></Route> 
            </Switch>
            </Router>  
            {/* <Navbar /> */}
            
            {/* <Route path="/home" component={HomeComponent}/>
            <Route path="/admindetails" component={AdminComponent}/>
            <Route path="/society" component={CooperativeSociety}/>
            <Route path="/officer" component={ElectionOfficer} />
            <Route path="/user" component={User} /> */}
            
        </div>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;