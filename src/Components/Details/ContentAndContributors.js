import React from 'react';
import {colors} from '../../theme/colors';

const ContentAndContributors = ({vibrant, forgroundColor}) => {
  return (
    <div className='pt-4'>
      <div className='border-t py-6'>
        <div>
          <h1 className='font-semibold text-md'>Content Score</h1>
        </div>
        <div className='w-full h-10 rounded-md overflow-hidden mt-2 relative'
          style={{backgroundColor: colors.primaryLight}}>
          <div className='h-full'
            style={{width: '88%', backgroundColor: vibrant}}></div>
          <div className='absolute top-0 left-0 h-full flex items-center px-2'
            style={{color: forgroundColor}}>
            88%
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className='font-semibold text-md'>Top Contributors</h1>
        </div>
        <div className='mt-3 flex-col flex gap-4'>
          {['John Doe', 'Jane Doe', 'John Doe',
            'Jane Doe', 'John Doe'].map((item, index) => {
            return (<div key={index} className='flex items-center gap-2'>
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <img src='https://www.themoviedb.org/t/p/w90_and_h90_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg'/>
              </div>
              <div>
                <h1 className='font-semibold text-sm'>304</h1>
                <h1 className='text-xs text-gray-500'>{item}</h1>
              </div>
            </div>);
          })}

        </div>
      </div>
    </div>
  );
};

export default ContentAndContributors;
