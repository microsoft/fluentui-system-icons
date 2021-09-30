import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M44.25 24c0 .83-.67 1.5-1.5 1.5H10.91l12.4 12.18a1.5 1.5 0 11-2.11 2.14l-15-14.75a.61.61 0 01-.02-.02 1.5 1.5 0 01.04-2.14L21.2 8.18a1.5 1.5 0 112.1 2.14L10.91 22.5h31.84c.83 0 1.5.67 1.5 1.5z" fill={primaryFill} /></svg>;
}

const ArrowLeft48Filled = wrapIcon(rawSvg({}), 'ArrowLeft48Filled');
export default ArrowLeft48Filled;
      