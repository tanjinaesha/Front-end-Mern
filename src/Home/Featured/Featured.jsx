import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import featureImg from'../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='feature-item text-white bg-fixed pt-10 '>
           <SectionTitle subHeading="check it" heading="featured items">
           

           </SectionTitle>
           <div className='md:flex justify-center items-center py-8 px-16'>
                       <div><img src={featureImg} alt="" /></div>
                       
                        <div className='md:ml-10'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex repudiandae natus quisquam a minima reiciendis, dicta consequatur molestias nostrum ipsam rem illum illo reprehenderit esse id perferendis sapiente atque!
                    </p>
                    <button className='btn btn-outline'>Order</button>
                   </div>
                 
                  
           </div>
        </div>
    );
};

export default Featured;