import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { registerStudentAction } from "../../../redux/actions/registerStudentAction";
import { connect } from "react-redux";
import { setAlert } from "../../../redux/actions/alertAction";
import './ForgotPasswordForm.css'

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
  }

  render() {
    return (
      <div className="Forgot-form-container">
            {/* <div className="Forgot-form-head">
              <span className="Forgot-title">Student Registration</span>
            </div> */}

            <form className="Forgot-form">
              <div className="Forgot-input-group">
                {/* <label for="username" >Username</label> */}
                <input
                  type="email"
                  id="Forgot-username"
                  placeholder="Email ID"
                //   error_text=""
                //   value={this.state.username}
                //   onChange={(event)=>(this.usernameInputHandler(event))}
                />
              </div>        
              <button className="Forgot-sign">Password Reset</button>
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