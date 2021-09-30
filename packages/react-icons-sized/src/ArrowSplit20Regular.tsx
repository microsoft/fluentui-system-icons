import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.35 6.65c.2.2.2.5 0 .7L3.71 9H8.5a.5.5 0 010 1H3.7l1.65 1.65a.5.5 0 01-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5c.2-.2.5-.2.7 0zm9.3 0c.2-.2.5-.2.7 0l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 01-.7-.7L16.29 10H11.5a.5.5 0 010-1h4.8l-1.65-1.65a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const ArrowSplit20Regular = wrapIcon(rawSvg({}), 'ArrowSplit20Regular');
export default ArrowSplit20Regular;
      