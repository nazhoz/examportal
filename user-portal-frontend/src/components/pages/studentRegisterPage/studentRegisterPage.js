import React from 'react';
import AlertBox from '../../atoms/Alertbox/AlertBox';
import StudentRegisterForm from '../../templates/studentRegisterForm/studentRegisterForm';
import { Button } from '@material-ui/core';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Navigate } from 'react-router-dom';
import logo from '../../pages/loginPage/images/logo.jpg'
import LoginForm from '../../templates/loginForm/loginForm';

const useStyles = (theme) => ({
  addHeight : theme.mixins.toolbar,
  title : {
    flexGrow : 1
  },
})

class StudentRegisterPage extends React.Component {
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
    return(
      <div>
     <div className="StudentsPortal-main">
          <div className="studentsportal-background">

          <div className="registertitle">
            <div className='register-logo'>
            <img width={60} height={60} src={logo} alt="" />
            <h1 className="Title">EduMetrix </h1> 
            </div>
            
             <div className='register-button'>
             <AlertBox/>
             <Button variant="contained" className={this.props.classes.endtestbtn} onClick={()=>(this.onHomeClick())}>Login</Button>
             </div>
            
            </div>

            <div className="studentslogin-inst">
            <div className="studentslogin-instruction">
              <span className="instruction">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corporis molestias dignissimos impedit dolores corrupti incidunt id voluptatibus provident suscipit? Nobis modi corrupti ex doloribus blanditiis adipisci voluptates et cupiditate.</span>
         
              </div>
              
          <div className={this.props.classes.addHeight}></div>
          <div className="students-alert">
          
          <StudentRegisterForm/>
            </div>
            
          </div>
          </div>
        </div>
          
        </div>
    )
  }
}


export default withStyles(useStyles)(StudentRegisterPage);

