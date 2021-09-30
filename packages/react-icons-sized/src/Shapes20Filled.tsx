import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.5A5.5 5.5 0 0112.98 7H10.5A3.5 3.5 0 007 10.5v2.48A5.5 5.5 0 012 7.5z" fill={primaryFill} /><path d="M10.5 8A2.5 2.5 0 008 10.5v5a2.5 2.5 0 002.5 2.5h5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0015.5 8h-5z" fill={primaryFill} /></svg>;
}

const Shapes20Filled = wrapIcon(rawSvg({}), 'Shapes20Filled');
export default Shapes20Filled;
      