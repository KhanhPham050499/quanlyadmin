import React, { Component } from 'react';
import './App.css';
import TaskFormStudents from './components/TaskFormStudents'
import TaskListStudents from './components/TaskListStudents'

class Diem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskDiem: [
                {
                    id: this.generateID,
                    hoten: "Bùi Xuân Huấn",
                    DM: null,
                    D15: null,
                    D60: null,
                    DT: null,
                    Tong: null

                },
                {
                    id: this.generateID(),
                    hoten: 'Trần Đức Bo',
                    DM: null,
                    D15: null,
                    D60: null,
                    DT: null,
                    Tong: null

                },
                {
                    id: this.generateID(),
                    hoten: 'Anh Ngạn',
                    DM: null,
                    D15: null,
                    D60: null,
                    DT: null,
                    Tong: null

                },
                {
                    id: this.generateID(),
                    hoten: 'Ngô Bá Khá',
                    DM: null,
                    D15: null,
                    D60: null,
                    DT: null,
                    Tong: null

                },
                {
                    id: this.generateID(),
                    hoten: 'Phùng Đức Trọng',
                    DM: null,
                    D15: null,
                    D60: null,
                    DT: null,
                    Tong: null

                },
                {
                    id: this.generateID(),
                    hoten: 'Hoàng Lộc',
                    DM: null,
                    D15: null,
                    D60: null,
                    DT: null,
                    Tong: null

                },
                {
                    id: this.generateID(),
                    hoten: 'Nguyễn Văn Linh',
                    DM: null,
                    D15: null,
                    D60: null,
                    DT: null,
                    Tong: null

                },
                {
                    id: this.generateID(),
                    hoten: 'Hồ Văn Hà',
                    DM: null,
                    D15: null,
                    D60: null,
                    DT: null,
                    Tong: null

                },

            ],
            isDisplaySideBar: false,
            isDisplayForm: false,
            taskEditing: null
        }
    }


    onBar = () => {
        this.setState({
            isDisplaySideBar: !this.state.isDisplaySideBar
        })
    }

    onCancel = () => {
        this.setState({
            isDisplaySideBar: !this.state.isDisplaySideBar
        })
    }



    onCloseForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }
    /* LocalStorage  */
    componentDidMount() {
        if (localStorage && localStorage.getItem('taskDiem')) {
            var taskDiem = JSON.parse(localStorage.getItem('taskDiem'));
            this.setState({
                taskDiem: taskDiem
            });
        }
    }

    onReset = () => {
        var taskDiem = [

            {
                id: this.generateID,
                hoten: "Bùi Xuân Huấn",
                DM: null,
                D15: null,
                D60: null,
                DT: null,
                Tong: null

            },
            {
                id: this.generateID(),
                hoten: 'Trần Đức Bo',
                DM: null,
                D15: null,
                D60: null,
                DT: null,
                Tong: null

            },
            {
                id: this.generateID(),
                hoten: 'Anh Ngạn',
                DM: null,
                D15: null,
                D60: null,
                DT: null,
                Tong: null

            },
            {
                id: this.generateID(),
                hoten: 'Ngô Bá Khá',
                DM: null,
                D15: null,
                D60: null,
                DT: null,
                Tong: null

            },
            {
                id: this.generateID(),
                hoten: 'Phùng Đức Trọng',
                DM: null,
                D15: null,
                D60: null,
                DT: null,
                Tong: null

            },
            {
                id: this.generateID(),
                hoten: 'Hoàng Lộc',
                DM: null,
                D15: null,
                D60: null,
                DT: null,
                Tong: null

            },
            {
                id: this.generateID(),
                hoten: 'Nguyễn Văn Linh',
                DM: null,
                D15: null,
                D60: null,
                DT: null,
                Tong: null

            },
            {
                id: this.generateID(),
                hoten: 'Hồ Văn Hà',
                DM: null,
                D15: null,
                D60: null,
                DT: null,
                Tong: null

            },

        ]
        this.setState({
            taskDiem: taskDiem
        })
        localStorage.setItem('taskDiem', JSON.stringify(taskDiem));
    }
    sinhdiem() {
        return Math.round((Math.random() * 10) * 10) / 10;
    }


    s4() {
        return Math.floor(1 + Math.random() * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-'
            + this.s4() + this.s4() + this.s4();
    }


    onSubmit = (data) => {

        var { taskDiem } = this.state;
        if (data.id === '') {
            data.id = this.generateID();
            // if(data.hoten !==''){
            //     taskDiem.push(data);
            // }

        } else {
            //Editing
            if (data.hoten !== '') {
                var index = this.findIndex(data.id);
                taskDiem[index] = data;
            }

        }
        this.setState({
            taskDiem: taskDiem
        })
        localStorage.setItem('taskDiem', JSON.stringify(taskDiem));
        if (data.hoten !== '') {
            this.onCloseForm();
        }
    }

    findIndex = (id) => {
        var { taskDiem } = this.state;
        var result = -1;
        taskDiem.forEach((task, index) => {
            if (task.id === id) {

                result = index;
            }
        });
        return result;
    }

    onDelete = (id) => {
        var { taskDiem } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            taskDiem.splice(index, 1);
            this.setState({
                taskDiem: taskDiem
            });
            localStorage.setItem('taskDiem', JSON.stringify(taskDiem));
        }

    }

    onUpdate = (id) => {
        var { taskDiem } = this.state;
        var index = this.findIndex(id);
        var taskEditing = taskDiem[index];
        this.setState({
            taskEditing: taskEditing
        })
        this.onShowForm();
    }

    render() {

        var { isDisplayForm, taskDiem, taskEditing } = this.state;
        var elmTaskFromTeacher = isDisplayForm
            ? <TaskFormStudents
                onCloseForm={this.onCloseForm}
                onSubmit={this.onSubmit}
                taskDiem={taskEditing}
            />
            : ""
        return (
            <div className='Form-app-diem'>
                <div className="abc">
                    <div className="row">
                        <h1>Quản lý điểm môn Toán lớp 12b5</h1>
                        <div className={isDisplayForm ? "col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-50" : ""}>
                            { /* Form Add Teacher */}
                            {elmTaskFromTeacher}

                        </div>

                        <div className={isDisplayForm
                            ? "col-xs-9 col-sm-9 col-md-9 col-lg-9 mt-50"
                            : "col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50"}
                        //  className = {isDisplaySideBar === false 
                        //         ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 abcd mt-50" 
                        //         : "col-xs-10 col-sm-10 col-md-10 col-lg-10 abcd mt-50"}
                        >

                            {/* <button type="button" 
                                                    className="btn btn-primary mb-5 "
                                                    onClick = {this.onToggleForm}>
                                                 <i className="fas fa-plus mr-5"></i>
                                                Thêm học sinh
                                            </button>&nbsp; */}

                            {/* <button type="button" 
                                                    className="btn btn-danger mb-5 "
                                                    onClick = {this.onReset}>
                                                 
                                                Làm mới điểm
                                            </button> */}


                            <div className="panel panel-primary panel-diem">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Giáo viên dạy: Phan Tấn Trung</h3>
                                </div>
                                <div className="panel-body">

                                    {/* Task List*/}
                                    <TaskListStudents taskDiem={taskDiem}
                                        onDelete={this.onDelete}
                                        onUpdate={this.onUpdate} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div >











        );
    }
}



export default Diem;