import React, { Component } from 'react';
import TaskItemLopHoc from './TaskItemLopHoc'


class TaskListLopHoc extends Component {

        render(){
        var {tasksLopHoc} = this.props
        var elmTasks = tasksLopHoc.map((tasksLopHoc, index) =>{
                return <TaskItemLopHoc  key ={index} index = {index}  tasksLopHoc = {tasksLopHoc}
                onDeleteLopHoc = {this.props.onDeleteLopHoc}
                onUpdateLopHoc = {this.props.onUpdateLopHoc}/>
        })
           
        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = "text-center">STT</th>
                            <th className = "text-center">Mã lớp</th>
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