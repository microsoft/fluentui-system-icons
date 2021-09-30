import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75c0-.41.34-.75.75-.75h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm4.22 3.47c.3-.3.77-.3 1.06 0l3 3a.75.75 0 11-1.06 1.06L7.5 10.56v8.19a.75.75 0 01-1.5 0v-8.19l-1.72 1.72a.75.75 0 01-1.06-1.06l3-3zm5.28.53c0-.41.34-.75.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowCollapseAll24Regular = wrapIcon(rawSvg({}), 'ArrowCollapseAll24Regular');
export default ArrowCollapseAll24Regular;
      