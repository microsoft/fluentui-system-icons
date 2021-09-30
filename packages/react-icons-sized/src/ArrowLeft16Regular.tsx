import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 8.5a.5.5 0 000-1H3.8l4.03-3.63a.5.5 0 10-.66-.74l-5 4.5a.5.5 0 000 .74l5 4.5a.5.5 0 10.66-.74L3.8 8.5h9.7z" fill={primaryFill} /></svg>;
}

const ArrowLeft16Regular = wrapIcon(rawSvg({}), 'ArrowLeft16Regular');
export default ArrowLeft16Regular;
      