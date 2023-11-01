import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { TableBody, TableCell, TableRow, Table, TableHead, TableContainer, Paper, Button } from "@material-ui/core";
import { getTestResultStudent } from "../../../redux/actions/studentTestAction";

const useStyles = (theme)=> ({
  tableBorder:{
    // background:'#fff',
    // padding:'15px'
  },
  tableHeader:{
    background:'#362F4B',
    color:'white',
    fontWeight:'700'
  }
})

class CompletedTestTableStudent extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  onTestClick(event,id) {
    console.log("view result for test "+id);
    this.props.getTestResultStudent({testid:id});
  }

  onTestRegister(event,id) {
    this.props.studentTestRegister({testid:id});
  }


  render() {
    return(<div className="completed-Test-Tablediv">
      <TableContainer component={Paper} className="completedTest-Table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="completedTest-Table-head">
            <TableRow>
              <TableCell align="left" className={this.props.classes.tableHeader}>Test</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Status</TableCell>
              <TableCell className={this.props.classes.tableHeader}>total<br/>marks</TableCell>
              <TableCell className={this.props.classes.tableHeader}>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.testlist.map((test,index)=>(
              <TableRow key={index} className="completedTest-Students">
                <TableCell>{test.title}</TableCell>
                <TableCell style={{textTransform:'lowercase'}}>{test.status}</TableCell>
                <TableCell>{test.maxmarks}</TableCell>
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
  getTestResultStudent
})(CompletedTestTableStudent));
