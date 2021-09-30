import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.5 6c0-.28.22-.5.5-.5h6.8L6.14 2.85a.5.5 0 11.7-.7l3.5 3.5c.2.2.2.5 0 .7l-3.5 3.5a.5.5 0 01-.7-.7L8.79 6.5H2a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const ArrowRight12Regular = wrapIcon(rawSvg({}), 'ArrowRight12Regular');
export default ArrowRight12Regular;
      