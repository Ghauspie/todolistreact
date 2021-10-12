import React, {Component} from 'react';
import { connect } from 'react-redux';
import CompletedTask from './CompletedTask';


class ToDo  extends Component {

    state = {
        completed : this.props.task.completed
    }

    taskId={
        id: this.props.task.id
    }
    toggleCompleted = () => {
        let { onToggleCompleted, task} = this.props
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        onToggleCompleted(task.id)
    }



    render(){   
        let {task} = this.props;
        
        return (
            <li className={'list-group-item d-flex align-items-center w-75'+ (this.state.completed ? 'bg-success' : 'coucou')}>
                {task.name} 
                <button className={'btn btn-sm ml-auto '+(this.state.completed ? 'btn-success' : 'btn-outline-success')} onClick={CompletedTask}>&#x2713;</button>
            </li>
        )//end return in render()
    }//end render();

}//end ToDoClass
export default ToDo;