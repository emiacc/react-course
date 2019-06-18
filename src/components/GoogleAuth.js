import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({ 
        clientId: '120452033489-2b2hcb0e77urn34ucq5nsch0opjdi1a0.apps.googleusercontent.com', 
        scope: 'email' 
      }).then(() => { 
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) return null;
    else if (this.state.isSignedIn) return(
      <button className="ui red google button"><i className="google icon" />Sing Out</button>
    );
    else return (
      <button className="ui red google button"><i className="google icon" />Sing In with Google</button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;