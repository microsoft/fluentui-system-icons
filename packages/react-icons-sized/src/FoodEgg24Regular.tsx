import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 12.25c0-.41.34-.75.75-.75a.75.75 0 000-1.5C11.01 10 10 11 10 12.25a.75.75 0 001.5 0z" fill={primaryFill} /><path d="M7 12.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm5.5-4a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /><path d="M6.21 6.5A8.38 8.38 0 0113.5 2c4.76 0 8.5 4.22 8.5 9.28 0 .56-.05 1.12-.14 1.66-.05.34-.04.7.03 1.08a6.75 6.75 0 01-9.62 7.3 4.4 4.4 0 00-2.57-.4c-.3.06-.63.08-.95.08C4.97 21 2 17.7 2 13.75a7.38 7.38 0 013.16-6.14c.45-.3.81-.68 1.05-1.12zm7.29-3a6.88 6.88 0 00-5.97 3.72A4.8 4.8 0 016 8.85a5.88 5.88 0 00-2.5 4.9c0 3.23 2.4 5.75 5.25 5.75.25 0 .5-.02.73-.05a5.9 5.9 0 013.45.51 5.25 5.25 0 007.48-5.67 4.64 4.64 0 01-.03-1.6c.08-.46.12-.93.12-1.41 0-4.37-3.2-7.78-7-7.78z" fill={primaryFill} /></svg>;
}

const FoodEgg24Regular = wrapIcon(rawSvg({}), 'FoodEgg24Regular');
export default FoodEgg24Regular;
      