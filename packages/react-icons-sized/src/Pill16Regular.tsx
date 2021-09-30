import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.35 10.35a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 00.7.7l1.5-1.5zm5.6-7.3a3.5 3.5 0 00-4.95 0L3.05 8A3.5 3.5 0 108 12.95L12.95 8a3.5 3.5 0 000-4.95zM5.88 6.59l3.53 3.53-2.12 2.12a2.5 2.5 0 01-3.53-3.53l2.12-2.12zm6.36.7l-2.12 2.12L6.6 5.88 8.7 3.76a2.5 2.5 0 113.53 3.53z" fill={primaryFill} /></svg>;
}

const Pill16Regular = wrapIcon(rawSvg({}), 'Pill16Regular');
export default Pill16Regular;
      