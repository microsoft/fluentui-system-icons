import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.35 2.15c.2.2.2.5 0 .7L4.21 6l3.14 3.15a.5.5 0 11-.7.7l-3.5-3.5a.5.5 0 010-.7l3.5-3.5c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ChevronLeft12Regular = wrapIcon(rawSvg({}), 'ChevronLeft12Regular');
export default ChevronLeft12Regular;
      