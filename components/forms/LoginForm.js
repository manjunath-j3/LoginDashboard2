import React from "react";
import { Form, Button } from "semantic-ui-React";
import Validator from "validator";
import InlineError from "../messages/InlineError"

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
                    data: {
                      email: '',
                      password: ''
                    },
                    loading: false,
                    errors: {}
                };
  }

  /* 
  state = {
        data: {
                email: "",
                password: ""
              },
        loading: false,
        errors: {}
  };
  */ 

  /*
      onChange = e =>
        this.setState({
          data: { ...this.state.data, [e.target.name]: e.target.value }
      });
    */

  //Alternative to the above.
    onChange(e){
      
      this.setState({
        data : {[e.target.name]: e.target.value}
      });

    }

    onSubmit () {
      
      const errors = this.validate(this.state.data);
      this.setState({errors});      
    };

    validate(data){
      const errors = {}
      
      //isEmail will assert if undefined is passed instead of string only
      if(data.email != undefined && !Validator.isEmail(data.email)) 
          errors.email = "Invalid email!";

      if(!data.password) 
          errors.password = "Password cannot be empty!";

      return errors;
    }


  render() {

    const { data, errors } = this.state;

    return(
        <Form onSubmit = {this.onSubmit}>
          <Form.Field>
            <label htmlFor="email"> Email </label>
            <input
              type='email'
              id="email"
              name="email"
              placeholder="example@email.com"
              value= {data.email} 
              onChange={this.onChange}
            />
            
          {errors.email && <InlineError text={errors.email}/>}

          </Form.Field>

          <br/>

          <Form.Field>
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Make it secure"
              value={this.state.data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password}/>}
          </Form.Field>

          <br/>

          <Button primary> Login </Button>

          <br/>
        </Form>
      );
  }
}

export default LoginForm;
