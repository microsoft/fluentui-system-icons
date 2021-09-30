import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM13.75 2C14.99 2 16 3 16 4.25v6.92A6.5 6.5 0 0011.02 18H8.75a.75.75 0 00-.1 1.5h2.66c.3.95.83 1.8 1.5 2.5H6.25C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h7.5zm2.75 12a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h3a.5.5 0 000-1H17v-3.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const PhoneScreenTime24Filled = wrapIcon(rawSvg({}), 'PhoneScreenTime24Filled');
export default PhoneScreenTime24Filled;
      