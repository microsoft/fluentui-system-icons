import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8.5a5.5 5.5 0 10-2.18 4.38l4.15 4.15.08.07a.75.75 0 00.98-1.13l-4.15-4.15A5.48 5.48 0 0014 8.5zm-3-.75a.75.75 0 010 1.5H6a.75.75 0 010-1.5h5z" fill={primaryFill} /></svg>;
}

const ZoomOut20Filled = wrapIcon(rawSvg({}), 'ZoomOut20Filled');
export default ZoomOut20Filled;
      