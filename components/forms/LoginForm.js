import React from "react";
import { Form, Button } from "semantic-ui-React";
import Validator from "validator";

class LoginForm extends React.Component {
  state : {
        data: {
                email: "",
                password: ""
              },
        loading: false,
        errors: {}
  };

  /*
      onChange = e =>
        this.setState({
          data: { ...this.state.data, [e.target.name]: e.target.value }
      });
    */

  //Alternative to the above.
    onChange(e){
      this.setState({
        data:{[e.target.name]: e.target.value}
      })
    }

    onSubmit () {
      const errors = this.validate(this.state.data);
      this.setState({errors});
    };

    validate(data){
      const errors = {}

      if(Validator.isEmail(data.email)) errors.email = "Invalid email!";

      if(!data.password) errors.password = "Password cannot be empty!";

      return errors;
    }


  render() {

    //const { data } = this.state; //enabling this is causing the LoginPage to not render.

    return(
        <Form onSubmit = {this.onSubmit}>
          <Form.Field>
            <label htmlFor="email"> Email </label>
            <input
              type='email'
              id="email"
              name="email"
              placeholder="example@email.com"
              //value= {data.email} //enabling this is causing the LoginPage to not render.
              onChange={this.onChange}
            />
          
          </Form.Field>

          <br/>

          <Form.Field>
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Make it secure"
              //value={this.state.data.password} //enabling this is causing the LoginPage to not render.
              onChange={this.onChange}
            />
          </Form.Field>

          <br/>

          <Button primary> Login </Button>

          <br/>
        </Form>
      );
  }
}

export default LoginForm;
