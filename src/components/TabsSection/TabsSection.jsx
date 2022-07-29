import React from 'react';

import './style.scss';

const TabsSection = ({
  firstFloorTitle,
  firstFloorSubTitle,
  secondFloorText,
  thirdFloorText,
  imageSrc,
}) => {
  return (
    <div className='create_wrapper'>
      <div className='create_wrapper__leftside'>
        <div className='create_wrapper__leftside__first_floor'>
          <div>
            <span>{firstFloorTitle}</span>{' '}
            <span className='create_wrapper__leftside__first_floor_lastchild'>
              {firstFloorSubTitle}
            </span>
          </div>
        </div>
        <div className='create_wrapper__leftside__second_floor'>
          <span>{secondFloorText}</span>
        </div>
        <div className='create_wrapper__leftside__third_floor'>
          <div>
            <span className='create_wrapper__leftside__third_floor__title'>
              REPLACES
            </span>
          </div>
          <div className='create_wrapper__leftside__third_floor__wrapper'>
            {thirdFloorText.map((item) => (
              <span
                key={item}
                className='create_wrapper__leftside__third_floor__wrapper_children'
              >
                {item}
              </span>
            ))}
          </div>
          <div className='create_wrapper__leftside__fourth_floor'>
            <button className='create_wrapper__leftside__fourth_floor_button'>
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className='create_wrapper__rightside'>
        <img
          src={imageSrc}
          width={586}
          height={475}
          alt={'info_about_create'}
        />
      </div>
    </div>
  );
};

export default TabsSection;
