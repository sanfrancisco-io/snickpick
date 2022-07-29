import React from 'react';

import priceImage from '../../assets/svg/price2.svg';

import './style.scss';

const PricePage = () => {
  const tagsArr = [
    {
      text: 'Unlimited features',
      styles: {
        backgroundColor: '#FFF1EF',
        color: '#FFD1CA',
        border: '1px solid #FFD1CA',
      },
    },
    {
      text: 'Unlimited members',
      styles: {
        backgroundColor: '#FFF8EE',
        color: '#FFCA7A',
        border: '1px solid #FFCA7A',
      },
    },
    {
      text: 'Unlimited workflows',
      styles: {
        backgroundColor: '#ECFFF4',
        color: '#98FAC0',
        border: '1px solid #98FAC0',
      },
    },
    {
      text: 'Unlimited calendars',
      styles: {
        backgroundColor: '#F1FEFF',
        color: '#6EE1E9',
        border: '1px solid #6EE1E9',
      },
    },
    {
      text: 'Unlimited meeting',
      styles: {
        backgroundColor: '#FCF5FF',
        color: '#EBBDFF',
        border: '1px solid #EBBDFF',
      },
    },
  ];

  return (
    <div className='pricepage_wrapper'>
      <div className='pricepage_wrapper__leftside'>
        <div className='pricepage_wrapper__leftside__title'>
          <span>one simple</span>{' '}
          <span className='pricepage_wrapper__leftside__title_lastchild'>
            pricing.
          </span>
        </div>
        <div className='pricepage_wrapper__leftside__tags'>
          {tagsArr.map((item) => (
            <div key={item.text}>
              <span
                style={item.styles}
                className='pricepage_wrapper__leftside__tags_children'
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <div className='pricepage_wrapper__leftside__button'>
          <button>Sign up</button>
        </div>
      </div>
      <div className='pricepage_wrapper__rightside'>
        <img width={699} height={926} src={priceImage} alt='priceImage' />
      </div>
    </div>
  );
};

export default PricePage;
