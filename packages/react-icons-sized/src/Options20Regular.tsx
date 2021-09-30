import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.95 5a2.5 2.5 0 00-4.9 0H2.5a.5.5 0 000 1h7.55a2.5 2.5 0 004.9 0h2.55a.5.5 0 000-1h-2.55zM12.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /><path d="M9.95 14a2.5 2.5 0 00-4.9 0H2.5a.5.5 0 000 1h2.55a2.5 2.5 0 004.9 0h7.55a.5.5 0 000-1H9.95zM7.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /></svg>;
}

const Options20Regular = wrapIcon(rawSvg({}), 'Options20Regular');
export default Options20Regular;
      