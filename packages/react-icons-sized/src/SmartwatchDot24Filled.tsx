import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 2a2 2 0 011.79 1.1 3.49 3.49 0 00-.23 2.04A4 4 0 0015 5H9c-.53 0-1.04.1-1.5.3V4c0-1.1.9-2 2-2h5zm.5 4c.59 0 1.14.17 1.6.46.25.37.57.69.94.94.29.46.46 1.01.46 1.6v1a1 1 0 011 1v1a1 1 0 01-1 1v2a3 3 0 01-3 3H9a3 3 0 01-3-3V9a3 3 0 013-3h6zM9 19c-.53 0-1.04-.1-1.5-.3V20c0 1.1.9 2 2 2h5a2 2 0 002-2v-1.3c-.46.2-.97.3-1.5.3H9zM22 4.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const SmartwatchDot24Filled = wrapIcon(rawSvg({}), 'SmartwatchDot24Filled');
export default SmartwatchDot24Filled;
      