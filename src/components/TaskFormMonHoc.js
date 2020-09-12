import React, { Component } from 'react';


class TaskFormMonHoc extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            mamh: '',
            monhoc: '',
            isInputValid: true,
            errorMessageHT: '' ,
            errorMessageMonDay: ''
        }
    }
    
    onChange = (event) =>{
        
        var target = event.target;
        var name = target.name;
        var value = target.value
        this.setState({
            [name] : value
        })
    }
    
    componentDidMount() {
        if(this.props.tasksS){
            this.setState({
                id: this.props.tasksS.id,
                mamh : this.props.tasksS.mamh,
                monhoc : this.props.tasksS.monhoc  
            })
        }
    }
    
    // ValidationHT = (event) => {
    //     if(this.state.monhoc ===''){
    //         this.setState({
    //             isInputValid : !this.state.isInputValid,
    //             errorMessage : 'Vui lòng nhập môn học'
    //         })
    //     }else {
    //         this.setState({
    //             isInputValid : this.state.isInputValid,
    //             errorMessage : ''
    //         })
    //     }
    // }

    onCloseForm = () => {
        this.props.onCloseForm();
    }
   

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        
    }

    onClear = () =>  {
          this.setState({
              mamh: '',
              monhoc : ''
          })
    }
    
  
        render(){
        
           
        return (
            
            <div className="panel panel-danger">
            <div className="panel-heading">
                  <h3 className="panel-title">Thêm môn học
                  <i className ="fa fa-times-circle text-right"
                     onClick = {this.onCloseForm}></i>
                  </h3>
            </div>
            <div className="panel-body">
                   {/* Form input*/ }
                   
                   <form onSubmit = {this.onSubmit}>
                   <div className="form-group invalid">
                           <label>Mã môn học:</label>
                           <input type="text" className="form-control mt-10"
                           name ='mamh'
                           value = {this.state.mamh}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationHT}
                          />
                            {this.state.mamh === '' ? <span style = {{color : 'red'}}>           
                               {this.state.errorMessage}
                            </span> : null }
                       </div>
                       <div className="form-group invalid">
                           <label>Tên môn học:</label>
                           <input type="text" className="form-control mt-10"
                           name ='monhoc'
                           value = {this.state.monhoc}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationHT}
                          />
                            {this.state.monhoc === '' ? <span style = {{color : 'red'}}>           
                               {this.state.errorMessage}
                            </span> : null }
                       </div>
                       
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                    <i className ="fa fa-plus mr-5"></i>Lưu</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick = {this.onClear}>
                                    <i className="fas fa-times mr-5"></i>Xóa</button>
                        </div>
                   </form>
                   
            </div>
      </div>
                
            
        );
    }
}



export default TaskFormMonHoc;