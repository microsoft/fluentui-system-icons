import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35A.5.5 0 0017 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 5H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /><path d="M14.5 11c1.33 0 2.55-.47 3.5-1.26v3.76c0 .83-.67 1.5-1.5 1.5H13v2h1.5a.5.5 0 010 1h-9a.5.5 0 010-1H7v-2H3.5A1.5 1.5 0 012 13.5v-10C2 2.67 2.67 2 3.5 2h6.76a5.5 5.5 0 004.24 9zM12 17v-2H8v2h4z" fill={primaryFill} /></svg>;
}

const DesktopArrowRightFilled = wrapIcon(rawSvg({}), 'DesktopArrowRightFilled');
export default DesktopArrowRightFilled;
      