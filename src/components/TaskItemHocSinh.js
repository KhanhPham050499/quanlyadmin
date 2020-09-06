import React, { Component } from 'react';



class TaskItemHocSinh extends Component {
    
        onDeleteHocSinh = () => {
           this.props.onDeleteHocSinh(this.props.task.id);
        }
        
        onUpdateHocSinh = () => {
            this.props.onUpdateHocSinh(this.props.task.id); 
        }

        
        render(){
        var {task,index } = this.props
           
        return (
                    <tr>
                            
                            <td className = "text-center">{index + 1}</td>
                            <td className = "text-center">{task.HocSinh}</td>
                            <td className = "text-center">{task.lop}</td>
                            <td className = "text-center">{task.ngaysinh}</td>
                            <td className ="text-center">
                                
                                <button type="button" className="btn btn-warning"  onClick = {this.onUpdateHocSinh}>
                                    <i className="fas fa-pencil-alt mr-5"></i>
                                    Sửa</button>&nbsp;
                                <button type="button" className="btn btn-danger"  onClick = {this.onDeleteHocSinh}>
                                    <i className="fas fa-trash mr-5"></i>
                                    Xóa</button>
                            </td>
                    </tr>
                         
                
            
        );
    }
}



export default TaskItemHocSinh;