import React, { Component } from 'react';
import { connect } from 'react-redux';


import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


class HandBook extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }

        return (
            <div className='section-share section-HandBook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Nha khoa nào tốt nhất quận Ninh Kiều 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Nha khoa nào tốt nhất quận Ninh Kiều 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Nha khoa nào tốt nhất quận Ninh Kiều 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Nha khoa nào tốt nhất quận Ninh Kiều 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Nha khoa nào tốt nhất quận Ninh Kiều 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Nha khoa nào tốt nhất quận Ninh Kiều 6</div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
