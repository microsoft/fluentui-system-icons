import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.5a7.5 7.5 0 107.42 6.4c-.07-.46.26-.9.72-.9.37 0 .7.26.76.62A9 9 0 1118 5.3V4.25a.75.75 0 011.5 0v3c0 .41-.34.75-.75.75h-3a.75.75 0 010-1.5h1.35a7.47 7.47 0 00-5.1-2z" fill={primaryFill} /></svg>;
}

const ArrowClockwise24Regular = wrapIcon(rawSvg({}), 'ArrowClockwise24Regular');
export default ArrowClockwise24Regular;
      