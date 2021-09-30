import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.7 2.3a1 1 0 00-1.4 1.4l5.3 5.32A5 5 0 003 14v9a5 5 0 005 5h16c.76 0 1.47-.17 2.12-.47l2.17 2.18a1 1 0 001.42-1.42l-26-26zM29 23c0 .72-.15 1.41-.43 2.03L12.54 9H20V5h-8v3.46l-2-2V4a1 1 0 011-1h10a1 1 0 011 1v5h2a5 5 0 015 5v9z" fill={primaryFill} /></svg>;
}

const BriefcaseOff32Filled = wrapIcon(rawSvg({}), 'BriefcaseOff32Filled');
export default BriefcaseOff32Filled;
      