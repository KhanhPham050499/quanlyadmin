import React, { Component } from 'react';
import './App.css';
import TaskFormLopHoc from './components/TaskFormLopHoc'
import TaskListLopHoc from './components/TaskListLopHoc'

class LopHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksLopHoc: [
                {
                    id: this.generateID(),
                    tenkhoi: 'Khối 10',
                    tenlop: '10B3',
                    giaovien: 'Nguyễn Văn Linh',
                    chuyenmon: 'Toán'
                },
                {
                    id: this.generateID(),
                    tenkhoi: 'Khối 10',
                    tenlop: '10B5',
                    giaovien: 'Hoàng Thị Hà',
                    chuyenmon: 'Anh văn'
                },
                {
                    id: this.generateID(),
                    tenkhoi: 'Khối 10',
                    tenlop: '10B6',
                    giaovien: 'Nguyễn Văn Tuấn',
                    chuyenmon: 'Ngữ Văn'
                },
                {
                    id: this.generateID(),
                    tenkhoi: 'Khối 11',
                    tenlop: '11B1',
                    giaovien: 'Trần Thu Hoài',
                    chuyenmon: 'Hóa học'
                },
                {
                    id: this.generateID(),
                    tenkhoi: 'Khối 11',
                    tenlop: '10B2',
                    giaovien: 'Phạm Văn Khánh',
                    chuyenmon: 'Vật lý'
                },
                {
                    id: this.generateID(),
                    tenkhoi: 'Khối 12',
                    tenlop: '12B4',
                    giaovien: 'Lê Bá Cường',
                    chuyenmon: 'Sinh học'
                }

            ],
            isDisplayForm: false,
        }
    }




    onToggleForm = () => {

        this.setState({
            isDisplayForm: !this.state.isDisplayForm
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
        if (localStorage && localStorage.getItem('tasksLopHoc')) {
            var tasksLopHoc = JSON.parse(localStorage.getItem('tasksLopHoc'));
            this.setState({
                tasksLopHoc: tasksLopHoc
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
        console.log(data);
        var { tasksLopHoc } = this.state;
        data.id = this.generateID();
        if (data.tenkhoi !== "" && data.tenlop !== "" && data.giaovien !== "" && data.chuyenmon !== "") {
            tasksLopHoc.push(data);
        }
        this.setState({
            tasksLopHoc: tasksLopHoc
        })
        localStorage.setItem('tasksLopHoc', JSON.stringify(tasksLopHoc));
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
        var { tasksLopHoc } = this.state;
        var result = -1;
        tasksLopHoc.forEach((task, index) => {
            if (task.id === id) {

                result = index;
            }
        });
        return result;
    }

    onDeleteLopHoc = (id) => {
        var { tasksLopHoc } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasksLopHoc.splice(index, 1);
            this.setState({
                tasksLopHoc: tasksLopHoc
            });
            localStorage.setItem('tasksLopHoc', JSON.stringify(tasksLopHoc));
        }
        this.onClose();
    }

    onUpdateLopHoc = (id) => {
        var { tasksLopHoc } = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasksLopHoc[index];
        this.setState({
            taskEditing: taskEditing
        })
        this.onShowForm();
    }
    render() {

        var { isDisplayForm, tasksLopHoc, taskEditing } = this.state;

        var elmTaskFromLopHoc = isDisplayForm
            ? <TaskFormLopHoc
                onCloseForm={this.onCloseForm}
                onSubmit={this.onSubmit}
                tasksLopHoc={taskEditing}
            />
            : ""


        return (
            //   <div>
            // menu
            <div className='Form-app'>
                <div className="abc">
                    <div className="row" style={{ height: '100%' }}>
                        <h1>Danh sách các lớp học</h1>
                        <div className={isDisplayForm ? "col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-50" : ""}>
                            { /* Form Add LopHoc */}
                            {elmTaskFromLopHoc}

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
                                                        Thêm lớp học
                                                    </button>&nbsp;
                                                   </div>
                            {/* Task List*/}
                            <TaskListLopHoc tasksLopHoc={tasksLopHoc}
                                onDeleteLopHoc={this.onDeleteLopHoc}
                                onUpdateLopHoc={this.onUpdateLopHoc} />

                        </div>
                    </div>

                </div>
            </div>


            //    </div>



            //   </div>       


        );
    }
}



export default LopHoc;