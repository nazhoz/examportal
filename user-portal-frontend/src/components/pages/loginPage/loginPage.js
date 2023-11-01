import { Button, withStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import AlertBox from "../../atoms/Alertbox/AlertBox";
import LoginForm from "../../templates/loginForm/loginForm";
import Auth from "../../../helper/Auth";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from './images/logo.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = (theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "black",
  },
  main: {
    textAlign: "center",
    // paddingTop: "5%",
    // margin: "auto",
    // width:'55%',
    // backgroundColor:'red'
    
  },
  tools: {
    backgroundColor: "transparent",
  },
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotoStudentRegister: false,
    };
  }


  render() {
    if (this.props.user.isLoggedIn) {
      if (this.props.user.userDetails.type === "TEACHER")
        return <Navigate to="/homeTeacher" />;
      else return <Navigate to="/homeStudent" />;
    } else if (Auth.retriveToken() && Auth.retriveToken() !== "undefined") {
      return <Navigate to="/homeStudent" />;
    } else {
      return (
        <div className="StudentsPortal-main">
          <div className="studentsportal-background">

          <div className="logintitle">
            <img className="title-img" width={60} height={60} src={logo} alt="" />
            <h1 className="Title">EduMetrix </h1>  
            </div>

            <div className="studentslogin-inst">
            <div className="studentslogin-instruction">
              <span className="instruction">Information You Need</span>
         

              <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              >
              <div>
              <span className="instruction-carousel">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dolor accusantium sapiente recusandae. Nihil quis quod aliquam ducimus non commodi laudantium dolores veniam cupiditate, pariatur repellat earum accusantium maiores eligendi?</span>
              </div>
              <div>
              <span className="instruction-carousel">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatum doloribus soluta aut culpa, natus qui quibusdam quasi fugiat suscipit numquam hic eligendi eveniet quas dolorum, perspiciatis, quaerat nihil. Iste!</span>
              </div>
              <div>
              <span className="instruction-carousel">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore alias neque libero animi atque quae maiores repellendus ullam cum. Esse beatae nobis eligendi, facere velit modi. Facilis ipsa magnam vero?</span>
              </div>
              {/* Add more paragraphs as needed */}
              </Carousel>

              </div>
            <div className={this.props.classes.main}> 
              <AlertBox />
              <LoginForm />
            </div>
            </div>

          </div>
        </div>
      );
    }
  }
}

const mapStatetoProps = (state) => ({
  user: state.user,
});

export default withStyles(useStyles)(connect(mapStatetoProps, {})(LoginPage));
