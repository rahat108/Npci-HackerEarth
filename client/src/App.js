import React, { Component } from 'react';
import './App.css';
import Login from './user/login/Login';
import LoginHome from './LoginHome';
import  Signup  from './user/signup/Signup';
import  Profile  from './user/profile/Profile';
import AppHeader from './common/AppHeader';
import { ACCESS_TOKEN } from './constants';
import { getCurrentUser } from './util/APIUtils';
import { Route, withRouter,Switch} from 'react-router-dom';
import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });     
  }
  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
      this.props.history.push(`/accessHome/${response.username}`);
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  componentWillMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/login", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: 'Npci',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Npci',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    
  }
  render() {
    return (
      
      <Layout className="app-container"> 
            <AppHeader isAuthenticated={this.state.isAuthenticated} 
              currentUser={this.state.currentUser} 
              onLogout={this.handleLogout} />
              <head>
              <title>Npci App</title>
                </head>  
         <Content className="app-content">
            <div className="container">
              <Switch>                  
              <Route path="/accessHome/:username" 
                  render={(props) => <LoginHome isAuthenticated={this.state.isAuthenticated} username={this.state.currentUser} {...props}  />}>
                </Route>
                <Route path="/login" 
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/users/:username" 
                  render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                </Route>                 
              </Switch>
            </div>
            <div class="footer">
              <p>Created By Rahat Gupta</p>
            </div>
          
        </Content>
        </Layout>
    );
  }
}

export default withRouter(App);
