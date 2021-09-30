import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 2.75c-.83 0-1.5.67-1.5 1.5v15.5c0 .83.67 1.5 1.5 1.5h5.94a6.5 6.5 0 017.06-10.01V4.25c0-.83-.67-1.5-1.5-1.5H6.25zm2.25 10.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 9.75a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm3.5-5.5a.5.5 0 01-.5.5h-4.8l1.65 1.65a.5.5 0 01-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5a.5.5 0 01.7.7L15.71 17h4.79c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
}

const DoorArrowLeft24Filled = wrapIcon(rawSvg({}), 'DoorArrowLeft24Filled');
export default DoorArrowLeft24Filled;
      