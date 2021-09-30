import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.98 3.94A2.25 2.25 0 0013.75 2h-3.5c-1.14 0-2.08.85-2.23 1.94l-.01.14V4H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76v.08l-.01-.14zm-5.73-.44h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zM8 9h8a.75.75 0 010 1.5H8A.75.75 0 018 9zm3.25 4.75c0-.41.34-.75.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75zM10 17h6a.75.75 0 010 1.5h-6a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const ClipboardTextRtl24Filled = wrapIcon(rawSvg({}), 'ClipboardTextRtl24Filled');
export default ClipboardTextRtl24Filled;
      