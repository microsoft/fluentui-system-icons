import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5C3 3.67 3.67 3 4.5 3h2.23a.5.5 0 000-1H4.5A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5V9.27a.5.5 0 00-1 0v2.23c0 .83-.67 1.5-1.5 1.5H8V9.77C8 8.79 7.2 8 6.23 8H3V4.5zM3 9h3.23c.43 0 .77.34.77.77V13H4.5A1.5 1.5 0 013 11.5V9zm5.77-6.5c0-.28.22-.5.5-.5h4.23c.28 0 .5.22.5.5v4.23a.5.5 0 01-1 0V3.71L9.62 7.08a.5.5 0 11-.7-.7L12.29 3H9.27a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const ExpandUpRight16Regular = wrapIcon(rawSvg({}), 'ExpandUpRight16Regular');
export default ExpandUpRight16Regular;
      