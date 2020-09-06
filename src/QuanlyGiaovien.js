import React, { Component } from 'react';
import './App.css';
import TaskFormGiaovien from './components/TaskFormGiaovien'
import TaskListGiaovien from './components/TaskListGiaovien'

class Giaovien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskGiaovien: [
                {
                    id: this.generateID(),
                    giaovien: 'Trương Quang Việt',
                    monday: 'Hóa',
                    chucvu: 'không',
                    email: 'tqviet@gmail.com',
                    sdt: '0166421341',

                },
                {
                    id: this.generateID(),
                    giaovien: 'Nguyễn Lan Anh',
                    monday: 'Toán',
                    chucvu: '10B1',
                    email: 'lananh@gmail.com',
                    sdt: '0166464576',

                },
                {
                    id: this.generateID(),
                    giaovien: 'Nguyễn Thị Lan',
                    monday: 'Ngữ Văn',
                    chucvu: '12B1',
                    email: 'nguyenthilan@gmail.com',
                    sdt: '0166424112',

                },
                {
                    id: this.generateID(),
                    giaovien: 'Lê Văn Tiến',
                    monday: 'Anh Văn',
                    chucvu: 'không',
                    email: 'levantien@gmail.com',
                    sdt: '0166421432',

                },
                {
                    id: this.generateID(),
                    giaovien: 'Nguyễn Quang Thuận',
                    monday: 'Vật lý',
                    chucvu: 'không',
                    email: 'nqthuan@gmail.com',
                    sdt: '0166424784',

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
        if (localStorage && localStorage.getItem('taskGiaovien')) {
            var taskGiaovien = JSON.parse(localStorage.getItem('taskGiaovien'));
            this.setState({
                taskGiaovien: taskGiaovien
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
        var { taskGiaovien } = this.state;
        data.id = this.generateID();
        if (data.tenkhoi !== "" && data.tenlop !== "" && data.giaovien !== "" && data.chuyenmon !== "") {
            taskGiaovien.push(data);
        }
        this.setState({
            taskGiaovien: taskGiaovien
        })
        localStorage.setItem('taskGiaovien', JSON.stringify(taskGiaovien));
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
        var { taskGiaovien } = this.state;
        var result = -1;
        taskGiaovien.forEach((task, index) => {
            if (task.id === id) {

                result = index;
            }
        });
        return result;
    }

    onDeleteGiaovien = (id) => {
        var { taskGiaovien } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            taskGiaovien.splice(index, 1);
            this.setState({
                taskGiaovien: taskGiaovien
            });
            localStorage.setItem('taskGiaovien', JSON.stringify(taskGiaovien));
        }
        this.onClose();
    }


    
    onUpdateGiaovien = (id) => {
        var { taskGiaovien } = this.state;
        var index = this.findIndex(id);
        var taskEditing = taskGiaovien[index];
        this.setState({
            taskEditing: taskEditing
        })
        this.onShowForm();
    }
    render() {

        var { isDisplayForm, taskGiaovien, taskEditing } = this.state;

        var elmTaskFromGiaovien = isDisplayForm
            ? <TaskFormGiaovien
                onCloseForm={this.onCloseForm}
                onSubmit={this.onSubmit}
                taskGiaovien={taskEditing}
            />
            : ""


        return (
            //   <div>
            // menu
            <div className='Form-app'>
                <div className="abc">
                    <div className="row">
                        <h1>Danh sách giáo viên giảng dạy</h1>
                        <div className={isDisplayForm ? "col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-50" : ""}>
                            { /* Form Add Giaovien */}
                            {elmTaskFromGiaovien}
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
                                                        Thêm giáo viên
                                                    </button>&nbsp;
                                                   </div>
                            {/* <button type="button" 
                                                            className="btn btn-danger mb-5 "
                                                            onClick = {this.onReset}>
                                                        
                                                        Reset All
                                                    </button> */}
                            {/* Task List*/}

            
                            <TaskListGiaovien taskGiaovien={taskGiaovien}
                                onDeleteGiaovien={this.onDeleteGiaovien}
                                onUpdateGiaovien={this.onUpdateGiaovien} />
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



export default Giaovien