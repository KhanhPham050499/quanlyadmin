import React, { Component } from 'react';



class TaskItemGiaovien extends Component {
    
        onDeleteGiaovien = () => {
           this.props.onDeleteGiaovien(this.props.task.id);
        }
        
        onUpdateGiaovien = () => {
            this.props.onUpdateGiaovien(this.props.task.id); 
        }

        
        render(){
        var {task,index } = this.props
           
        return (
                    <tr>
                            
                            <td className = "text-center">{index + 1}</td>
                            <td className = "text-center">{task.giaovien}</td>
                            <td className = "text-center">{task.monday}</td>
                            <td className = "text-center">{task.chucvu}</td>
                            <td className = "text-center">{task.email}</td>
                            <td className = "text-center">{task.sdt}</td>
                            <td className ="text-center">
                                
                                <button type="button" className="btn btn-warning"  onClick = {this.onUpdateGiaovien}>
                                    <i className="fas fa-pencil-alt mr-5"></i>
                                    Sửa</button>&nbsp;
                                <button type="button" className="btn btn-danger"  onClick = {this.onDeleteGiaovien}>
                                    <i className="fas fa-trash mr-5"></i>
                                    Xóa</button>
                            </td>
                    </tr>
                         
                
            
        );
    }
}



export default TaskItemGiaovien;