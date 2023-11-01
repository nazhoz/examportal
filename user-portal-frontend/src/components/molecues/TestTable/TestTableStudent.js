import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { TableBody, TableCell, TableRow, Table, TableHead, TableContainer, Paper, Button } from "@material-ui/core";
import { studentTestRegister } from "../../../redux/actions/studentTestAction";
import { getDatePretty, getTimePretty } from "../../../helper/common";
import "../TestTable/TestTable.css"
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = (theme)=> ({
  tableBorder:{
  },
  tableHeader:{
    background:'#362F4B',
    color:'white',
    fontWeight:"700"
  }
})

class TestTableStudent extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  onTestClick(event,id) {
    console.log(id);
  }

  onTestRegister(event,id) {
    this.props.studentTestRegister({testid:id});
  }


  render() {
    return(<div className="View-All-Test-Tablediv">
      <TableContainer component={Paper} className="ViewAllTest-Table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="ViewAllTest-Table-head">
            <TableRow>
              <TableCell align="left" className={this.props.classes.tableHeader}>Test</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Status</TableCell>
              {/* <TableCell className={this.props.classes.tableHeader}>total<br/>marks</TableCell> */}
              {/* <TableCell className={this.props.classes.tableHeader}>Duration<br/>(hours)</TableCell> */}
              <TableCell className={this.props.classes.tableHeader}>Registration start</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Registration end</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Test start</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Test end</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Result</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Register</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.testlist.map((test,index)=>(
              <TableRow key={index} className="ViewallTest-Students">
                <TableCell style={{ wordWrap: 'break-word',maxWidth:150}}>{test.title}</TableCell>
                <TableCell style={{textTransform:'lowercase'}}>{test.status}</TableCell>
                {/* <TableCell>{test.maxmarks}</TableCell> */}
                {/* <TableCell>{getTimePretty(test.duration)}</TableCell> */}
                <TableCell>{getDatePretty(test.regStartTime)}</TableCell>
                <TableCell>{getDatePretty(test.regEndTime)}</TableCell>
                <TableCell>{getDatePretty(test.startTime)}</TableCell>
                <TableCell>{getDatePretty(test.endTime)}</TableCell>
                <TableCell>{getDatePretty(test.resultTime)}</TableCell>
                <TableCell style={{ color:test.isRegistered ? 'green' : 'red',fontWeight:'600'}}>
                  {test.isRegistered===false?(test.status==='REGISTRATION_STARTED'? (<Button
                  onClick={(event)=>(this.onTestRegister(event,test._id))} style={{color:'black',fontWeight:'600'}}>
                    Register
                </Button>)  : 'not Registered'):'Registered'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
    </div>)
  }
}

const mapStatetoProps = state => ({
  testlist : state.testDetails.list
})

export default withStyles(useStyles)(connect(mapStatetoProps,{
  studentTestRegister
})(TestTableStudent));
