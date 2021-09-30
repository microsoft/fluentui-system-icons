import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4zM9 1.5a.5.5 0 00-1 0V3h-.5A2.5 2.5 0 005 5.5V6H3.5a.5.5 0 000 1H5v1.5H3.5a.5.5 0 00-.44.74A4.5 4.5 0 016 9.26V5.5C6 4.67 6.67 4 7.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H8.97c-.04.35-.11.68-.23 1h1.76v1.5a.5.5 0 001 0V15H13v1.5a.5.5 0 001 0V15h.5a2.5 2.5 0 002.5-2.5V12h1.5a.5.5 0 000-1H17V9.5h1.5a.5.5 0 000-1H17V7h1.5a.5.5 0 000-1H17v-.5A2.5 2.5 0 0014.5 3H14V1.5a.5.5 0 00-1 0V3h-1.5V1.5a.5.5 0 00-1 0V3H9V1.5zM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 00.7-.7L7.3 15.6A3.5 3.5 0 104.5 17zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const DeveloperBoardSearch20Regular = wrapIcon(rawSvg({}), 'DeveloperBoardSearch20Regular');
export default DeveloperBoardSearch20Regular;
      