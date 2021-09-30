import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3a4.5 4.5 0 00-.5 8.97v1A5.5 5.5 0 1112.98 7h-1A4.5 4.5 0 007.5 3z" fill={primaryFill} /><path d="M10.5 8A2.5 2.5 0 008 10.5v5a2.5 2.5 0 002.5 2.5h5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0015.5 8h-5zM9 10.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 019 15.5v-5z" fill={primaryFill} /></svg>;
}

const Shapes20Regular = wrapIcon(rawSvg({}), 'Shapes20Regular');
export default Shapes20Regular;
      