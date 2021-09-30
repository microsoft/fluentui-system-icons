import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.85 13.15c.2.2.2.5 0 .7l-1.5 1.5c-.74.75-1.95.75-2.7 0A.5.5 0 015 14.5a.5.5 0 01.35.15c.36.35.94.35 1.3 0l1.5-1.5c.2-.2.5-.2.7 0zm2.3-10a4.04 4.04 0 115.7 5.7l-8 8a4.04 4.04 0 11-5.7-5.7l8-8zm5 .7a3.04 3.04 0 00-4.3 0L8.21 7.5l4.29 4.3 3.65-3.65a3.04 3.04 0 000-4.3zm-4.36 8.65L7.5 8.2l-3.65 3.65a3.04 3.04 0 004.3 4.3l3.64-3.65z" fill={primaryFill} /></svg>;
}

const Pill20Regular = wrapIcon(rawSvg({}), 'Pill20Regular');
export default Pill20Regular;
      