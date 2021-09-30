import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l1.48 1.48A3 3 0 002 7v6a3 3 0 003 3h10l.28-.01 1.87 1.86a.5.5 0 00.7-.7l-1.48-1.48-3.7-3.7-1.05-1.05L10.5 9.8 8.94 8.23 7.77 7.06 4.72 4.01 2.85 2.15zm4.46 5.87c-.16 0-.31.04-.46.11C6.44 8.34 6 8.9 6 10s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 11.7.7c-.65.65-1.63.82-2.45.41C5.56 12.34 5 11.39 5 10c0-1.39.56-2.34 1.4-2.76l.1-.04.81.82zm3.42.59L6.13 4H15a3 3 0 013 3v6c0 .8-.31 1.52-.82 2.06l-5.64-5.64c.13-.73.48-1.12.8-1.29.44-.21.96-.13 1.3.22a.5.5 0 00.71-.7 2.12 2.12 0 00-2.45-.41c-.52.26-.93.72-1.17 1.37z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff20Filled = wrapIcon(rawSvg({}), 'ClosedCaptionOff20Filled');
export default ClosedCaptionOff20Filled;
      