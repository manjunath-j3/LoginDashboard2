import React from "react";
import LoginForm from "../forms/LoginForm";

/* const LoginPage = () => (
  <div>
    <h1> LoginPage </h1>
    <LoginForm/>
  </div>
); */

class LoginPage extends React.Component {

  submit(data){
      console.log(data);
  };

  render(){
    return(
        <div>
          <h1> LoginPage </h1>
          <LoginForm submit={this.submit}/>
        </div>
      );
    }   
}

export default LoginPage;
