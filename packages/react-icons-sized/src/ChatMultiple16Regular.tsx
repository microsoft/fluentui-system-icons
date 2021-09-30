import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2a5 5 0 00-4.53 7.11L2 11.41a.5.5 0 00.59.58l2.29-.46A4.98 4.98 0 0012 7a5 5 0 00-5-5zM3 7a4 4 0 112.18 3.56.5.5 0 00-.32-.04l-1.72.34.34-1.72a.5.5 0 00-.04-.32A3.98 3.98 0 013 7zm6 7a4.98 4.98 0 01-3.14-1.1 6.02 6.02 0 002.24 0 4 4 0 002.72-.34.5.5 0 01.32-.04l1.72.34-.34-1.72a.5.5 0 01.04-.32 3.98 3.98 0 00.34-2.72 6.03 6.03 0 000-2.24 4.98 4.98 0 01.63 5.25l.46 2.3a.5.5 0 01-.59.58l-2.29-.46c-.64.3-1.36.47-2.11.47z" fill={primaryFill} /></svg>;
}

const ChatMultiple16Regular = wrapIcon(rawSvg({}), 'ChatMultiple16Regular');
export default ChatMultiple16Regular;
      