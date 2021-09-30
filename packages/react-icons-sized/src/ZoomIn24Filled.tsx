import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 10c0 1.71-.57 3.29-1.54 4.55l4.75 4.74a1 1 0 01-1.32 1.5l-.1-.08-4.74-4.75A7.5 7.5 0 1117.5 10zM10 5.5a1 1 0 00-1 1V9H6.5a1 1 0 100 2H9v2.5a1 1 0 102 0V11h2.5a1 1 0 100-2H11V6.5a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const ZoomIn24Filled = wrapIcon(rawSvg({}), 'ZoomIn24Filled');
export default ZoomIn24Filled;
      