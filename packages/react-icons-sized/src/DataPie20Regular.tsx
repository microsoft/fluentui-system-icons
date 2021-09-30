import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 12a1 1 0 01-1-1V5.08A6 6 0 1014.92 12H9zM8 4.07c.55-.08 1 .38 1 .93v6h6c.55 0 1 .45.93 1A7 7 0 118 4.07z" fill={primaryFill} /><path d="M11 9V3a6 6 0 016 6h-6zm6.06 1c.5 0 .93-.37.94-.86V9a7 7 0 00-7.14-7c-.5.01-.86.44-.86.94V9a1 1 0 001 1h6.06z" fill={primaryFill} /></svg>;
}

const DataPie20Regular = wrapIcon(rawSvg({}), 'DataPie20Regular');
export default DataPie20Regular;
      