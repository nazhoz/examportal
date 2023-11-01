import React from "react";
import { connect } from "react-redux";
import LogoutButton from "../../atoms/LogoutButton/LogoutButton";
import Auth from "../../../helper/Auth";
import { Navigate } from "react-router-dom";
import { getUserDetails} from "../../../redux/actions/loginAction";
import AddQuestionForm from "../../templates/AddQuestionForm/AddQuestionForm";
import AlertBox from '../../atoms/Alertbox/AlertBox';
import { Drawer, Typography, withStyles, AppBar, Toolbar, List, ListItem, ListItemText } from "@material-ui/core";
import QuestionDetails from "../../templates/QuestionDetails/questionDetails";
import CreateTestForm from "../../templates/CreateTestForm/CreateTestForm";
import TestDetails from "../../templates/TestDetails/TestDetails";
import "../teacherHomepage/TeacherHomePage.css"

const drawerWidth = 200
const appbarHeight = 64

const useStyles = (theme)=>({
  flex : {
    display : 'flex'
  },
  content : {
    margin:'auto'
  },
  addHeight : theme.mixins.toolbar,
  title : {
    flexGrow : 1
  },
  appbar : {
    height : appbarHeight
  }
})

class TeacherHomepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content:(<div>Welcome to Exam portal</div>), // home - welcome message addquestion - add question form
      menuList : [{
        title:'Home',
        content:(<div>Welcome to Exam portal</div>)
      },{
        title: 'Add Question',
        content:<AddQuestionForm/>
      },{
        title: 'Questions',
        content:<QuestionDetails/>
      },{
        title: 'Create Test',
        content: <CreateTestForm/>
      },{
        title : 'View Tests',
        content : <TestDetails/>
      }]
    }
  }

  onMenuItemClick(content) {
    this.setState({
      ...this.state,
      content: content
    })
  }

  render(){
    if(!Auth.retriveToken() || Auth.retriveToken()==='undefined'){
      return (<Navigate to='/'/>);
    } else if(!this.props.user.isLoggedIn) {
      this.props.getUserDetails();
      return (<div></div>);
    } else if(this.props.user.userDetails.type !== 'TEACHER') {
      return (<Navigate to='/'/>);
    }
    return(
      <div className="teachers-homepage">
          <div className="teachersHomepage-navbar">
            <div className="teachers-Nav-Logo">
              <img width={60} height={60} src={require('../../Assets/nlogo.jpg')} alt="" />
              <h1>EduMetrix</h1>
            </div>
            <div className="teachers-Nav-user">
            <img width={40} height={40} src={require("../../Assets/man.png")} alt="" />  
            welcome, {this.props.user.userDetails.username}
            </div>
          
        </div>
        <div className="Teachers-Dashboard">
        
            <div>
              {this.state.menuList.map((item,index)=>(
                <ListItem button key={index} onClick={()=>(this.onMenuItemClick(item.content))}>
                  
                  <ListItemText primary={item.title}/>
                </ListItem>
              ))}
              <ListItem>
              <LogoutButton/>
              </ListItem>
            </div>
          {/* </Drawer> */}
          <div className={this.props.classes.content}>
            
            <AlertBox></AlertBox>
            {this.state.content}
            
          </div>
        </div>
        
        
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  user:state.user
})

export default withStyles(useStyles) (connect(mapStatetoProps,{
  getUserDetails
})(TeacherHomepage));