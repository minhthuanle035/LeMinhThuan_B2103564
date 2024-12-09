import React, { Component } from 'react';
import { connect } from 'react-redux';


import { FormattedMessage } from 'react-intl';




class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về bác sĩ Minh Thuận
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/-fQ3dxoTeNs" title="📣 CHƯƠNG TRÌNH TƯ VẤN TRỰC TUYẾN: ÁP DỤNG CÔNG NGHỆ TIÊN TIẾN TRONG QUẢN LÝ ĐÁI THÁO ĐƯỜNG ❤️❤️" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>Nhằm hưởng ứng Ngày Đái tháo đường Thế giới 14/11, Trung tâm truyền thông và Khoa Nội tiết Bệnh viện Đại học Y Dược TP. Hồ Chí Minh phối hợp với Công ty TNHH Embecta Việt Nam tổ chức chương trình tư vấn trực tuyến với chủ đề: “Áp dụng công nghệ tiên tiến trong quản lý đái tháo đường: Chăm sóc sức khỏe toàn diện và tinh thần vững vàng”, nhằm hướng dẫn người bệnh áp dụng công nghệ tiên tiến và kiến thức về lối sống lành mạnh để quản lý toàn diện bệnh đái tháo đường.</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
