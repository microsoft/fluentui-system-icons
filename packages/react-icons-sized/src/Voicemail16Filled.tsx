import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 7.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /><path d="M9.5 7.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /><path d="M3.5 3C2.67 3 2 3.67 2 4.5V11c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5h-9zm4 4.75A1.75 1.75 0 115.75 6h4.5a1.75 1.75 0 11-1.58 1H7.33c.11.23.17.48.17.75z" fill={primaryFill} /></svg>;
}

const Voicemail16Filled = wrapIcon(rawSvg({}), 'Voicemail16Filled');
export default Voicemail16Filled;
      