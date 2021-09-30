import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.15 4.35c.2.2.5.2.7 0L9.5 2.71V6.5a.5.5 0 001 0V2.7l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 000 .7z" fill={primaryFill} /><path d="M4.35 7.85a.5.5 0 10-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L2.71 10.5H6.5a.5.5 0 000-1H2.7l1.65-1.65z" fill={primaryFill} /><path d="M15.65 7.85a.5.5 0 01.7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 01-.7-.7l1.64-1.65H13.5a.5.5 0 010-1h3.8l-1.65-1.65z" fill={primaryFill} /><path d="M7.85 15.65a.5.5 0 00-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7l-1.65 1.64V13.5a.5.5 0 00-1 0v3.8l-1.65-1.65z" fill={primaryFill} /></svg>;
}

const ArrowMove20Regular = wrapIcon(rawSvg({}), 'ArrowMove20Regular');
export default ArrowMove20Regular;
      