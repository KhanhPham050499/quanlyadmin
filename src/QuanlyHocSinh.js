import React, { Component } from 'react';
import './App.css';
import TaskFormHocSinh from './components/TaskFormHocSinh'
import TaskListHocSinh from './components/TaskListHocSinh'

class HocSinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskHocSinh: [
                {
                    id: this.generateID(),
                    mahs: '1112',
                    HocSinh: 'Nguyễn Quang Thuận',
                    lop: '10B5',
                    ngaysinh: '22/10/2002'

                },
                {
                    id: this.generateID(),
                    mahs: '1113',
                    HocSinh: 'Lê Văn Tiến',
                    lop: '10B3',
                    ngaysinh: '22/10/2002'

                },
                {
                    id: this.generateID(),
                    mahs: '1114',
                    HocSinh: 'Nguyễn Lan Anh',
                    lop: '11B2',
                    ngaysinh: '22/10/2001'

                },
                {
                    id: this.generateID(),
                    mahs: '1115',
                    HocSinh: 'Nguyễn Thị Lan',
                    lop: '12B3',
                    ngaysinh: '22/10/2000'

                },
                {
                    id: this.generateID(),
                    mahs: '1116',
                    HocSinh: 'Trương Quang Việt',
                    lop: '12B6',
                    ngaysinh: '22/10/2000'

                }
            ],
            isDisplayForm: false,
        }
    }

    // onReset = () => {
    //     var taskHocSinh = [
    //         {
    //             id: this.generateID(),
    //             mahs: '1112',
    //             HocSinh: 'Nguyễn Quang Thuận',
    //             lop: '10B5',
    //             ngaysinh: '22/10/2002'

    //         },
    //         {
    //             id: this.generateID(),
    //             mahs: '1113',
    //             HocSinh: 'Lê Văn Tiến',
    //             lop: '10B3',
    //             ngaysinh: '22/10/2002'

    //         },
    //         {
    //             id: this.generateID(),
    //             mahs: '1114',
    //             HocSinh: 'Nguyễn Lan Anh',
    //             lop: '11B2',
    //             ngaysinh: '22/10/2001'

    //         },
    //         {
    //             id: this.generateID(),
    //             mahs: '1115',
    //             HocSinh: 'Nguyễn Thị Lan',
    //             lop: '12B3',
    //             ngaysinh: '22/10/2000'

    //         },
    //         {
    //             id: this.generateID(),
    //             mahs: '1116',
    //             HocSinh: 'Trương Quang Việt',
    //             lop: '12B6',
    //             ngaysinh: '22/10/2000'

    //         }

    //     ]
    //     this.setState({
    //         taskHocSinh: taskHocSinh
    //     })
    //     localStorage.setItem('taskHocSinh', JSON.stringify(taskHocSinh));
    // }

    onToggleForm = () => {

        this.setState({
            isDisplayForm: !this.state.isDisplayForm,
            taskEditing: null
        })

    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }

    onClose = () => {
        this.setState({
            isDisplayForm: false
        })
    }

    /* LocalStorage  */
    componentDidMount() {
        if (localStorage && localStorage.getItem('taskHocSinh')) {
            var taskHocSinh = JSON.parse(localStorage.getItem('taskHocSinh'));
            this.setState({
                taskHocSinh: taskHocSinh
            });
        }
    }

    s4() {
        return Math.floor(1 + Math.random() * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-'
            + this.s4() + this.s4() + this.s4();
    }


    onSubmit = (data) => {
        var { taskHocSinh } = this.state;
        if (data.id === '') {
            data.id = this.generateID();
            taskHocSinh.push(data);

        } else {
            //Editing   
            var index = this.findIndex(data.id);
            taskHocSinh[index] = data;

        }
        this.setState({
            taskHocSinh: taskHocSinh,
            taskEditing: null
        })
        localStorage.setItem('taskHocSinh', JSON.stringify(taskHocSinh));
        this.onCloseForm();
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    findIndex = (id) => {
        var { taskHocSinh } = this.state;
        var result = -1;
        taskHocSinh.forEach((task, index) => {
            if (task.id === id) {

                result = index;
            }
        });
        return result;
    }

    onDeleteHocSinh = (id) => {
        var { taskHocSinh } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            taskHocSinh.splice(index, 1);
            this.setState({
                taskHocSinh: taskHocSinh
            });
            localStorage.setItem('taskHocSinh', JSON.stringify(taskHocSinh));
        }
        this.onClose();
    }



    onUpdateHocSinh = (id) => {
        var { taskHocSinh } = this.state;
        var index = this.findIndex(id);
        var taskEditing = taskHocSinh[index];
        this.setState({
            taskEditing: taskEditing
        })
        this.onShowForm();
    }
    render() {

        var { isDisplayForm, taskHocSinh, taskEditing } = this.state;

        var elmTaskFromHocSinh = isDisplayForm
            ? <TaskFormHocSinh
                onCloseForm={this.onCloseForm}
                onSubmit={this.onSubmit}
                taskHocSinh={taskEditing}
            />
            : ""


        return (
            //   <div>
            // menu
            <div className='Form-app'>
                <div className="abc">
                    <div className="row">
                        <h1>Danh sách học sinh trong trường</h1>
                        <div className={isDisplayForm ? "col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-50" : ""}>
                            { /* Form Add HocSinh */}
                            {elmTaskFromHocSinh}
                        </div>
                        <div className={isDisplayForm
                            ? "col-xs-9 col-sm-9 col-md-9 col-lg-9 mt-50"
                            : "col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50"}
                        //  className = {isDisplaySideBar === false 
                        //         ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 abcd mt-50" 
                        //         : "col-xs-10 col-sm-10 col-md-10 col-lg-10 abcd mt-50"}
                        >
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ paddingLeft: 0 }}>
                                <button type="button"

                                    className="btn btn-primary mb-5 "
                                    onClick={this.onToggleForm}
                                >
                                    <i className="fas fa-plus mr-5"></i>
                                                        Thêm học sinh
                                                    </button>&nbsp;
                                                   </div>
                            {/* <button type="button" 
                                                            className="btn btn-danger mb-5 "
                                                            onClick = {this.onReset}>
                                                        
                                                        Reset All
                                                    </button> */}
                            {/* Task List*/}
                            <TaskListHocSinh taskHocSinh={taskHocSinh}
                                onDeleteHocSinh={this.onDeleteHocSinh}
                                onUpdateHocSinh={this.onUpdateHocSinh} />
                            <button type="button" className="btn btn-primary" style={{ display: 'block', margin: '0 auto' }}>1</button>


                        </div>

                    </div>
                </div>
            </div>
            //    </div>
            //   </div>       


        );
    }
}



export default HocSinh