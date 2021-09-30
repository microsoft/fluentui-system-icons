import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm4.3 3.3a1 1 0 011.4 0l3 3a1 1 0 01-1.4 1.4L8 11.42V19a1 1 0 11-2 0v-7.59l-1.3 1.3a1 1 0 01-1.4-1.42l3-3zM21 10h-9a1 1 0 110-2h9a1 1 0 110 2z" fill={primaryFill} /></svg>;
}

const ArrowCollapseAll24Filled = wrapIcon(rawSvg({}), 'ArrowCollapseAll24Filled');
export default ArrowCollapseAll24Filled;
      