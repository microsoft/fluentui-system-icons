import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.85 8.35a.5.5 0 11-.7-.7l4.5-4.5c.2-.2.5-.2.7 0l4.5 4.5a.5.5 0 01-.7.7L8 4.21 3.85 8.35zm0 4a.5.5 0 01-.7-.7l4.5-4.5c.2-.2.5-.2.7 0l4.5 4.5a.5.5 0 01-.7.7L8 8.21l-4.15 4.14z" fill={primaryFill} /></svg>;
}

const ChevronDoubleUp16Regular = wrapIcon(rawSvg({}), 'ChevronDoubleUp16Regular');
export default ChevronDoubleUp16Regular;
      