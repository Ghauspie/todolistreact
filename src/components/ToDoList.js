import React, { Component }  from 'react';
import { connect } from 'react-redux';
import ToDo, {tasks} from './ToDo';
import today from './DateDay';

/* var date = {currentTime: (new Date()).toLocaleString()}; */

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.handleChange=this.DeleteClick.bind(this);
    this.state={tasks: this.props.tasks}
  }

/*     onDeleteClick(event)
        event.preventDefault();
        const array= this.state.items;
        const index= array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items:array
        });
    } */

    DeleteClick= (e) =>{
       /*  e.handleChange() */
        //on vérifie qu'on recupere bien l'id de la task
        console.log('e vaut: '+e)
        var taskid=e
        var test = this.props.tasks
        
        //Pour récuperer le bon object de notre collection on vas compte combien de fois on fait une recherche dans celui-ci
        // s'initialise mon Itask a @
        for (const [index,value] of test.entries()){
            if (value.id ==taskid){
                var tasks=this.props.tasks.slice()
                console.log(index)
                // on supprime la task souhaité
                tasks.splice(index,1 )
        
                 this.setState({tasks}) ; 
                console.log(tasks)
                //on save les modifications

           
            }
        }  
        this.props.history.push('/');  
        return this.state.tasks;      
      } 

    renderTodos(){
        return this.state.tasks.map((task)=> {
            return (
                <div key={task.id}>
                   <ToDo className="w-75" task={task} key={task.id} /> <button className="btn btn-outline-dark bg-light" onClick={this.DeleteClick.bind(this, task.id)}>Delete</button>
                </div>
            );
        });
    }
      
    render() {
       
        return (
            <>
                <h1 className="m-3">Liste de tâches de la journée du {today.getDate()}/{today.getMonth()+1}/{today.getFullYear()} </h1>
                <ul className="list-group m-3">
                    <div>
                {this.renderTodos()}
                    </div>
                   
                     
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(ToDoList);
