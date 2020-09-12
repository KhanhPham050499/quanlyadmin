import React, { Component } from 'react';
import './App.css';
import LopHoc from './QuanlyLopHoc'
import MonHoc from './QuanLyMonHoc';
import Danhsachquanly from './Danhsachquanly';
import Giaovien from './QuanlyGiaovien'
import HocSinh from './QuanlyHocSinh'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';


class Menu extends Component {
    

    

    // onCancel = () => {
    //     this.setState({
    //         isDisplaySideBar: !this.state.isDisplaySideBar
    //     })
    // }

    render() {
       

        return (
            <Router>
                <div>
                    <div className='navbar-header'>
                        <h4 className='float-right'>admin</h4>
                    </div>

                    <input type='checkbox' id='check' />
                    <label htmlFor="check">
                        <i className="fas fa-bars" id="btn" onClick={this.onBar}></i>
                        <i className="fas fa-times" id="cancel" onClick={this.onCancel} ></i>
                    </label>

                    
                    <img className="img-bg" alt="Image" />
                    
                    <div className='sidebar'>
                        <header>Danh sách quản lý</header>
                        <ul>
                            <li>
                                <NavLink to='/danhsachquanly'><i className="far fa-question-circle"></i>Thông tin</NavLink>
                            </li>
                            <li>
                                <NavLink to='/quanlylophoc' activeStyle={{ background: '#1a2225' }}>Quản lý lớp học</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to='/quanlydiem' activeStyle={{ background: '#1a2225' }}>Quản lý điểm</NavLink>
                            </li> */}
                            <li>
                                <NavLink to='/quanlymonhoc' activeStyle={{ background: '#1a2225' }}>Quản lý môn học</NavLink>
                            </li>
                            <li>
                                <NavLink to='/quanlygiaovien' activeStyle={{ background: '#1a2225' }}>Quản lý giáo viên</NavLink>
                            </li>
                            <li>
                                <NavLink to='/quanlyhocsinh' activeStyle={{ background: '#1a2225' }}>Quản lý học sinh</NavLink>
                            </li>
                            <li>
                                <a>
                                <i className="fas fa-sign-out-alt"></i>
                                Đăng xuất</a>
                            </li>
                        </ul>
                    </div>
                  

                    <Route path="/danhsachquanly" component={Danhsachquanly} />
                    <Route path="/quanlymonhoc" component={MonHoc} />
                    <Route path="/quanlylophoc" component={LopHoc} />
                    <Route path="/quanlygiaovien" component={Giaovien} />
                    <Route path="/quanlyhocsinh" component={HocSinh} />

                </div>

            </Router>


        );
    }
}



export default Menu;