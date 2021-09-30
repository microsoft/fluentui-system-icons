import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm-1 2.5h-5.5a.75.75 0 00-.1 1.5h5.6a.75.75 0 00.1-1.5h-.1z" fill={primaryFill} /></svg>;
}

const PhoneStatusBar24Filled = wrapIcon(rawSvg({}), 'PhoneStatusBar24Filled');
export default PhoneStatusBar24Filled;
      