import React, { useState } from 'react';

import mainInfoImage from '../../assets/svg/main-photo.svg';
import star from '../../assets/svg/start.svg';
import companies from '../../assets/svg/compan.svg';

import './style.scss';

const MainPage = () => {
  const [emailValue, setEmailValue] = useState('');

  return (
    <div className='mainpage_wrapper'>
      <div className='mainpage_wrapper__leftside'>
        <div className='mainpage_wrapper__leftside__first_floor'>
          <div>
            <span>your agency.</span>
          </div>
          <div>
            <span className='mainpage_wrapper__leftside__first_floor_lastchild'>
              in a box.
            </span>
          </div>
        </div>
        <div className='mainpage_wrapper__leftside__second_floor'>
          <span>All of your work in one place. And much more</span>
        </div>
        <div className='mainpage_wrapper__leftside__third_floor'>
          <div>
            <input
              className='mainpage_wrapper__leftside__third_floor__input'
              placeholder='Enter your email address'
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
          <div className='mainpage_wrapper__leftside__third_floor__action'>
            <div>
              <button className='mainpage_wrapper__leftside__third_floor__action_button'>
                Sign up
              </button>
            </div>
            <div>
              <span className='mainpage_wrapper__leftside__third_floor__action_text'>
                AND BE PART OF <br /> THE CLOSED BETA
              </span>
            </div>
          </div>
        </div>
        <div className='mainpage_wrapper__leftside__fourth_floor'>
          <div>
            <img
              className='mainpage_wrapper__leftside__fourth_floor__star'
              src={star}
              alt={'star'}
            />
          </div>
          <div>
            <span className='mainpage_wrapper__leftside__fourth_floor__text'>
              Based on 100+ marketers reviews on
            </span>
          </div>
        </div>
        <div className='mainpage_wrapper__leftside__fifth_floor'>
          <img src={companies} alt='companies' />
        </div>
      </div>
      <div className='mainpage_wrapper__rightside'>
        <img src={mainInfoImage} alt='main-info' />
      </div>
    </div>
  );
};

export default MainPage;
