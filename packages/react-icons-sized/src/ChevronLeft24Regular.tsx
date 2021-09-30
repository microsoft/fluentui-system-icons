import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.53 4.22c.3.3.3.77 0 1.06L8.81 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const ChevronLeft24Regular = wrapIcon(rawSvg({}), 'ChevronLeft24Regular');
export default ChevronLeft24Regular;
      