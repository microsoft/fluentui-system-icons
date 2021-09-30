import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.57 24.99l4.72 4.72a1 1 0 001.42-1.42l-26-26a1 1 0 00-1.42 1.42l6.58 6.57c-.44.9-.7 1.86-.81 2.77C3.93 13.47 2 16.65 2 19a5.9 5.9 0 001.37 3.9C4.5 24.19 6.3 25 9 25h14l.57-.01zm4.59-1.6c-.22.2-.46.37-.7.53L11.07 7.55A7.93 7.93 0 0116 6c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0130 19c0 1.75-.58 3.3-1.84 4.4z" fill={primaryFill} /></svg>;
}

const CloudOff32Filled = wrapIcon(rawSvg({}), 'CloudOff32Filled');
export default CloudOff32Filled;
      