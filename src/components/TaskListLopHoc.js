import React, { Component } from 'react';
import TaskItemLopHoc from './TaskItemLopHoc'


class TaskListLopHoc extends Component {
        constructor(props){
            super(props);
            this.state = {
                fitterName: ''
            }
        }

        render(){
        var {tasksLopHoc} = this.props

        console.log(tasksLopHoc)
        var elmTasks = tasksLopHoc.map((task, index) =>{
                return <TaskItemLopHoc  key ={index} index = {index}  task = {task}
                onDeleteLopHoc = {this.props.onDeleteLopHoc}
                onUpdateLopHoc = {this.props.onUpdateLopHoc}/>
        })
           
        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = "text-center">STT</th>
                            <th className = "text-center">Tên khối</th>
                            <th className = "text-center">Tên lớp</th>
                            <th className = "text-center">Giáo viên chủ nhiệm</th>
                            <th className = "text-center">Chuyên môn</th>
                            <th className = "text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { elmTasks}
                        
                    </tbody>
                    </table>
                    </div>      
                
            
        );
    }
}



export default TaskListLopHoc;