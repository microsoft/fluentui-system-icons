import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 2v2a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V2h13zm-4 2.5l.52.48-2.4 4.75a.5.5 0 11-.9-.46l2.18-4.3.6-.47zM9 13c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5z" fill={primaryFill} /></svg>;
}

const InkingToolAccent16Filled = wrapIcon(rawSvg({}), 'InkingToolAccent16Filled');
export default InkingToolAccent16Filled;
      