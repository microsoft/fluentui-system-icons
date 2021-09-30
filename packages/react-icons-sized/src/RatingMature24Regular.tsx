import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.83 8.27a.75.75 0 00-1.33.48v6.5a.75.75 0 101.5 0v-4.43l2.42 2.91a.75.75 0 001.16 0l2.42-2.9v4.42a.75.75 0 101.5 0v-6.5a.75.75 0 00-1.33-.48L12 12.07l-3.17-3.8z" fill={primaryFill} /><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25z" fill={primaryFill} /></svg>;
}

const RatingMature24Regular = wrapIcon(rawSvg({}), 'RatingMature24Regular');
export default RatingMature24Regular;
      