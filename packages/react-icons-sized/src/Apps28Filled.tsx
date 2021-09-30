import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.84 2.66a2.25 2.25 0 00-3.18 0L13.5 6.8v-.56c0-1.24-1-2.25-2.25-2.25h-7C3.01 4 2 5.01 2 6.25v18c0 .97.78 1.75 1.75 1.75h18c1.24 0 2.25-1 2.25-2.25v-7c0-1.24-1-2.25-2.25-2.25h-.56l4.16-4.15c.88-.88.88-2.3 0-3.19l-4.5-4.5zm-7.34 8.03l3.8 3.81h-3.8v-3.8zM12 14.5H3.5V6.25c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75v8.25zM3.5 16H12v8.5H4.25a.75.75 0 01-.75-.75V16zm10 8.5V16h8.25c.41 0 .75.34.75.75v7c0 .42-.34.75-.75.75H13.5z" fill={primaryFill} /></svg>;
}

const Apps28Filled = wrapIcon(rawSvg({}), 'Apps28Filled');
export default Apps28Filled;
      