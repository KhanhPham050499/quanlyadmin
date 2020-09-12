import React, { Component } from 'react';



class TaskItemLopHoc extends Component {
    
        onDeleteLopHoc = () => {
           this.props.onDeleteLopHoc(this.props.tasksLopHoc.id);
        }
        
        onUpdateLopHoc = () => {
            this.props.onUpdateLopHoc(this.props.tasksLopHoc.id); 
        }

        
        render(){
        var {tasksLopHoc,index } = this.props;
            
        return (
                    <tr>
                            
                            <td className = "text-center">{index + 1}</td>
                            <td className = "text-center">{tasksLopHoc.malop}</td>
                            <td className = "text-center">{tasksLopHoc.tenkhoi}</td>
                            <td className = "text-center">{tasksLopHoc.tenlop}</td>
                            <td className = "text-center">{tasksLopHoc.giaovien}</td>
                            <td className = "text-center">{tasksLopHoc.chuyenmon}</td>
                            <td className ="text-center">
                                
                                <button type="button" className="btn btn-warning"  onClick = {this.onUpdateLopHoc}>
                                    <i className="fas fa-pencil-alt mr-5"></i>
                                    Sửa</button>&nbsp;
                                <button type="button" className="btn btn-danger"  onClick = {this.onDeleteLopHoc}>
                                    <i className="fas fa-trash mr-5"></i>
                                    Xóa</button>
                            </td>
                    </tr>
                         
                
            
        );
    }
}



export default TaskItemLopHoc;