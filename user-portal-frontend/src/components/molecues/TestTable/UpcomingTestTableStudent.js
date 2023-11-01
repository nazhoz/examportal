import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { TableBody, TableCell, TableRow, Table, TableHead, TableContainer, Paper, Button } from "@material-ui/core";
import { getDatePretty, getTimePretty } from "../../../helper/common";
import { getTestById } from "../../../redux/actions/studentTestAction";

const useStyles = (theme)=> ({
  
  tableHeader:{
    background:'#362F4B',
    color:'white',
    fontWeight:"700"
  }
})

class UpcomingTestTableStudent extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  onTestClick(event,id) {
    this.props.getTestById({testid:id});
  }

  onTestRegister(event,id) {
    this.props.studentTestRegister({testid:id});
  }


  render() {
    return(<div className="upcoming-All-Test-Tablediv">
      <TableContainer component={Paper} className="upcomingTest-Table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="UpcomingTest-Table-head">
            <TableRow>
              <TableCell align="left" className={this.props.classes.tableHeader}>Test</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Status</TableCell>
              <TableCell className={this.props.classes.tableHeader}>total<br/>marks</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Duration<br/>(hours)</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Test start</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Test end</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Result</TableCell>
              <TableCell className={this.props.classes.tableHeader}>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.testlist.map((test,index)=>(
              <TableRow key={index} className="upcomingTest-Students">
                <TableCell>{test.title}</TableCell>
                <TableCell style={{textTransform:'lowercase'}}>{test.status}</TableCell>
                <TableCell>{test.maxmarks}</TableCell>
                <TableCell>{getTimePretty(test.duration)}</TableCell>
                <TableCell>{getDatePretty(test.startTime)}</TableCell>
                <TableCell>{getDatePretty(test.endTime)}</TableCell>
                <TableCell>{getDatePretty(test.resultTime)}</TableCell>
                <TableCell><Button onClick={(event)=>(this.onTestClick(event,test._id))}>View</Button></TableCell>
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
  getTestById
})(UpcomingTestTableStudent));
