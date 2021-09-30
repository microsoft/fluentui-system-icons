import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v3a.5.5 0 01-1 0v-3A2.5 2.5 0 014.5 2h3a.5.5 0 010 1h-3z" fill={primaryFill} /><path d="M4.5 17A1.5 1.5 0 013 15.5v-3a.5.5 0 00-1 0v3A2.5 2.5 0 004.5 18h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M17 4.5c0-.83-.67-1.5-1.5-1.5h-3a.5.5 0 010-1h3A2.5 2.5 0 0118 4.5v3a.5.5 0 01-1 0v-3z" fill={primaryFill} /><path d="M15.5 17c.83 0 1.5-.67 1.5-1.5v-3a.5.5 0 011 0v3a2.5 2.5 0 01-2.5 2.5h-3a.5.5 0 010-1h3z" fill={primaryFill} /><path d="M7 11.5a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /><path d="M4.95 9.72a.5.5 0 01-.9-.44l.45.22-.45-.22v-.01l.01-.01a2.1 2.1 0 01.08-.14l.25-.38A6.85 6.85 0 0110 6a6.85 6.85 0 015.62 2.74 5.13 5.13 0 01.33.52v.01l-.44.23.45-.22a.5.5 0 01-.9.45V9.7a2.5 2.5 0 00-.25-.39A5.86 5.86 0 0010 7a5.86 5.86 0 00-4.8 2.32 4.14 4.14 0 00-.24.39l-.01.01z" fill={primaryFill} /></svg>;
}

const EyeTrackingOnFilled = wrapIcon(rawSvg({}), 'EyeTrackingOnFilled');
export default EyeTrackingOnFilled;
      