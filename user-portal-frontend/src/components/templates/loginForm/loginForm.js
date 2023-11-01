import React from "react";
import TextField from "@material-ui/core/TextField";
import "./loginForm.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { loginRequestAction } from "../../../redux/actions/loginAction";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const useStyles = () => ({
  inputfield: {
    display: "block",
    margin: "20px",
  },
  loginbtn: {
    margin: "0px 40px",
  },
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.state = {
      gotoStudentRegister: false,
    };
    this.state ={
      gotoForgotPassword : false
    }
  }

  
  onStudentRegisterClick() {
    this.setState({
      ...this.state,
      gotoStudentRegister: true,
    });
  }
  onForgotPasswordClick(){
    this.setState({
      ...this.state,
      gotoForgotPassword : true,
    })
  }
  emailInputHandler = (event) => {
    this.setState({
      ...this.state,
      email: event.target.value,
    });
  };

  passwordInputHandler = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginRequestAction(this.state);
  }

  render() {
    if (this.state.gotoStudentRegister) {
      return <Navigate to="/studentRegisterPage" />;
    }
    else if (this.state.gotoForgotPassword){
      return <Navigate to="/ForgotPassword"/>;
    }
    else {
      return (
        <div
          className="students-login-forms"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <div className="form-container">
            <div className="form-head">
              <span className="Titles">Online Examination</span>
              <span className="title">Student Login</span>
            </div>

            <form className="form">
              <div className="input-group">
                {/* <label for="username" >Username</label> */}
                <input
                  type="text"
                  email="username"
                  id="username"
                  placeholder="Enter Your Email"
                  error_text=""
                  value={this.state.email}
                  onChange={(event) => this.emailInputHandler(event)}
                />
              </div>
              <div className="input-group">
                {/* <label for="password">Password</label> */}
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  error_text=""
                  value={this.state.password}
                  onChange={(event) => this.passwordInputHandler(event)}
                />
                <div className="forgot">
                  <button onClick={()=>this.onForgotPasswordClick()} className="forgot-btn">
                    Forgot Password ?
                  </button>
                </div>
              </div>
              <button className="sign">Sign in</button>
            </form>

            <p className="signup">
              Don't have an account?
              <button
                className="registar-button"
                onClick={() => this.onStudentRegisterClick()}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      );
    }
  }
}

const mapStatetoProps = (state) => ({
  state: state.user,
});

export default withStyles(useStyles)(
  connect(mapStatetoProps, {
    loginRequestAction,
  })(LoginForm)
);
