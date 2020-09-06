import React, { Component } from 'react';
import './App.css';
import Teacher from './Teacher'


class App extends Component {
    
    

        render(){
            
        return (
            <div>
            <input type='checkbox' id='check'/>
            <label htmlFor ="check">
                <i className= "fas fa-bars" id= "btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className='sidebar'>
                <header>Menu</header>
                <ul>
                    <li><a>Trang chủ</a></li>
                    <li><a>Đăng nhập</a></li>
                    <li><a>Giới thiệu</a></li>
                   
                </ul>
            </div>
            <section>
                <h1>Chào mừng đến với website  Trường</h1>
            </section>
        </div> 
            
                
            
        );
    }
}



export default App;