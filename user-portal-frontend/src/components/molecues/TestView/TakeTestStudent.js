import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getUpcomingTestsStudentAction } from "../../../redux/actions/studentTestAction";
import { Button } from "@material-ui/core";
import { TableBody, TableCell, TableRow, Table, TableContainer, Paper } from "@material-ui/core";
import { getDatePretty, getTimePretty } from "../../../helper/common";
import { setAlert } from "../../../redux/actions/alertAction";
import { startTestAction } from "../../../redux/actions/takeTestAction";
import { Navigate } from "react-router-dom";

const useStyles = (theme)=> ({
  tableBorder:{
    background:'#e7e7e7',
    // padding:'15px'
    // width:1000,
  },
  tableHeader:{
    background:'#3f51b5',
    color:'white'
  }
})

class TakeTestStudent extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  goBack() {
    this.props.getUpcomingTestsStudentAction();
  }

  onStartTest(event,test) {
    if(test.status==='TEST_STARTED'){
      console.log("start test "+test._id);
      this.props.startTestAction({testid:test._id},test);

    } else {
      this.props.setAlert({
        isAlert : true,
        type : "info",
        title : "Not Started"
      })
    }
    
  }

  render() {
    if(this.props.isTestStarted) {
      console.log('test started');
      return (<Navigate to='/takeTestPage'/>);
    }
    var test = this.props.test;
    return(
    <div className="UpcomingTakeTestStudent">
      <TableContainer  sx={{ backgroundColor: 'transparent' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody >
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>Title</TableCell>
              <TableCell style={{textAlign: 'center'}}>{test.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>Status</TableCell>
              <TableCell style={{textTransform:'lowercase',textAlign: 'center'}}>{test.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>Total Marks</TableCell>
              <TableCell style={{textAlign: 'center'}}>{test.maxmarks}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>Duration</TableCell>
              <TableCell style={{textAlign: 'center'}}>{getTimePretty(test.duration)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>Test Start Time</TableCell>
              <TableCell style={{textAlign: 'center'}}>{getDatePretty(test.startTime)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>Test End Time</TableCell>  
              <TableCell style={{textAlign: 'center'}}>{getDatePretty(test.endTime)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>Result Time</TableCell>
              <TableCell style={{textAlign: 'center'}}>{getDatePretty(test.resultTime)}</TableCell>
              </TableRow>
            <TableRow>
              {/* <TableCell>Start Test</TableCell> */}
              <TableCell style={{textAlign: 'end'}}><Button
                  onClick={(event)=>(this.onStartTest(event,test))} style={{color:'blue',fontWeight:'600'}}>
                    Start Test
              </Button></TableCell>
              <TableCell style={{textAlign: 'start'}}><Button onClick={(event)=>(this.goBack(event))} style={{color:'red',fontWeight:'600'}}>Back</Button></TableCell>
              </TableRow>

          </TableBody>
        </Table>
        
      </TableContainer>
      {/* <div>
        <span>title : </span>
        <span>{test.title}</span>
      </div>
      <div>
        <span>status</span>
        <span style={{textTransform:'lowercase'}}>{test.status}</span>
      </div>
      <div>
        <span>Total Marks</span>
        <span>{test.maxmarks}</span>
      </div>
      <div>
        <span>Duration</span>
        <span>{getTimePretty(test.duration)}</span>
      </div>
      <div>
        <span>Test Start Time</span>
        <span>{getDatePretty(test.startTime)}</span>
      </div>
      <div>
        <span>Test End Time</span>
        <span>{getDatePretty(test.endTime)}</span>
      </div>
      <div>
        <span>Result Time</span>
        <span>{getDatePretty(test.resultTime)}</span>
      </div>
      <div>
        <Button onClick={(event)=>(this.onStartTest(event,test))}>Start Test</Button>
      </div> */}
    </div>)
  }
}

const mapStatetoProps = state => ({
  test : state.testDetails.test,
  isTestStarted : state.takeTestDetails.isRetrived
})

export default withStyles(useStyles)(connect(mapStatetoProps,{
  getUpcomingTestsStudentAction,
  setAlert,
  startTestAction
})(TakeTestStudent))