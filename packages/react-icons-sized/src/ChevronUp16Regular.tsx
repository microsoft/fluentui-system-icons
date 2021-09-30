import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.15 10.35c.2.2.5.2.7 0L8 6.21l4.15 4.14a.5.5 0 00.7-.7l-4.5-4.5a.5.5 0 00-.7 0l-4.5 4.5a.5.5 0 000 .7z" fill={primaryFill} /></svg>;
}

const ChevronUp16Regular = wrapIcon(rawSvg({}), 'ChevronUp16Regular');
export default ChevronUp16Regular;
      