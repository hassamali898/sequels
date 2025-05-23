import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from '../../Styles/icons';
import {colors} from '../../theme/colors';

const Casts = () => {
  return (
    <div className='my-4 w-full'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='font-semibold text-2xl'>Top Billed Cast</h2>
        <Link className='text-sm font-light' to='#'>
          <div className='flex gap-2 items-center underline'
            style={{color: colors.primary}}>
          Full Cast & Crew <Icon name={'arrow-right'}/>
          </div>
        </Link>
      </div>
      <div className='relative'>
        <div className='flex gap-4 overflow-x-auto w-full'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          // eslint-disable-next-line react/jsx-key
            return <Link to={'#'} className='py-6'>
              <div className='w-36 rounded-md overflow-hidden shadow-lg'>
                <div className='h-44 bg-gray-200 overflow-hidden'>
                  <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3IQQB5SIMyF5d6Tu4pMKU2FQehP.jpg'
                    className='object-cover object-center'/>
                </div>
                <div className='p-3 text-sm'>
                  <h4 className='font-semibold'>
              Douglas Booth
                  </h4>
                  <div className='font-light text-xs'>Romeo Montague</div>
                </div>
              </div>
            </Link>;
          })}
          <div className='py-6'>
            <button
              className='w-36 rounded-md overflow-hidden border h-full mr-5
            flex justify-center items-center flex-col'>
              <div className='mb-2 p-2 rounded-full border'>
                <Icon name={'arrow-right'}/>
              </div>
              <div className='text-xs font-semibold'
                style={{color: colors.primary}}>
                View More</div>
            </button>
          </div>
        </div>
        <div className='absolute h-full top-0 right-0 md:w-6
        bg-gradient-to-l from-white'/>
      </div>
    </div>
  );
};

export default Casts;
