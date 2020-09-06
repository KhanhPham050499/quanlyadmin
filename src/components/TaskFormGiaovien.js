import React, { Component } from 'react';


class TaskFormGiaovien extends Component {
    constructor(props){
        super(props);
        this.state = {
            giaovien: '',
            monday: '',
            chucvu: '',
            email: '',
            sdt: '',
            isInputValid: true,
            errorMessageTenKhoi: '' ,
            errorMessageTenLop: '',
            errorMessageGiaoVien: '',
            errorMessageMonChuyen: ''
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
    
    // ValidationTenKhoi = (event) => {
    //     if(this.state.tenkhoi ===''){
    //         this.setState({
    //             isInputValid : !this.state.isInputValid,
    //             errorMessageTenKhoi : 'Vui lòng nhập tên khối'
    //         })
    //     }else {
    //         this.setState({
    //             isInputValid : this.state.isInputValid,
    //             errorMessageTenKhoi : ''
    //         })
    //     }
    // }

    // ValidationTenlop = (event) => {
    //     if(this.state.tenlop ===''){
    //         this.setState({
    //             isInputValid : !this.state.isInputValid,
    //             errorMessageTenLop : 'Vui lòng nhập tên lớp'
    //         })
    //     }else {
    //         this.setState({
    //             isInputValid : this.state.isInputValid,
    //             errorMessageTenLop : ''
    //         })
    //     }
    // }
   
    // ValidationGiaoVien = (event) => {
    //     if(this.state.giaovien ===''){
    //         this.setState({
    //             isInputValid : !this.state.isInputValid,
    //             errorMessageGiaoVien : 'Vui lòng nhập tên giáo viên'
    //         })
    //     }else {
    //         this.setState({
    //             isInputValid : this.state.isInputValid,
    //             errorMessageGiaoVien : ''
    //         })
    //     }
    // }

    componentWillMount() {
        if(this.props.taskGiaovien){
            this.setState({
                tenkhoi : this.props.taskGiaovien.tenkhoi,
                tenlop: this.props.taskGiaovien.tenlop,
                giaovien: this.props.taskGiaovien.giaovien,
                chucvu: this.props.taskGiaovien.chucvu
            })
        }
    }

    Validationmonday = (event) => {
        if(this.state.chucvu ===''){
            this.setState({
                isInputValid : !this.state.isInputValid,
                errorMessageMonChuyen : 'Vui lòng nhập môn dạy'
            })
        }else {
            this.setState({
                isInputValid : this.state.isInputValid,
                errorMessageMonChuyen : ''
            })
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
            this.props.onSubmit(this.state);
        
    }

    onClearST = () => {
        this.setState({
            tenkhoi : '',
            tenlop: '',
            giaovien: '',
            chucvu: ''
        })
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }
        render(){
        
           
        return (
            <div className="panel panel-danger">
            <div className="panel-heading">
                  <h3 className="panel-title">Thêm giáo viên
                  <i className ="fa fa-times-circle text-right"
                     onClick = {this.onCloseForm}></i></h3>
            </div>
            <div className="panel-body">
                   {/* Form input*/ }
                   
                   <form onSubmit = {this.onSubmit}>
                       

                       <div className="form-group">
                           <label >Họ tên:</label>
                           <input type="text" className="form-control"
                           name = 'giaovien'
                           value = {this.state.giaovien}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationGiaoVien}/>
                           {this.state.giaovien === '' ? <span style = {{color : 'red'}}>           
                               {this.state.errorMessageGiaoVien}
                            </span> : null } 
                       </div>
                       <div className="form-group">
                           <label >Chuyên môn:</label>
                           <input type="text" className="form-control"
                           name = 'monday'
                           value = {this.state.monday}
                           onChange = {this.onChange}
                           onBlur = {this.Validationmonday}/>
                           {this.state.monday === '' ? <span style = {{color : 'red'}}>           
                               {this.state.errorMessageMonChuyen}
                            </span> : null }
                       </div>
                       <div className="form-group">
                           <label >Chủ nhiệm lớp:</label>
                           <input type="text" className="form-control"
                           name = 'chucvu'
                           value = {this.state.chucvu}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationGiaoVien}/>
                          
                       </div>
                       <div className="form-group">
                           <label >SĐT:</label>
                           <input type="text" className="form-control"
                           name = 'email'
                           value = {this.state.email}
                           onChange = {this.onChange}
                           onBlur = {this.Validationemail}/>
                           
                       </div>
                       <div className="form-group">
                           <label >Email:</label>
                           <input type="text" className="form-control"
                           name = 'sdt'
                           value = {this.state.sdt}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationGiaoVien}/>
                          
                       </div>
                   
                       
                   <div className="text-center">
                       <button type="submit" className="btn btn-warning">
                            <i className ="fa fa-plus mr-5"></i>Lưu</button>&nbsp;
                       <button type="button" className="btn btn-danger" onClick = { this.onClearST}>
                            <i className="fas fa-times mr-5"></i>Xóa</button>
                   </div>
                   </form>
                   
            </div>
      </div>
                
            
        );
    }
}



export default TaskFormGiaovien;