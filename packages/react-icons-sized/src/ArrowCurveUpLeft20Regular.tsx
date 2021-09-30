import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.85 6.85a.5.5 0 11-.7-.7l4-4c.2-.2.5-.2.7 0l4 4a.5.5 0 01-.7.7L10 3.71V10c0 1.96.25 3.38.76 4.47a5.96 5.96 0 002.5 2.6.5.5 0 01-.52.86 6.95 6.95 0 01-2.88-3.03C9.26 13.62 9 12.04 9 10V3.7L5.85 6.86z" fill={primaryFill} /></svg>;
}

const ArrowCurveUpLeft20Regular = wrapIcon(rawSvg({}), 'ArrowCurveUpLeft20Regular');
export default ArrowCurveUpLeft20Regular;
      