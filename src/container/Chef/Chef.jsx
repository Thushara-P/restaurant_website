import React from 'react';
import images from '../../constants/images';
import { SubHeading, MenuItem } from '../../components';
import './Chef.css';

const Chef = () => (
 <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word"/>
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote"/>
            <p className="p__opensans">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus facilis iste nesciunt 
              reiciendis deserunt optio sint ducimus aliquid quas accusantium aperiam eveniet, 
              sapiente ab reprehenderit, dolorem ullam voluptatibus consequatur!
            </p>
          </div>

          <div className='app__chef-sign'>
            <p>Kevin Luo</p>
            <p className="p__opensans">
              Chef & Founder
            </p>
            <img src={images.sign} alt="sign"/>
          </div>
        </div>
    </div>
 </div>
);

export default Chef;
