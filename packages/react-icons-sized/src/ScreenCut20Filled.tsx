import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 011-1h.5a.5.5 0 000-1H4a2 2 0 00-2 2v.5a.5.5 0 001 0V6zm1 8a1 1 0 01-1-1v-.5a.5.5 0 10-1 0v.5c0 1.1.9 2 2 2h.25a.5.5 0 000-1H4zM2.5 8c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5zM17 6a1 1 0 00-1-1h-.5a.5.5 0 010-1h.5a2 2 0 012 2v.5a.5.5 0 01-1 0V6zm0 7a1 1 0 01-1 1h-.25a.5.5 0 100 1H16a2 2 0 002-2v-.5a.5.5 0 10-1 0v.5zm0-4.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-2zm-11-4c0-.28.22-.5.5-.5H9a.5.5 0 110 1H6.5a.5.5 0 01-.5-.5zm5-.5a.5.5 0 000 1h2.5a.5.5 0 000-1H11zM5 6a1 1 0 00-1 1v5a1 1 0 001 1h2.7l.5-.74-1.96-2.93a1.5 1.5 0 112.5-1.66L10 9.55l1.25-1.88a1.5 1.5 0 012.5 1.66l-1.95 2.93.5.74H15a1 1 0 001-1V7a1 1 0 00-1-1H5zm2.22 2.09a.5.5 0 00-.14.69l2.31 3.48-1.23 1.85a2 2 0 00-2.51 2.64 2 2 0 103.34-2.08l1-1.51L11 14.67a2 2 0 10.84-.55l-1.24-1.86-.6-.9L7.9 8.23a.5.5 0 00-.7-.14zM12.5 17a1 1 0 110-2 1 1 0 010 2zm-5 0a1 1 0 110-2 1 1 0 010 2zm3.1-6.55l.6.9 1.72-2.57a.5.5 0 00-.14-.7.5.5 0 00-.7.15l-1.48 2.22z" fill={primaryFill} /></svg>;
}

const ScreenCut20Filled = wrapIcon(rawSvg({}), 'ScreenCut20Filled');
export default ScreenCut20Filled;
      