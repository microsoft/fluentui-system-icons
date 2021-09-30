import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.03A5.01 5.01 0 018 1c2.76 0 5 2.25 5 5.03v3.59c0 .79-.64 1.43-1.43 1.43h-1.43a.72.72 0 01-.71-.72V7.46c0-.4.32-.72.71-.72h1.79v-.71A3.94 3.94 0 008 2.08a3.94 3.94 0 00-3.93 3.95v.71h1.79c.4 0 .71.33.71.72v2.87c0 .4-.32.72-.71.72H4.43c-.12 0-.24-.01-.36-.04v.22c0 .86.66 1.56 1.5 1.61h.91a1.6 1.6 0 013.13.54 1.61 1.61 0 01-3.13.54h-.8A2.68 2.68 0 013 11.37V6.03z" fill={primaryFill} /></svg>;
}

const Headset16Filled = wrapIcon(rawSvg({}), 'Headset16Filled');
export default Headset16Filled;
      