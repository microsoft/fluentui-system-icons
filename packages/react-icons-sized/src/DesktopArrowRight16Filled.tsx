import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35A.5.5 0 0013 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L11.29 5H8.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /><path d="M10.5 11c1.33 0 2.55-.47 3.5-1.26v.76c0 .83-.67 1.5-1.5 1.5H10v1h1.5a.5.5 0 110 1h-7a.5.5 0 010-1H6v-1H3.5A1.5 1.5 0 012 10.5v-7C2 2.67 2.67 2 3.5 2h2.76a5.5 5.5 0 004.24 9zM9 12H7v1h2v-1z" fill={primaryFill} /></svg>;
}

const DesktopArrowRight16Filled = wrapIcon(rawSvg({}), 'DesktopArrowRight16Filled');
export default DesktopArrowRight16Filled;
      