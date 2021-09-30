import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.93 1.25a.5.5 0 01-.18.68C8.2 3.38 8 6 8 8v5.3l2.65-2.65a.5.5 0 01.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 11.7-.7L7 13.29V8c0-2 .19-5.18 3.25-6.93a.5.5 0 01.68.18z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownLeft16Regular = wrapIcon(rawSvg({}), 'ArrowCurveDownLeft16Regular');
export default ArrowCurveDownLeft16Regular;
      