import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2c-1.4 0-2.42.57-3.07 1.37a4.2 4.2 0 00-.9 2.15C1.97 5.73 1 7.32 1 8.5c0 .57.14 1.33.69 1.95.55.64 1.46 1.05 2.81 1.05h.6a5.5 5.5 0 016.84-6.31 3.68 3.68 0 00-1.31-2.26A4.23 4.23 0 008 2zm2.5 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 010 1H11v1.5a.5.5 0 01-1 0V11H8.5a.5.5 0 010-1H10V8.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const CloudAdd16Filled = wrapIcon(rawSvg({}), 'CloudAdd16Filled');
export default CloudAdd16Filled;
      