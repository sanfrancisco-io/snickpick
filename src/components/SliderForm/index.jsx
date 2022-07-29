import React from 'react';

import './style.scss';

const Input = ({ labelTitle, placeholder }) => {
  return (
    <>
      <label className='label'>{labelTitle}</label>
      <br />
      <input className='input' type='text' placeholder={placeholder} />
    </>
  );
};

const SliderForm = () => {
  return (
    <div className='sliderform_wrapper'>
      <div className='sliderform_wrapper__header'>
        <span>apply to our </span>
        <span className='sliderform_wrapper__header_lastchild'>
          closed beta.
        </span>
      </div>
      <div className='sliderform_wrapper__main_container'>
        <div>
          <Input labelTitle='Name' placeholder='Let’s not be strangers' />
        </div>
        <div>
          <Input labelTitle='Website' placeholder='Put the URL right there' />
        </div>
        <div>
          <Input labelTitle='Phone Number' placeholder='470000000' />
        </div>
        <div>
          <Input
            labelTitle='Email Address'
            placeholder='That’s right, we need your email'
          />
        </div>
      </div>
      <div className='button_wrapper'>
        <button className='send_form__button'>Send</button>
      </div>
    </div>
  );
};

export default SliderForm;
