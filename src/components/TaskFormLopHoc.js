import React, { Component } from 'react';


class TaskFormLopHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            malop: '',
            tenkhoi: '',
            tenlop: '',
            giaovien: '',
            chuyenmon: ''
            // isInputValid: true,
            // errorMessageTenKhoi: '',
            // errorMessageTenLop: '',
            // errorMessageGiaoVien: '',
            // errorMessageMonChuyen: ''
        }
    }

    onChange = (event) => {

        var target = event.target;
        var name = target.name;
        var value = target.value
        this.setState({
            [name]: value
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

    componentDidMount() {
        if (this.props.tasksLopHoc) {
            this.setState({
                id : this.props.tasksLopHoc.id,
                malop: this.props.tasksLopHoc.malop,
                tenkhoi: this.props.tasksLopHoc.tenkhoi,
                tenlop: this.props.tasksLopHoc.tenlop,
                giaovien: this.props.tasksLopHoc.giaovien,
                chuyenmon: this.props.tasksLopHoc.chuyenmon
            })
        }
    }

    // ValidationChuyenMon = (event) => {
    //     if(this.state.chuyenmon ===''){
    //         this.setState({
    //             isInputValid : !this.state.isInputValid,
    //             errorMessageMonChuyen : 'Vui lòng nhập môn dạy'
    //         })
    //     }else {
    //         this.setState({
    //             isInputValid : this.state.isInputValid,
    //             errorMessageMonChuyen : ''
    //         })
    //     }
    // }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClearST();
        this.onCloseForm();
    }

    onClearST = () => {
        this.setState({
            malop: '',
            tenkhoi: '',
            tenlop: '',
            giaovien: '',
            chuyenmon: ''
        })
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }
    render() {
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm lớp học
                  <i className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}></i></h3>
                </div>
                <div className="panel-body">
                    {/* Form input*/}

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group invalid">
                            <label>Mã lớp</label>
                            <input type="text" className="form-control"
                                name='malop'
                                value={this.state.malop}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group invalid">
                            <label>Tên khối</label>
                            <input type="text" className="form-control"
                                name='tenkhoi'
                                value={this.state.tenkhoi}
                                onChange={this.onChange}
                            />

                        </div>
                        <div className="form-group">
                            <label>Tên lớp:</label>
                            <input type="text" className="form-control"
                                name='tenlop'
                                value={this.state.tenlop}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label >Giáo viên chủ nhiệm</label>
                            <input type="text" className="form-control"
                                name='giaovien'
                                value={this.state.giaovien}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label >Môn chuyên:</label>
                            <input type="text" className="form-control"
                                name='chuyenmon'
                                value={this.state.chuyenmon}
                                onChange={this.onChange} />
                        </div>


                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <i className="fa fa-plus mr-5"></i>Lưu</button>&nbsp;
                       <button type="button" className="btn btn-danger" onClick={this.onClearST}>
                                <i className="fas fa-times mr-5"></i>Xóa</button>
                        </div>
                    </form>

                </div>
            </div>


        );
    }
}



export default TaskFormLopHoc;