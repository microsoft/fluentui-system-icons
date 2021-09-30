import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.85 13.35l3-3a.5.5 0 000-.7l-3-3a.5.5 0 00-.7.7l2.14 2.15H6.5a.5.5 0 000 1h5.8l-2.15 2.15a.5.5 0 00.7.7zM18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8 7a7 7 0 100-14 7 7 0 000 14z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight20Regular = wrapIcon(rawSvg({}), 'ArrowCircleRight20Regular');
export default ArrowCircleRight20Regular;
      