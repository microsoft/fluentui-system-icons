import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zm5.83 2.02a.75.75 0 00-1.33.48v6.5a.75.75 0 101.5 0v-4.43l2.42 2.91a.75.75 0 001.16 0l2.42-2.9v4.42a.75.75 0 101.5 0v-6.5a.75.75 0 00-1.33-.48L12 12.07l-3.17-3.8z" fill={primaryFill} /></svg>;
}

const RatingMature24Filled = wrapIcon(rawSvg({}), 'RatingMature24Filled');
export default RatingMature24Filled;
      