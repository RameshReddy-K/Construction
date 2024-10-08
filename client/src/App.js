import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import UserRegistrationPage from './pages/UserRegistrationPage';
import ContractorRegistrationPage from './pages/ContractorRegistrationPage';
import AdminHome from './pages/AdminHome';
import ContractorHome from './pages/ContractorHome';
import UserHome from './pages/UserHome';
import './styles/App.css'; // Optional: Import your CSS styles

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/user-registration" component={UserRegistrationPage} />
          <Route path="/contractor-registration" component={ContractorRegistrationPage} />
          <Route path="/admin-home" component={AdminHome} />
          <Route path="/contractor-home" component={ContractorHome} />
          <Route path="/user-home" component={UserHome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
