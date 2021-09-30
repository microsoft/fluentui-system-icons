import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.08 4.62A1 1 0 014 4h4a1 1 0 01.7 1.7l-2 2a1 1 0 01-1.4 0l-2-2a1 1 0 01-.22-1.08zM4 5l1.82 1.82c.1.1.26.1.36 0L8 5H4z" fill={primaryFill} /></svg>;
}

const CaretDown12Regular = wrapIcon(rawSvg({}), 'CaretDown12Regular');
export default CaretDown12Regular;
      