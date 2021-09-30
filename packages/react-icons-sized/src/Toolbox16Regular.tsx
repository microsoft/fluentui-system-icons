import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.5V5H4a2 2 0 00-2 2v4c0 1.1.9 2 2 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-1v-.5c0-.83-.66-1.5-1.5-1.5h-3C5.69 3 5 3.67 5 4.5zM6.5 4h3c.28 0 .5.22.5.5V5H6v-.5c0-.28.23-.5.5-.5zM4 6h8a1 1 0 011 1v1h-2v-.5a.5.5 0 00-1 0V8H6v-.5a.5.5 0 00-1 0V8H3V7a1 1 0 011-1zm6 3v.5a.5.5 0 001 0V9h2v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9h2v.5a.5.5 0 001 0V9h4z" fill={primaryFill} /></svg>;
}

const Toolbox16Regular = wrapIcon(rawSvg({}), 'Toolbox16Regular');
export default Toolbox16Regular;
      