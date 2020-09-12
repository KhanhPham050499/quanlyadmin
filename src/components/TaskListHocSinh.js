import React, { Component } from 'react';
import TaskItemHocSinh from './TaskItemHocSinh'


class TaskListHocSinh extends Component {
        constructor(props){
            super(props);
            this.state = {
                fitterName: ''
            }
        }

        render(){
        var {taskHocSinh} = this.props
        var elmTasks = taskHocSinh.map((task, index) =>{
                return <TaskItemHocSinh  key ={index} index = {index}  task = {task}
                onDeleteHocSinh = {this.props.onDeleteHocSinh}
                onUpdateHocSinh = {this.props.onUpdateHocSinh}/>
        })
           
        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = "text-center">STT</th>
                            <th className = "text-center">Mã học sinh</th>
                            <th className = "text-center">Họ và tên</th>
                            <th className = "text-center">Lớp</th>
                            <th className = "text-center">Ngày sinh</th>
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



export default TaskListHocSinh;