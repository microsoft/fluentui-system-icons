import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 12L2.3 3.27a.75.75 0 01.94-.98l.1.04 18 9c.44.22.52.77.26 1.12A6.47 6.47 0 0017.33 11L4.4 4.54l2.61 6.7 6.63.01c.35 0 .64.24.72.56-.47.26-.9.57-1.3.94H7.01l-2.6 6.71 6.74-3.38a6.52 6.52 0 00-.14 1.75l-7.68 3.84a.75.75 0 01-1.06-.85l.03-.1L5.7 12zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.5 0h2a.5.5 0 110 1H17a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v2.5z" fill={primaryFill} /></svg>;
}

const SendClock24Regular = wrapIcon(rawSvg({}), 'SendClock24Regular');
export default SendClock24Regular;
      