import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zm5.35 4.15a.5.5 0 00-.7 0l-1.42 1.4-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 000-.7zm0 5.7a.5.5 0 00-.7-.7l-1.42 1.4-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75zM6.5 8a.5.5 0 000 1H9a.5.5 0 000-1H6.5zM6 13.5c0 .28.22.5.5.5H9a.5.5 0 000-1H6.5a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const ClipboardTaskListRtl20Filled = wrapIcon(rawSvg({}), 'ClipboardTaskListRtl20Filled');
export default ClipboardTaskListRtl20Filled;
      