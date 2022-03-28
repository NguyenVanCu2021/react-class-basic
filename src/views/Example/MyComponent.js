import React from 'react';
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {


    //key:value
    state = {
        arrJob: [
            {id: 'Job1', salary: '1000', title: 'manager'},
            {id: 'Job2', salary: '500', title: 'developer'},
            {id: 'Job3', salary: '400', title: 'tester'}
        ]
    }

    /* 
    JSX => return block
    fragment
    */
    addNewJob = (job) => {
       this.setState({
           arrJob: [...this.state.arrJob, job]
       })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJob
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currentJobs
        })
    }

    //re-render
    render() {
        // console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent 
                    addNewJob = {this.addNewJob}
                />
                <ChildComponent  
                    job={this.state.arrJob}
                    deleteJob = {this.deleteJob}
                />
            </>
        )

    }
}

export default MyComponent;