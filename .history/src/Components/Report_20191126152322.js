import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import '../css/myForm.css'
import { runLogs } from  '../Requests/CandroidRequests'

class Report extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};

      this.handleRunLogs = this.handleRunLogs.bind(this)
    }

    handleRunLogs = async () => {
      let response = await runLogs(this.props.token, this.props.userInfo.courseId, this.props.userInfo.userId, true)
     // if (response != undefined)
        alert('Running log report, please check your Inbox.', response)
    }
    
    render() {
        console.log('report panel',this.props)
      return (
        <div style={{ fontFamily: 'arial, sans-serif', width: '100%', height: '100%', margin: 'auto', border: '1px solid white', borderRadius: '5px', padding: '8px', display: 'flex', flexDirection: 'column'}}>
            <Button style={{width: '25%', fontSize: '12px', alignSelf: 'flexEnd'}}
                variant="secondary"
                onClick={this.handleRunLogs}>
                Send to Canvas Inbox
          </Button>
          <br></br>
         <Table striped bordered  style={{color: 'whitesmoke'}}>
             <caption>Student Log Report for</caption>
             <thead>
                 <th>#</th>
                 <th>Name</th>
                 <th>Elapsed Time</th>
             </thead>
             <tbody>
                {this.props.logReport.map((e, i) => {
                    return (<tr>
                        <td>{(i+1)}</td>
                        <td>{e.username}</td>
                        <td>{e.elapsed_time.days + ' days and ' + e.elapsed_time.remainingHours + ' hours.'}</td>
                    </tr> );
                })}
            </tbody>
          </Table>
      </div>
      );
    }
  }

  
  
export default Report