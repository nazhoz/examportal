import React from "react";
import { connect } from "react-redux";
import LogoutButton from "../../atoms/LogoutButton/LogoutButton";
import Auth from "../../../helper/Auth";
import { Navigate } from "react-router-dom";
import { getUserDetails } from "../../../redux/actions/loginAction";
import {
  Drawer,
  Typography,
  withStyles,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import AlertBox from "../../atoms/Alertbox/AlertBox";
import TestDetailsStudent from "../../templates/TestDetails/TestDetailsStudent";
import UpcomingStudentTestsDetails from "../../templates/TestDetails/UpcomingStudentTestsDetails";
import CompletedTestsDetailsStudent from "../../templates/TestDetails/CompletedTestsDetailsStudent";
import "../studentHomepage/StudentHomePage.css";
import logo from "../loginPage/images/nlogo.jpg";
import user from "../../Assets/user.png";

const drawerWidth = 200;
const appbarHeight = 64;

const useStyles = (theme) => ({
  drawer: {
    width: drawerWidth,
    height: `calc(100% - ${appbarHeight}px)`,
    top: appbarHeight,
  },
  drawerPaper: {
    width: drawerWidth,
    height: `calc(100% - ${appbarHeight}px)`,
    top: appbarHeight,
  },
  content: {
    // margin: "auto",
  },
  addHeight: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  appbar: {
    height: appbarHeight,
  },
  activeText: {
    color: "black",
  },
  inactiveText: {
    color: "grey",
  },
});

class StudentHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: (
        <div className="students-home-content-new">
          {/* Welcome to Exam portal */}
          <div className="students-home-content-cards">
            <div className="card-one">
              <img
                width={350}
                height={200}
                src={require("../../Assets/man.png")}
                alt=""
              />
              <span className="card-one-details">Name : Niyas c</span>
              <span className="card-one-details">
                Email ID : Niyas@gmail.com
              </span>
              <span className="card-one-details">Mobile : 8078291170</span>
              <span className="card-one-details">
                Aadhaar No : 2222 2222 2222 2222
              </span>
              <span className="card-one-details">Mobile : 8078291170</span>
            </div>
            <div className="cards">
              <div className="Home-view-all-test">
                <span>View All Test</span>
              </div>
              <div className="Home-Upcoming-test">
                <span>UpcomingTest</span>
              </div>
            </div>
          </div>
        </div>
      ),
      menuList: [
        {
          title: "Home",
          content: (
            <div className="students-home-content-new">
              {/* Welcome to Exam portal */}
              <div className="students-home-content-cards">
                <div className="card-one">
                  <img
                    width={350}
                    height={200}
                    src={require("../../Assets/man.png")}
                    alt=""
                  />
                  <span className="card-one-details">Name : Niyas c</span>
                  <span className="card-one-details">
                    Email ID : Niyas@gmail.com
                  </span>
                  <span className="card-one-details">Mobile : 8078291170</span>
                  <span className="card-one-details">
                    Aadhaar No : 2222 2222 2222 2222
                  </span>
                  <span className="card-one-details">Mobile : 8078291170</span>
                </div>
                <div className="cards">
                  <div className="Home-view-all-test">
                    <span>View All Test</span>
                  </div>
                  <div className="Home-Upcoming-test">
                    <span>UpcomingTest</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          img: require("../../Assets/home.png"),
          imgs: require("../../Assets/homeb.png"),
        },
        {
          title: "View All tests",
          content: <TestDetailsStudent />,
          img: require("../../Assets/vat.png"),
          imgs: require("../../Assets/vatb.png"),
        },
        {
          title: "Upcoming Tests",
          content: <UpcomingStudentTestsDetails />,
          img: require("../../Assets/ut.png"),
          imgs: require("../../Assets/utb.png"),
        },
        {
          title: "Completed Tests",
          content: <CompletedTestsDetailsStudent />,
          img: require("../../Assets/ct.png"),
          imgs: require("../../Assets/ctb.png"),
        },
      ],
    };
  }

  onMenuItemClick(content) {
    this.setState({
      ...this.state,
      content: content,
    });
  }

  render() {
    if (!Auth.retriveToken() || Auth.retriveToken() === "undefined") {
      return <Navigate to="/" />;
    } else if (!this.props.user.isLoggedIn) {
      this.props.getUserDetails();
      return <div></div>;
    } else if (this.props.user.userDetails.type !== "STUDENT") {
      return <Navigate to="/" />;
    }
    return (
      <div>
        <img className="studentmainbackground" src={require("../../Assets/background.png")} alt="" />
        <div className="students-home-main">
          <div className="Students-home-logo">
            <img width={60} height={60} src={logo} alt="" />
            <h1 className="StudentsHome-Title">EduMetrix</h1>
          </div>
          <div className="Students-Home-UserDetails">            
            <img width={40} height={40} src={require("../../Assets/man.png")} alt="" />            
            welcome, {this.props.user.userDetails.username}
          </div>
        </div>
        <div className="std-full-dashboard">
          <div className="students-home-dashboard-items">
            {this.state.menuList.map((item, index) => (
              <ListItem
                className="students-home-db-items"
                button
                key={index}
                onClick={() => this.onMenuItemClick(item.content)}
              >
                <div
                  className={`studentshome-db-titlebox ${
                    this.state.content === item.content ? "active" : ""
                  }`}
                >
                  <img
                    width={25}
                    height={25}
                    src={
                      this.state.content === item.content ? item.img : item.imgs
                    }
                    alt=""
                  />
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      className:
                        this.state.content === item.content
                          ? this.props.classes.activeText
                          : this.props.classes.inactiveText,
                    }}
                  />
                </div>
              </ListItem>
            ))}
            <ListItem className="students-home-logout">
              <LogoutButton />
            </ListItem>
          </div>
          <div className="students-home-content">
            <AlertBox></AlertBox>
            {this.state.content}
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  user: state.user,
});

export default withStyles(useStyles)(
  connect(mapStatetoProps, {
    getUserDetails,
  })(StudentHomepage)
);
