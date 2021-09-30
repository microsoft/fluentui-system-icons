import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4.5a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v6a.5.5 0 001 0V5.7l6.4 6.4c.2.2.5.2.7 0l5.75-5.75a.5.5 0 00-.7-.7l-5.4 5.4L2.71 5H7.5a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const ArrowBounce16Regular = wrapIcon(rawSvg({}), 'ArrowBounce16Regular');
export default ArrowBounce16Regular;
      