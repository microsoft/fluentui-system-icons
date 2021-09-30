import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM18 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H17V3.5a.5.5 0 011 0V6h2.5a.5.5 0 010 1H18zm-7-5c.56 0 1.1.07 1.63.2-.36.4-.67.85-.92 1.35a5.5 5.5 0 103.47 9.03c.5.19 1.04.32 1.6.38-.24.33-.5.65-.78.94v7.35c0 .57-.6.92-1.1.67l-.08-.06L11 19.17l-3.82 2.7a.75.75 0 01-1.17-.52v-.1L6 13.9A7 7 0 0111 2zm3.5 17.8v-4.74a6.97 6.97 0 01-7 0v4.74l3.07-2.16a.75.75 0 01.76-.06l.1.06 3.07 2.16z" fill={primaryFill} /></svg>;
}

const RibbonAdd24Regular = wrapIcon(rawSvg({}), 'RibbonAdd24Regular');
export default RibbonAdd24Regular;
      