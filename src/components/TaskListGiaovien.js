import React, { Component } from 'react';
import TaskItemGiaovien from './TaskItemGiaovien'


class TaskListGiaovien extends Component {
        constructor(props){
            super(props);
            this.state = {
                fitterName: ''
            }
        }

        render(){
        var {taskGiaovien} = this.props
        var elmTasks = taskGiaovien.map((task, index) =>{
                return <TaskItemGiaovien  key ={index} index = {index}  task = {task}
                onDeleteGiaovien = {this.props.onDeleteGiaovien}
                onUpdateGiaovien = {this.props.onUpdateGiaovien}/>
        })
           
        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = "text-center">STT</th>
                            <th className = "text-center">Họ tên</th>
                            <th className = "text-center">Chuyên môn</th>
                            <th className = "text-center">Chủ nhiệm lớp</th>
                            <th className = "text-center">Email</th>
                            <th className = "text-center">Điện thoại</th>
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



export default TaskListGiaovien;