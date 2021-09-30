import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.5A2.5 2.5 0 013.5 1h4A2.5 2.5 0 0110 3.5V4H9v-.5C9 2.67 8.33 2 7.5 2h-4C2.67 2 2 2.67 2 3.5v4C2 8.33 2.67 9 3.5 9h5.59a1.5 1.5 0 110 1H3.5A2.5 2.5 0 011 7.5v-4zM6 11v.5A2.5 2.5 0 008.5 14h4a2.5 2.5 0 002.5-2.5v-4A2.5 2.5 0 0012.5 5H6.91a1.5 1.5 0 100 1h5.59c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 017 11.5V11H6z" fill={primaryFill} /></svg>;
}

const ChannelShare16Filled = wrapIcon(rawSvg({}), 'ChannelShare16Filled');
export default ChannelShare16Filled;
      