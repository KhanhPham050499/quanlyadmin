import React, { Component } from 'react';


class TaskFormHocSinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            mahs: '',
            HocSinh: '',
            lop: '',
            ngaysinh: ''
            // isInputValid: true,
            // errorMessageTenKhoi: '',
            // errorMessageTenLop: '',
            // errorMessageHocSinh: '',
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

    // ValidationHocSinh = (event) => {
    //     if(this.state.HocSinh ===''){
    //         this.setState({
    //             isInputValid : !this.state.isInputValid,
    //             errorMessageHocSinh : 'Vui lòng nhập tên giáo viên'
    //         })
    //     }else {
    //         this.setState({
    //             isInputValid : this.state.isInputValid,
    //             errorMessageHocSinh : ''
    //         })
    //     }
    // }

    componentWillMount() {
        if (this.props.taskHocSinh) {
            this.setState({
                id: this.props.taskHocSinh.id,
                mahs: this.props.taskHocSinh.mahs,
                HocSinh: this.props.taskHocSinh.HocSinh,
                lop: this.props.taskHocSinh.lop,
                ngaysinh: this.props.taskHocSinh.ngaysinh
            })
        }
    }

    // Validationmonday = (event) => {
    //     if(this.state.ngaysinh ===''){
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

    }

    onClearST = () => {
        this.setState({
            mahs: '',
            HocSinh: '',
            lop: '',
            ngaysinh: ''
        })
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }
    render() {


        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm học sinh
                  <i className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}></i></h3>
                </div>
                <div className="panel-body">
                    {/* Form input*/}

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label >Mã học sinh:</label>
                            <input type="text" className="form-control"
                                name='mahs'
                                value={this.state.mahs}
                                onChange={this.onChange}
                                onBlur={this.Validationmahs} />
                        </div>

                        <div className="form-group">
                            <label >Họ và tên:</label>
                            <input type="text" className="form-control"
                                name='HocSinh'
                                value={this.state.HocSinh}
                                onChange={this.onChange}
                                onBlur={this.ValidationHocSinh} />
                            {this.state.HocSinh === '' ? <span style={{ color: 'red' }}>
                                {this.state.errorMessageHocSinh}
                            </span> : null}
                        </div>
                        <div className="form-group">
                            <label >Lớp:</label>
                            <input type="text" className="form-control"
                                name='lop'
                                value={this.state.lop}
                                onChange={this.onChange}
                                onBlur={this.Validationmonday} />
                            {this.state.lop === '' ? <span style={{ color: 'red' }}>
                                {this.state.errorMessageMonChuyen}
                            </span> : null}
                        </div>
                        <div className="form-group">
                            <label >Ngày sinh:</label>
                            <input type="text" className="form-control"
                                name='ngaysinh'
                                value={this.state.ngaysinh}
                                onChange={this.onChange}
                                onBlur={this.ValidationHocSinh} />

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



export default TaskFormHocSinh;