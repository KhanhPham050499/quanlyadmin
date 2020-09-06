import React, { Component } from 'react';



class TaskItemStudents extends Component {
   
    
    onUpdate = () => {
        this.props.onUpdate(this.props.taskDiem.id);
        
    }

        render(){
        var {taskDiem,index } = this.props;
        var DM = parseFloat(taskDiem.DM);
        var D15 = parseFloat(taskDiem.D15);
        var D60 = parseFloat(taskDiem.D60);
        var DT = parseFloat(taskDiem.DT);
        var tong = (DM + D15 + D60*2 + DT*3)/7;
        var result = Math.round(tong *10)/10;
       var kq = (taskDiem.DM === null || taskDiem.D15 === null || taskDiem.D60 === null || taskDiem.DT === null) ? result === null : result

        
        return (
                    <tr>
                            
                            <td className = "text-center">{index + 1}</td>
                            <td className = "text-center">{taskDiem.hoten}</td>
                            <td className = "text-center">{taskDiem.DM}</td>
                            <td className = "text-center">{taskDiem.D15}</td>
                            <td className = "text-center">{taskDiem.D60}</td>
                            <td className = "text-center">{taskDiem.DT}</td>
                            <td className = "text-center">{ kq}</td>
                            
                            <td className ="text-center">
                                
                                <button type="button" className="btn btn-warning" onClick = {this.onUpdate}>
                                    <i className="fas fa-pencil-alt mr-5"></i>
                                   Thêm/Sửa điểm</button>&nbsp;
                                
                            </td>
                    </tr>
                         
                
            
        );
    }
}



export default TaskItemStudents;