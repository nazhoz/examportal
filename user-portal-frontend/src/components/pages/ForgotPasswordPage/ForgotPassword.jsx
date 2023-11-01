import { Button, withStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import AlertBox from "../../atoms/Alertbox/AlertBox";
import LoginForm from "../../templates/loginForm/loginForm";
import Auth from "../../../helper/Auth";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from './images/logo.jpg'
import ForgotPasswordForm from "../../templates/ForgotPasswordForm/ForgotPasswordForm";
import PasswordChange from "../../templates/ForgotPasswordForm/PasswordChange";

const useStyles = (theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "black",
  },
  main: {
    textAlign: "center",
  },
  tools: {
    backgroundColor: "transparent",
  },
});

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotoHome: false
    }
  }
  onHomeClick() {
    this.setState({
      ...this.state,
      gotoHome : true
    })
  }

  render() {
    if(this.state.gotoHome) {
      return (<Navigate to='/'/>)
    }
    return (
      <div>
     <div className="StudentsPortal-main">
          <div className="studentsportal-background">

          <div className="registertitle">
            <div className='register-logo'>
            <img width={60} height={60} src={logo} alt="" />
            <h1 className="Title">EduMetrix </h1> 
            </div>
             <div className='register-button'>
             <Button variant="contained" className={this.props.classes.endtestbtn} onClick={()=>(this.onHomeClick())}>Login</Button>
             </div>
            
            </div>

            <div className="Forgotpassword-inst">
              
          <div className={this.props.classes.addHeight}></div>
          <div className={this.props.classes.main}>
          <AlertBox/>
          <ForgotPasswordForm/>
          {/* <PasswordChange/> */}
            </div>
            
          </div>
          </div>
        </div>
          
        </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  user: state.user,
});

export default withStyles(useStyles)(connect(mapStatetoProps, {})(ForgotPassword));
