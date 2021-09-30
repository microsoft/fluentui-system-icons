import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1zM8 3.5c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zm4.75 5.75a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3a.75.75 0 100-1.5.75.75 0 000 1.5zM12 14.5a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm-1-6a.5.5 0 00-.5-.5H7a.5.5 0 000 1h3.5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5H7a.5.5 0 000 1h3.5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5H7a.5.5 0 000 1h3.5a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const ClipboardBulletListRtl20Filled = wrapIcon(rawSvg({}), 'ClipboardBulletListRtl20Filled');
export default ClipboardBulletListRtl20Filled;
      