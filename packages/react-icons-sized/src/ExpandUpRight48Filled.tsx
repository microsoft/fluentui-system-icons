import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 8.5a3.75 3.75 0 00-3.75 3.75V24h10.25c2.9 0 5.25 2.35 5.25 5.25V39.5h11.75a3.75 3.75 0 003.75-3.75v-7.88a1.25 1.25 0 112.5 0v7.88C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 016 35.75v-23.5C6 8.8 8.8 6 12.25 6h7.88a1.25 1.25 0 110 2.5h-7.88zM27 7.25c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 11-2.5 0v-9.48L29.13 20.63a1.25 1.25 0 01-1.76-1.76L37.73 8.5h-9.48c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const ExpandUpRight48Filled = wrapIcon(rawSvg({}), 'ExpandUpRight48Filled');
export default ExpandUpRight48Filled;
      