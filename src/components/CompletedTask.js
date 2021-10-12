import React, { Component } from 'react';
import { FaTasks } from 'react-icons/fa';
import { connect } from 'react-redux';
import { completedTask } from '../actions';



class CompletedTask extends Component {



    handleSubmit = (e) => {
       //On recupere l'id de la tack qu'on souhaite passer en complete ou la decompleter
       let item = {
        id: this.tasks.id,
        name: this.Task.value,
        completed: !this.tasks.completed,
    }
    this.props.addTask(item)
        /* let { onToggleCompleted, task} = this.props
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        onToggleCompleted(task.id) */
      }  
      
}

/* const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
} */

    
export default CompletedTask;
    
