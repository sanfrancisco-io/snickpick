import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import ArrowLeft from '../../assets/svg/leftArrow.svg';
import ArrowRight from '../../assets/svg/rightArrow.svg';
import profilePhoto from '../../assets/svg/profile_photo.svg';
import messageIcon from '../../assets/svg/message_icon.svg';

import './style.scss';
import SliderForm from '../../components/SliderForm';

const SliderItem = () => {
  return (
    <div className={'slider_wrapper'}>
      <div className={'slider_wrapper__leftside'}>
        <img src={profilePhoto} width={310} height={310} alt='profile' />
      </div>
      <div className={'slider_wrapper__rightside'}>
        <div className={'slider_wrapper__rightside_title'}>
          <span>Christophe Bourand, ChrisWebMarketing</span>
        </div>
        <div className={'slider_wrapper__rightside_content'}>
          <span>
            Juggling with all my clients and making sure everything was done
            correctly took me a lot of energy. Not did Snikpic enabled me to
            tremendously release that extra useless work, but I quickly found
            myself able to take on much more clients than I originally could{' '}
          </span>
        </div>
        <div className={'slider_wrapper__rightside_icon'}>
          <img src={messageIcon} width={64} height={64} alt='icon' />
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  const sliderArr = [1, 2, 3, 5];

  return (
    <div className={'slider_main'}>
      <div className='container'>
        <div className={`sliderWrapper`}>
          <div className={'prev'}>
            <img src={ArrowLeft} alt={'ArrowLeft'} />
          </div>
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
            }}
            modules={[Navigation]}
            className='mySwiper'
          >
            {sliderArr.map((item) => (
              <SwiperSlide key={item}>
                <SliderItem />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={'next'}>
            <img src={ArrowRight} alt={'leftArrow'} />
          </div>
        </div>
      </div>
      <div className={'sliderform_section'}>
        <SliderForm />
      </div>
    </div>
  );
};

export default Slider;
