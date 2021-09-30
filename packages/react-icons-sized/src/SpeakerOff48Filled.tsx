import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M28 29.77l13.87 13.86a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76L13.23 15H9a5.25 5.25 0 00-5.25 5.25v7.5C3.75 30.65 6.1 33 9 33h4.7c1.17 0 2.3.43 3.18 1.22l8.2 7.36a1.75 1.75 0 002.92-1.3V29.77z" fill={primaryFill} /><path d="M28 22.7l-9.96-9.96 7.04-6.32A1.75 1.75 0 0128 7.72V22.7z" fill={primaryFill} /><path d="M36.19 30.88l-1.85-1.85a11.42 11.42 0 00-1.93-12.85l-.01-.02a1.25 1.25 0 011.7-1.83c.17.17 0 0 0 0v.01l.02.02.04.04a6.34 6.34 0 01.6.64 13.98 13.98 0 011.43 15.84z" fill={primaryFill} /><path d="M41 35.7l-1.84-1.84A21.33 21.33 0 0041.51 24c0-4.5-1.3-7.98-2.6-10.33a18.45 18.45 0 00-2.49-3.48l-.03-.03a1.25 1.25 0 011.72-1.81c.45.46 0 0 0 0h.01l.02.02a5.23 5.23 0 01.26.27 20.94 20.94 0 012.7 3.82A23.77 23.77 0 0144.01 24a23.77 23.77 0 01-3 11.7z" fill={primaryFill} /></svg>;
}

const SpeakerOff48Filled = wrapIcon(rawSvg({}), 'SpeakerOff48Filled');
export default SpeakerOff48Filled;
      