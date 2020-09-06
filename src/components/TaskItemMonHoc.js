import React, { Component } from 'react';



class TaskItemMonHoc extends Component {
     

    onDeleteMonHoc = () => {
        this.props.onDeleteMonHoc(this.props.tasksS.id);
    }
    onUpdateMonHoc = () => {
        this.props.onUpdateMonHoc(this.props.tasksS.id); 
    }
        render(){
        var {tasksS,index } = this.props;
        return (
                    <tr>
                            
                            <td className = "text-center">{index + 1}</td>
                            <td className = "text-center">{tasksS.monhoc}</td>
                            
                            
                            <td className ="text-center">
                                
                                <button type="button" className="btn btn-warning" onClick = {this.onUpdateMonHoc}>
                                    <i className="fas fa-pencil-alt mr-5"></i>
                                    Sửa</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick = {this.onDeleteMonHoc}>
                                    <i className="fas fa-trash mr-5"></i> 
                                    Xóa</button>
                            </td>
                    </tr>
                         
                
            
        );
    }
}



export default TaskItemMonHoc;