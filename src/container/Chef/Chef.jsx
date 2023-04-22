import React from 'react';
import {images,data} from '../../constants';
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img ap__wrapper_img_reverse">
      <img src={images.chef} alt="chef image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">"Masala" is an Indian term for a blend of ground spices or a mixture of spices used in cooking.</p>
        </div>
        <p className="p__opensans">It varies regionally and commonly includes cumin, coriander, turmeric, and cardamom.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
