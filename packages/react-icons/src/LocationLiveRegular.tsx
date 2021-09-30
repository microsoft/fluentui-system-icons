import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.53 3.01L9 3a7 7 0 016.98 7.47.5.5 0 101 .07L17 10A8 8 0 008.46 2a.5.5 0 10.07 1z" fill={primaryFill} /><path d="M8 4.98a.5.5 0 01.52-.47 6.25 6.25 0 015.97 5.97.5.5 0 11-1 .04A5.25 5.25 0 008.49 5.5.5.5 0 018 4.98z" fill={primaryFill} /><path d="M7.5 12.62a1.13 1.13 0 100-2.25 1.13 1.13 0 000 2.25z" fill={primaryFill} /><path d="M4.32 14.68l2.83 2.83a.5.5 0 00.7 0l2.83-2.83a4.5 4.5 0 10-6.36 0zm.7-.7a3.5 3.5 0 114.95 0L7.5 16.44l-2.47-2.48z" fill={primaryFill} /></svg>;
}

const LocationLiveRegular = wrapIcon(rawSvg({}), 'LocationLiveRegular');
export default LocationLiveRegular;
      