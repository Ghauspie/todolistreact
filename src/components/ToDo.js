import React, {Component ,  useState } from 'react';
import { connect } from 'react-redux';
//import CompletedTask from './CompletedTask';
import { completedTask } from '../actions';

class ToDo  extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.toggleCompleted.bind(this);
        this.state={tasks: this.props.tasks}
      }
    state = {
        completed : this.props.task.completed
    }

    taskId={
        id: this.props.task.id
    }
    toggleCompleted = (e) => {
    /*    let { onToggleCompleted, task} = this.props
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        onToggleCompleted(task.id)*/

        this.setState(prevState => ({
            completed: !prevState.completed
        }
            ))  
    }
    


    render(){   
        let {task} = this.props;
        return (
            <li className={'list-group-item d-flex align-items-center w-75'+ (this.state.completed ? 'bg-success' : 'coucou')}>
                {task.name} 
                <button className={'btn btn-sm ml-auto '+(this.state.completed ? 'btn-success' : 'btn-outline-success')} onClick={this.toggleCompleted.bind(this, task.id)}>&#x2713;</button>
            </li>
        )//end return in render()
    }//end render();

}//end ToDoClass
export default ToDo;