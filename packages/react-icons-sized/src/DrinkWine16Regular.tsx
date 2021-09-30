import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.73 6.3a.5.5 0 00-1-.1A1.75 1.75 0 018.36 7.7a.5.5 0 00.2.98 2.75 2.75 0 002.18-2.39z" fill={primaryFill} /><path d="M4.5 1a.5.5 0 00-.5.5v5a4 4 0 003.5 3.97.5.5 0 000 .03V14H6a.5.5 0 000 1h4a.5.5 0 000-1H8.5v-3.5a.5.5 0 000-.03A4 4 0 0012 6.5v-5a.5.5 0 00-.5-.5h-7zM5 4V2h6v2H5zm0 1h6v1.5a3 3 0 01-6 0V5z" fill={primaryFill} /></svg>;
}

const DrinkWine16Regular = wrapIcon(rawSvg({}), 'DrinkWine16Regular');
export default DrinkWine16Regular;
      