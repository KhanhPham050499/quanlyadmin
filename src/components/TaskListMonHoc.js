import React, { Component } from 'react';
import TaskItemMonHoc from './TaskItemMonHoc'


class TaskListMonHoc extends Component {
    

        render(){
        var {tasksS} = this.props
        var elmTasksS = tasksS.map((tasksS, index) =>{
                return <TaskItemMonHoc  key ={index} index = {index}  tasksS = {tasksS}
                             onUpdateMonHoc = {this.props.onUpdateMonHoc}
                             onDeleteMonHoc = {this.props.onDeleteMonHoc}/>
        })
           
        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = 'text-center'>STT</th>
                            <th className = 'text-center'>Mã môn học</th>
                            <th className = 'text-center'>Môn học</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { elmTasksS}
                        
                    </tbody>
                    </table>
                    </div>      
                
            
        );
    }
}



export default TaskListMonHoc;