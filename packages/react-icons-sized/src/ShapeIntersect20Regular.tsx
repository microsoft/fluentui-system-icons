import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5V7h2.5A2.5 2.5 0 0118 9.5v6a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 017 15.5V13H4.5A2.5 2.5 0 012 10.5v-6zm10 0c0-.83-.67-1.5-1.5-1.5h-6C3.67 3 3 3.67 3 4.5v6c0 .83.67 1.5 1.5 1.5H7V9.5A2.5 2.5 0 019.5 7H12V4.5zm-4 6.2V12h.3L12 8.3V8h-1.3L8 10.7zm.02-1.42l1.26-1.26a1.5 1.5 0 00-1.26 1.26zM13 8v2.5a2.5 2.5 0 01-2.5 2.5H8v2.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H13zm-3.3 4h.8c.83 0 1.5-.67 1.5-1.5v-.8L9.7 12z" fill={primaryFill} /></svg>;
}

const ShapeIntersect20Regular = wrapIcon(rawSvg({}), 'ShapeIntersect20Regular');
export default ShapeIntersect20Regular;
      