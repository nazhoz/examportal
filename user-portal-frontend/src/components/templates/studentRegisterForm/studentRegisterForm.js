import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { registerStudentAction } from "../../../redux/actions/registerStudentAction";
import { connect } from "react-redux";
import { setAlert } from "../../../redux/actions/alertAction";
import "./StudentRegisterForm.css"

const useStyles = ()=>({
  inputfield : {
    display:'block',
    margin :'20px'
  },
  btn : {
    margin : '0px 40px'
  },
  formClass : {
    margin:'20px',
    display: 'inline-block',
    textAlign : 'center',
    border : '1px solid black',
    borderRadius: '10px',
    padding : '20px'
  },
  
  formTitle:{
    fontSize: '1.7em'
  }
})

class StudentRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      email : "",
      password : "",
      confirmPassword : ""
    }
  }

  usernameInputHandler = (event) => {
    this.setState({
      ...this.state,
      username : event.target.value
    });
  }

  emailInputHandler = (event) => {
    this.setState({
      ...this.state,
      email : event.target.value
    });
  }

  passwordInputHandler = (event) => {
    this.setState({
      ...this.state,
      password : event.target.value
    });
  }

  confirmpasswordInputHandler = (event) => {
    this.setState({
      ...this.state,
      confirmPassword : event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.confirmPassword !== this.state.password) {
      this.props.setAlert({
        isAlert:false,
        type:"error",
        title:'Invalid Input',
        message : 'Confirm Password does not match',
      })  
      return;
    }
    this.props.registerStudentAction({
      username : this.state.username,
      email : this.state.email,
      password : this.state.password
    });
  }

  render() {
    return (
      // <form className={this.props.classes.formClass} onSubmit={(event)=>(this.handleSubmit(event))}>
      //   <div className={this.props.classes.formTitle} color="primary">Register</div>
      //   <TextField
      //     variant='outlined'
      //     color="primary"
      //     className={this.props.classes.inputfield}
      //     label="Username"
      //     placeholder='enter username'
      //     type='text'
      //     error_text=''
      //     value={this.state.username}
      //     onChange={(event)=>(this.usernameInputHandler(event))}
      //     required
      //   />
      //   <TextField
      //     variant='outlined'
      //     color="primary"
      //     className={this.props.classes.inputfield}
      //     label="Email"
      //     placeholder='enter email'
      //     type='email'
      //     error_text=''
      //     value={this.state.email}
      //     onChange={(event)=>(this.emailInputHandler(event))}
      //     required
      //   />
      //   <TextField
      //     variant='outlined'
      //     color="primary"
      //     label="Password"
      //     className={this.props.classes.inputfield}
      //     placeholder='enter password'
      //     type='password'
      //     error_text=''
      //     value={this.state.password}
      //     onChange={(event)=>(this.passwordInputHandler(event))}
      //     required
      //   />
      //   <TextField
      //     variant='outlined'
      //     color="primary"
      //     label="Confirm Password"
      //     className={this.props.classes.inputfield}
      //     placeholder='enter password again'
      //     type='password'
      //     error_text=''
      //     value={this.state.confirmPassword}
      //     onChange={(event)=>(this.confirmpasswordInputHandler(event))}
      //     required
      //   />
      //   <Button 
      //     variant='contained'
      //     color="primary"
      //     type='submit'
      //     className={this.props.classes.btn}
      //   >
      //     Register
      //   </Button>
      // </form>

      <div className="register-form-container">
            <div className="register-form-head">
              <span className="register-title">Student Registration</span>
            </div>

            <form className="register-form" onSubmit={(event)=>(this.handleSubmit(event))}>
              <div className="register-input-group">
                {/* <label for="username" >Username</label> */}
                <input
                  type="text"
                  email="username"
                  id="register-username"
                  placeholder="Username"
                  error_text=""
                  value={this.state.username}
                  onChange={(event)=>(this.usernameInputHandler(event))}
                />
              </div>
              <div className="register-input-group">
                {/* <label for="password">Password</label> */}
                <input
                  type="email"
                  name="Email ID"
                  id="register-password"
                  placeholder="Email ID"
                  error_text=""
                  value={this.state.email}
                  onChange={(event)=>(this.emailInputHandler(event))}
                />
              </div>
              <div className="register-input-group">
                {/* <label for="password">Password</label> */}
                <input
                  type="password"
                  name="password"
                  id="register-password"
                  placeholder="Password"
                  error_text=""
                  value={this.state.password}
                  onChange={(event)=>(this.passwordInputHandler(event))}
                />
              </div>
              <div className="register-input-group">
                {/* <label for="password">Password</label> */}
                <input
                  type="text"
                  name="password"
                  id="register-password"
                  placeholder="Confirm Password"
                  error_text=""
                  value={this.state.confirmPassword}
                  onChange={(event)=>(this.confirmpasswordInputHandler(event))}
                />
              </div>
              
              <button className="register-sign">Register</button>
            </form>
          </div>
    )
  }
}

const mapStatetoProps = state => ({

})

export default withStyles(useStyles)(connect(mapStatetoProps,{
  registerStudentAction,
  setAlert
})(StudentRegisterForm));