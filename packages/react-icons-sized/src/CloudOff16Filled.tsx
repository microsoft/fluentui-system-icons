import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.79 12.5l2.36 2.35a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l3.28 3.3c-.22.44-.35.92-.4 1.37C1.97 6.73 1 8.32 1 9.5c0 .57.14 1.33.69 1.95.55.64 1.46 1.05 2.81 1.05h7.29zm2.29-.8l-.14.11-8.2-8.18a4.23 4.23 0 014.88.3 3.73 3.73 0 011.36 2.6c.69.08 1.35.34 1.89.75A2.77 2.77 0 0115 9.5c0 .88-.3 1.65-.92 2.2z" fill={primaryFill} /></svg>;
}

const CloudOff16Filled = wrapIcon(rawSvg({}), 'CloudOff16Filled');
export default CloudOff16Filled;
      