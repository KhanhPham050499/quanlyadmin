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
                    malop: 'L10B3',
                    tenkhoi: 'Khối 10',
                    tenlop: 'Lớp 10B3',
                    giaovien: 'Nguyễn Văn Linh',
                    chuyenmon: 'Toán'
                },
                {
                    id: this.generateID(),
                    malop: 'L10B5',
                    tenkhoi: 'Khối 10',
                    tenlop: 'Lớp 10B5',
                    giaovien: 'Hoàng Thị Hà',
                    chuyenmon: 'Anh văn'
                },
                {
                    id: this.generateID(),
                    malop: 'L10B6',
                    tenkhoi: 'Khối 10',
                    tenlop: 'Lớp 10B6',
                    giaovien: 'Nguyễn Văn Tuấn',
                    chuyenmon: 'Ngữ Văn'
                },
                {
                    id: this.generateID(),
                    malop: 'L11B1',
                    tenkhoi: 'Khối 11',
                    tenlop: 'Lớp 11B1',
                    giaovien: 'Trần Thu Hoài',
                    chuyenmon: 'Hóa học'
                },
                {
                    id: this.generateID(),
                    malop: 'L11B2',
                    tenkhoi: 'Khối 11',
                    tenlop: 'Lớp 10B2',
                    giaovien: 'Phạm Văn Khánh',
                    chuyenmon: 'Vật lý'
                },
                {
                    id: this.generateID(),
                    malop: 'L12B4',
                    tenkhoi: 'Khối 12',
                    tenlop: 'Lớp 12B4',
                    giaovien: 'Lê Bá Cường',
                    chuyenmon: 'Sinh học'
                }

            ],
            isDisplayForm: false,
        }
    }
//  onReset = () => {
//         var tasksLopHoc = [
//             {
//                 id: this.generateID(),
//                 malop: 'L10B3',
//                 tenkhoi: 'Khối 10',
//                 tenlop: 'Lớp 10B3',
//                 giaovien: 'Nguyễn Văn Linh',
//                 chuyenmon: 'Toán'
//             },
//             {
//                 id: this.generateID(),
//                 malop: 'L10B5',
//                 tenkhoi: 'Khối 10',
//                 tenlop: 'Lớp 10B5',
//                 giaovien: 'Hoàng Thị Hà',
//                 chuyenmon: 'Anh văn'
//             },
//             {
//                 id: this.generateID(),
//                 malop: 'L10B6',
//                 tenkhoi: 'Khối 10',
//                 tenlop: 'Lớp 10B6',
//                 giaovien: 'Nguyễn Văn Tuấn',
//                 chuyenmon: 'Ngữ Văn'
//             },
//             {
//                 id: this.generateID(),
//                 malop: 'L11B1',
//                 tenkhoi: 'Khối 11',
//                 tenlop: 'Lớp 11B1',
//                 giaovien: 'Trần Thu Hoài',
//                 chuyenmon: 'Hóa học'
//             },
//             {
//                 id: this.generateID(),
//                 malop: 'L11B2',
//                 tenkhoi: 'Khối 11',
//                 tenlop: 'Lớp 10B2',
//                 giaovien: 'Phạm Văn Khánh',
//                 chuyenmon: 'Vật lý'
//             },
//             {
//                 id: this.generateID(),
//                 malop: 'L12B4',
//                 tenkhoi: 'Khối 12',
//                 tenlop: 'Lớp 12B4',
//                 giaovien: 'Lê Bá Cường',
//                 chuyenmon: 'Sinh học'
//             }

//         ]
//         this.setState({
//             tasksLopHoc: tasksLopHoc
//         })
//         localStorage.setItem('tasksLopHoc', JSON.stringify(tasksLopHoc));
//     }




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
        var { tasksLopHoc } = this.state;
        if (data.id === '') {
            data.id = this.generateID();
            tasksLopHoc.push(data);

        } else {
            //Editing   
                var index = this.findIndex(data.id);
                tasksLopHoc[index] = data;

        }
        this.setState({
            tasksLopHoc: tasksLopHoc,
            taskEditing: null
        })
        localStorage.setItem('tasksLopHoc', JSON.stringify(tasksLopHoc));

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
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        })
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
                                                   {/* <button type="button" 
                                                            className="btn btn-danger mb-5 "
                                                            onClick = {this.onReset}>
                                                        
                                                        Reset All
                                                    </button> */}
                            {/* Task List*/}
                            <TaskListLopHoc tasksLopHoc={tasksLopHoc}
                                onDeleteLopHoc={this.onDeleteLopHoc}
                                onUpdateLopHoc={this.onUpdateLopHoc} />
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



export default LopHoc;