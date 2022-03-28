import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({ 
            showJob : !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>> handleOnClickDelete: ', job)
        this.props.deleteJob(job)
    }

    //re-render
    render() {
        
        let { job } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {!showJob ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div className="job-list">
                            {
                                job.map((J, index) => {
                                    return (
                                        <div key={J.id}>
                                            {J.title} - {J.salary} 
                                            <></> <span onClick={() => this.handleOnClickDelete(J)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )

    }
}

export default ChildComponent;