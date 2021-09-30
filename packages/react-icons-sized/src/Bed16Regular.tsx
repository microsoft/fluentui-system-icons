import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5A2.5 2.5 0 015.5 2h5A2.5 2.5 0 0113 4.5v1.55a2.5 2.5 0 012 2.45v5a.5.5 0 01-1 0V11H2v2.5a.5.5 0 01-1 0v-5c0-1.2.86-2.22 2-2.45V4.5zM2 10h12V8.5c0-.83-.67-1.5-1.5-1.5h-9C2.67 7 2 7.67 2 8.5V10zm10-5.5c0-.83-.67-1.5-1.5-1.5h-5C4.67 3 4 3.67 4 4.5V6h1v-.5c0-.28.22-.5.5-.5H7c.28 0 .5.22.5.5V6h1v-.5c0-.28.22-.5.5-.5h1.5c.28 0 .5.22.5.5V6h1V4.5z" fill={primaryFill} /></svg>;
}

const Bed16Regular = wrapIcon(rawSvg({}), 'Bed16Regular');
export default Bed16Regular;
      