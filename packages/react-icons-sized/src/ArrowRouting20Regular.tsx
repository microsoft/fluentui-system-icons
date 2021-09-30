import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.85 2.15a.5.5 0 00-.7.7L16.29 5H11.5A2.5 2.5 0 009 7.5v6c0 .83-.67 1.5-1.5 1.5h-.55a2.5 2.5 0 100 1h.55a2.5 2.5 0 002.5-2.5v-6c0-.83.67-1.5 1.5-1.5h4.8l-2.15 2.15a.5.5 0 00.7.7l3-3a.5.5 0 000-.7l-3-3zM6 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const ArrowRouting20Regular = wrapIcon(rawSvg({}), 'ArrowRouting20Regular');
export default ArrowRouting20Regular;
      