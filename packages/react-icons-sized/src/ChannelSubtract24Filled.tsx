import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6.25C21 4.45 19.55 3 17.75 3H6.25c-1.38 0-2.55.85-3.03 2.06A2.26 2.26 0 113 9.37v8.38C3 19.55 4.46 21 6.25 21h5.77a6.47 6.47 0 01-.29-6.5H8.65a.75.75 0 010-1.49H12.8a6.48 6.48 0 018.19-.99V6.25zM8.75 9.5h6.5a.75.75 0 01.1 1.49H8.65a.75.75 0 010-1.49h.1zM5 7.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm3 6a.5.5 0 000-1h-6a.5.5 0 000 1h6z" fill={primaryFill} /></svg>;
}

const ChannelSubtract24Filled = wrapIcon(rawSvg({}), 'ChannelSubtract24Filled');
export default ChannelSubtract24Filled;
      