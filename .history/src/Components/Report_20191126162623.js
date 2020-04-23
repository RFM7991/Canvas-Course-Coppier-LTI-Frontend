import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import '../css/myForm.css'
import { runLogs } from  '../Requests/CandroidRequests'
import ReactTooltip from 'react-tooltip'

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
        <div style={{ fontFamily: 'arial, sans-serif', width: '100%', height: '100%', border: '1px solid white', borderRadius: '5px', padding: '8px', display: 'flex', flexDirection: 'column'}}>
          
          <br></br>
          <div style={{ width: '100%', }}>
            <span style={{ color: 'whitesmoke', fontWeight: 'bold', float: 'left', marginTop: '5px'}}>Student Log Report for {this.props.courseInfo.short_name}</span>

            <Button style={{fontSize: '14px', marginBottom: '8px'}}
                    variant="secondary"
                    onClick={this.handleRunLogs}
                    data-tip="Send Report to Canvas Inbox">
                    Send
            </Button>
            <ReactTooltip place="right" type="dark" effect="solid"/>
          </div>
         <Table variant="dark" striped bordered>
             <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Elapsed Time</th>
                </tr>
             </thead>
             <tbody>
                {this.props.logReport.map((e, i) => {
                    return (<tr key={i}>
                        <td>{(i+1)}</td>
                        <td><a href={'https://montclair.instructure.com/courses/' + this.props.courseInfo.canvas_course_id + '/users/' + e.user_id}>{e.username}</a></td>
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