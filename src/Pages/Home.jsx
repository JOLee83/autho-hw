import React, { Component } from 'react';
// import Auth from '../Auth/auth';

// const auth = new Auth();

class Home extends Component {
  state = {
    profile: {}
  }
  login = () => {
    this.props.auth.login();
  }
  logout = () => {
    this.props.auth.logout();
  }
  componentDidMount() {
    console.log(this.props.auth.isAuthenticated())
    this.props.auth.getProfile((err, profile) => {
      this.setState({ profile, err })
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
        <button onClick={this.logout}>Logout</button>
        <div>
          Name: {this.state.profile.given_name}
          <img src={this.state.profile.picture} />
          Id: {this.state.profile.sub}
        </div>
      </div>
    );
  }
}

export default Home;
