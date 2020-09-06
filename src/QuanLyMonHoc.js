import React, { Component } from 'react';
import './App.css';
import TaskFormMonHoc from './components/TaskFormMonHoc'
import TaskListMonHoc from './components/TaskListMonHoc'

class MonHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksS: [
                {
                    id:this.generateID(),
                    monhoc:'Toán'

                },
                {
                    id:this.generateID(),
                    monhoc:'Anh văn'

                },
                {
                    id:this.generateID(),
                    monhoc:'Vật lý'

                },
                {
                    id:this.generateID(),
                    monhoc:'Ngữ văn'

                },
                {
                    id:this.generateID(),
                    monhoc:'Hóa học'

                }
            ],
            isDisplayForm: false
        }
    }
    
    onToggleForm = () => {

        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })

    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true
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
    // onReset = () => {
    //     var tasksS = [
    //         {
    //             id:this.generateID(),
    //             monhoc:'Toán'

    //         },
    //         {
    //             id:this.generateID(),
    //             monhoc:'Anh văn'

    //         },
    //         {
    //             id:this.generateID(),
    //             monhoc:'Vật lý'

    //         },
    //         {
    //             id:this.generateID(),
    //             monhoc:'Ngữ văn'

    //         },
    //         {
    //             id:this.generateID(),
    //             monhoc:'Hóa học'

    //         }

    //     ]
    //     this.setState({
    //         tasksS: tasksS
    //     })
    //     localStorage.setItem('tasksS', JSON.stringify(tasksS));
    // }
    /* LocalStorage  */
    componentDidMount() {
        if (localStorage && localStorage.getItem('tasksS')) {
            var tasksS = JSON.parse(localStorage.getItem('tasksS'));
            this.setState({
                tasksS: tasksS
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
        var { tasksS } = this.state;
        data.id = this.generateID();
        if (data.monhoc !== '') {
            tasksS.push(data);
        }
        this.setState({
            tasksS: tasksS
        })
        localStorage.setItem('tasksS', JSON.stringify(tasksS));
        this.onCloseForm();
    }




    findIndex = (id) => {
        var { tasksS } = this.state;
        var result = -1;
        tasksS.forEach((task, index) => {
            if (task.id === id) {

                result = index;
            }
        });
        return result;
    }

    onUpdateMonHoc = (id) => {
        var { tasksS } = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasksS[index];
        this.setState({
            taskEditing: taskEditing
        })
        this.onShowForm();
    }

    onDeleteMonHoc = (id) => {
        var { tasksS } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasksS.splice(index, 1);
            this.setState({
                tasksS: tasksS
            });
            localStorage.setItem('tasksS', JSON.stringify(tasksS));
        }
        this.onClose();
    }
    render() {

        var { tasksS , isDisplayForm, taskEditing} = this.state;
        
        var elmTaskFromMonHoc = isDisplayForm
            ? <TaskFormMonHoc
                onCloseForm={this.onCloseForm}
                onSubmit={this.onSubmit}
                tasksS={taskEditing}
            />
            : ""

        return (



            <div className='Form-app-monhoc'>
                <div className="abc">
                    <div className="row">
                        <h1 className='text-center'>Quản lý môn học</h1>
                        <div className={isDisplayForm ? "col-xs-6 col-sm-4 col-md-4 col-lg-4 mt-50" : ""}>
                            { /* Form Add LopHoc */}
                            {elmTaskFromMonHoc}

                        </div>

                        <div className={isDisplayForm
                            ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-50"
                            : "col-xs-12 col-sm-8 col-md-6 col-lg-6 mt-50"}
                        >

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ paddingLeft: 0 }}>
                                <button type="button"

                                    className="btn btn-primary mb-5 "
                                    onClick={this.onToggleForm}
                                >
                                    <i className="fas fa-plus mr-5"></i>
                                                        Thêm môn học
                                                    </button>
                                                   </div>
                            <br />
                            <br />
                            {/* <button type="button" 
                                                    className="btn btn-danger mb-5 "
                                                    onClick = {this.onReset}>
                                                 
                                                Làm mới điểm
                                            </button> */}

                            <div className="panel panel-primary panel-class">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Danh sách môn học</h3>
                                </div>
                                <div className="panel-body">
                                    {/* Task List*/}
                                    <TaskListMonHoc tasksS={tasksS}
                                        onUpdateMonHoc={this.onUpdateMonHoc}
                                        onDeleteMonHoc={this.onDeleteMonHoc} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>






        );
    }
}



export default MonHoc;