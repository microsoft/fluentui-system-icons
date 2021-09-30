import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 17a7 7 0 110-14 7 7 0 010 14zm0 1a8 8 0 100-16 8 8 0 000 16z" fill={primaryFill} /><path d="M13.85 6.15c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0z" fill={primaryFill} /><path d="M7 13.5c0 .28.22.5.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const CheckmarkUnderlineCircle20Regular = wrapIcon(rawSvg({}), 'CheckmarkUnderlineCircle20Regular');
export default CheckmarkUnderlineCircle20Regular;
      