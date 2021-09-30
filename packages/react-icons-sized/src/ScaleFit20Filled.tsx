import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2zm11.12 6.08a.5.5 0 01.05-.7l1-.88H11.5a.5.5 0 110-1h2.67l-1-.87a.5.5 0 01.66-.76l2 1.75a.5.5 0 010 .76l-2 1.75a.5.5 0 01-.7-.05zM6.88 7.92a.5.5 0 01-.05.7l-1 .88H8.5a.5.5 0 010 1H5.83l1 .87a.5.5 0 01-.66.76l-2-1.75a.5.5 0 010-.76l2-1.75a.5.5 0 01.7.05z" fill={primaryFill} /></svg>;
}

const ScaleFit20Filled = wrapIcon(rawSvg({}), 'ScaleFit20Filled');
export default ScaleFit20Filled;
      