import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import Menu from './menu'

class Login extends Component {
    render() {
        return (
            <Router>
                <div>
                    <section></section>

                    <div className="login-box">
                        <h1>Đăng nhập hệ thống quản lý điểm</h1>
                        <div className="textbox">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>

                        <div className="textbox">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>

                        <Link to ='/login' className='btn'>Đăng nhập</Link>
                    </div>
                </div>

                <Route path='/login' component={Menu}/>
            </Router>



        );
    }
}

export default Login;