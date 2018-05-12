import React from "react";
import { Form, Button } from "semantic-ui-React";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import PropTypes from 'prop-types';

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

  /*  For this type of thick arrow function the function is automatically bound (bind) to this component
      onChange = e =>
        this.setState({
          data: { ...this.state.data, [e.target.name]: e.target.value }
      });
    */

    onChange(e){

      //debugger;

      /* OLD STYLE
      var data = {...this.state.data};      

      if([e.target.name] == 'email'){
        data.email = e.target.value;
        this.setState({ 
          data
        });    
      }

      if([e.target.name] == 'password'){
        data.password = e.target.value;
        this.setState({ 
          data
        });    
      }
      */

      //data has 'email' and 'password' members, in the following spread operator
      //if e.target.name is 'email' then the data.email is assigned to e.target.value
      //and if e.target.name is 'password' then the data.password is assigned to e.target.value
      this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }      
    })
  }

    onSubmit () {
      
      const errors = this.validate(this.state.data);
      this.setState({errors});

      if(Object.keys(errors).length === 0){
        this.props.submit(this.state.data);
      }
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
          <Form.Field error={!!errors.email}>
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value= {this.state.data.email} 
              onChange={this.onChange}
            />
            <br/>
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


LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};


export default LoginForm;
