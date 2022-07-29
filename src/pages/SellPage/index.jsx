import React from 'react';

import arrow from '../../assets/svg/arrow.svg';
import phone from '../../assets/svg/phone.svg';

import './style.scss';

const SellPage = () => {
  return (
    <div className='sellpage_wrapper'>
      <div className='sellpage_wrapper__leftside'>
        <div className='sellpage_wrapper__leftside__first_floor'>
          <span>stop</span>{' '}
          <span className='create_wrapper__leftside__first_floor_lastchild'>
            selling yourself.
          </span>
        </div>
        <div className='sellpage_wrapper__leftside__second_floor'>
          <span>
            There is more in life than prospection. Just focus on your craft and
            let us take care of the rest
          </span>
        </div>
      </div>
      <div className='sellpage_wrapper__rightside'>
        <div className='sellpage_wrapper__rightside__arrow_section'>
          <div className='sellpage_wrapper__rightside__first_floor'>
            <img width={48} height={48} src={arrow} alt={'arrow'} />
          </div>
          <div className='sellpage_wrapper__rightside__second_floor'>
            <span>dedicated landing page</span>
          </div>
          <div className='sellpage_wrapper__rightside__third_floor'>
            <span>
              When onboarding on snikpic, you will have your own dedicated and
              shareable landing page optimized for conversion.
            </span>
          </div>
        </div>
        <div className='sellpage_wrapper__rightside__phone_section'>
          <div className='sellpage_wrapper__rightside__first_floor'>
            <img width={48} height={48} src={phone} alt={'phone'} />
          </div>
          <div className='sellpage_wrapper__rightside__second_floor'>
            <span>purchasable prospect</span>
          </div>
          <div className='sellpage_wrapper__rightside__third_floor'>
            <span>
              Use snikpic’s experience running ads and only buy from us prospect
              who have shown direct interest in your profile. We take care of
              the rest
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
