import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3C4.78 3 4 3.78 4 4.75v14.5c0 .97.78 1.75 1.75 1.75h3.5c.96 0 1.75-.78 1.75-1.75V4.75C11 3.78 10.2 3 9.25 3h-3.5z" fill={primaryFill} /><path d="M14.75 3C13.78 3 13 3.78 13 4.75v14.5c0 .97.78 1.75 1.75 1.75h3.5c.96 0 1.75-.78 1.75-1.75V4.75C20 3.78 19.2 3 18.25 3h-3.5z" fill={primaryFill} /></svg>;
}

const Pause24Filled = wrapIcon(rawSvg({}), 'Pause24Filled');
export default Pause24Filled;
      