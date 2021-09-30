import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM13.75 2C14.99 2 16 3 16 4.25v6.92a6.5 6.5 0 00-5 6.33H8.75a.75.75 0 000 1.5h2.42a6.49 6.49 0 001.64 3H6.25C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h7.5zm3.75 12h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09z" fill={primaryFill} /></svg>;
}

const PhoneAdd24Filled = wrapIcon(rawSvg({}), 'PhoneAdd24Filled');
export default PhoneAdd24Filled;
      