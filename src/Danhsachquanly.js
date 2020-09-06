import React, { Component } from 'react';

class Danhsachquanly extends Component {
    render() {
        return (
            <div className='Form-box'>
           

                <div class="row" style={{ marginTop: '100px' }}>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" style={{ padding: '0' }}>
                        <div className='box' style={{ background: '#00c0ef' }}>
                            <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div class="font-size-name">
                                    <p>3</p>
                                    <h4>Giáo viên</h4>
                                </div>
                                <div>
                                    <i class="fas fa-users icon-box"></i>
                                </div>
                            </div>
                            <div style={{ color: 'white', fontSize: '15px' , cursor:'pointer' }}>
                                Chi tiết
                             <i class="fas fa-arrow-circle-right" style={{ marginLeft: '5px' }}></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" style={{ padding: '0' }}>
                        <div className='box' style={{ background: '#00a65a' }}>
                            <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div class="font-size-name">
                                    <p>5</p>
                                    <h4>Môn học</h4>
                                </div>
                                <div>
                                    <i class="fas fa-book-open icon-box"></i>
                                </div>
                            </div>
                            <div style={{ color: 'white', fontSize: '15px', cursor:'pointer' }}>
                                Chi tiết
                             <i class="fas fa-arrow-circle-right" style={{ marginLeft: '5px' }}></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" style={{ padding: '0' }}>
                        <div className='box' style={{ background: '#f39c11' }}>
                            <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div class="font-size-name">
                                    <p>20</p>
                                    <h4>Học sinh</h4>
                                </div>
                                <div>
                                    <i class="fas fa-user-plus icon-box"></i>
                                </div>
                            </div>
                            <div style={{ color: 'white', fontSize: '15px' , cursor:'pointer' }}>
                                Chi tiết
                             <i class="fas fa-arrow-circle-right" style={{ marginLeft: '5px' }}></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" style={{ padding: '0' }}>
                        <div className='box' style={{ background: '#dd4c39' }}>
                            <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div class="font-size-name">
                                    <p>1</p>
                                    <h4>Tin tức</h4>
                                </div>
                                <div>
                                    <i class="fas fa-chart-pie icon-box"></i>
                                </div>
                            </div>
                            <div style={{ color: 'white', fontSize: '15px' , cursor:'pointer' }}>
                                Chi tiết
                             <i class="fas fa-arrow-circle-right" style={{ marginLeft: '5px' }}></i>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Danhsachquanly;