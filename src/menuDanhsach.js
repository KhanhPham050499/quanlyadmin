import React, { Component } from 'react';
import './App.css';
import LopHoc from './QuanlyLopHoc'
import MonHoc from './QuanLyMonHoc';
import Diem from './QuanlyDiem';
import { BrowserRouter as Router, Route, Link , NavLink} from 'react-router-dom';
import Danhsachquanly from './Danhsachquanly';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplaySideBar: false,

        }
    }

    onBar = () => {
        this.setState({
            isDisplaySideBar: !this.state.isDisplaySideBar
        })
    }

    // onCancel = () => {
    //     this.setState({
    //         isDisplaySideBar: !this.state.isDisplaySideBar
    //     })
    // }

    render() {


        return (
            <Router>
                <div className='opacity-body'>
                    <div className='navbar-header'>
                        <div className='float-left'>
                            <input type='checkbox' id='check' />
                            <label htmlFor="check">
                                <i className="fas fa-bars" id="btn" onClick={this.onBar}></i>
                                <i className="fas fa-times" id="cancel" onClick={this.onCancel} ></i>
                            </label>
                            <div class="row" style={{ marginTop: '100px'}}>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '0'}}>
                        <div className='box' style={{ background: '#00c0ef' }}>
                            <div style={{ height: '120px' }}>
                                2
                                <i class="fas fa-users icon-box"></i>
                            </div>
                            <div>
                                Chi tiết
                             <i class="fas fa-arrow-circle-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '0'}}>
                        <div className='box' style={{ background: '#00a65a' }}>
                            <i class="fas fa-book-open icon-box"></i>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '0'}}>
                        <div className='box' style={{ background: '#f39c11' }}>
                            <i class="fas fa-user-plus icon-box"></i>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '0'}}>
                        <div className='box' style={{ background: '#dd4c39' }}>
                            <i class="fas fa-chart-pie icon-box"></i>
                        </div>
                    </div>
                </div>
                            <div className='sidebar'>
                                <header>Trang quản trị</header>
                                <ul>
                                    <li>
                                        <NavLink to='/danhsachquanly' activeStyle = { {background: '#1a2225'}}>Danh sách quản lý</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/quanlynamhoc' activeStyle = { {background: '#1a2225'}}>Quản lý năm học</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/quanlyhocky' activeStyle = { {background: '#1a2225'}}>Quản lý học kỳ</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/quanlylophoc' activeStyle = { {background: '#1a2225'}}>Quản lý lớp học</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/quanlydiem' activeStyle = { {background: '#1a2225'}}>Quản lý điểm</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/quanlymonhoc' activeStyle = { {background: '#1a2225'}}>Quản lý môn học</NavLink>
                                    </li>


                                </ul>
                            </div>

                        <h4 className='float-right'>admin</h4>

                    <Route path="/danhsachquanly" component={Danhsachquanly} />
                    <Route path="/quanlydiem" component={Diem} />
                    <Route path="/quanlymonhoc" component={MonHoc} />
                    <Route path="/quanlylophoc" component={LopHoc} />
                        </div>
                    </div>
                </div>

            </Router>


        );
    }
}



export default Menu;