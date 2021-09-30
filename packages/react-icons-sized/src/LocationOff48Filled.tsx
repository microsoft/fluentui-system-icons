import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M43.63 41.87a1.25 1.25 0 01-1.76 1.76l-8.15-8.15-6.8 7.23a4 4 0 01-5.83 0L11 32h.04A16.93 16.93 0 017 21c0-3.48 1.04-6.7 2.83-9.4L4.37 6.13a1.25 1.25 0 111.76-1.76l37.5 37.5zM18.32 20.08a6 6 0 007.6 7.6l-7.6-7.6z" fill={primaryFill} /><path d="M13.19 7.88l8.55 8.56a6 6 0 017.82 7.82l7.56 7.55A17 17 0 0013.19 7.88z" fill={primaryFill} /></svg>;
}

const LocationOff48Filled = wrapIcon(rawSvg({}), 'LocationOff48Filled');
export default LocationOff48Filled;
      