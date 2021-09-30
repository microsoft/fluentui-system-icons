import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5a1 1 0 00-1 1v.5a.5.5 0 01-1 0V6c0-1.1.9-2 2-2h.5a.5.5 0 110 1H4zm-1 8a1 1 0 001 1h.25a.5.5 0 110 1H4a2 2 0 01-2-2v-.5a.5.5 0 111 0v.5zm0-4.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM16 5a1 1 0 011 1v.5a.5.5 0 001 0V6a2 2 0 00-2-2h-.5a.5.5 0 000 1h.5zm0 9a1 1 0 001-1v-.5a.5.5 0 111 0v.5a2 2 0 01-2 2h-.25a.5.5 0 010-1H16zm1.5-6a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm-11-4a.5.5 0 100 1H9a.5.5 0 000-1H6.5zm4 .5c0-.28.22-.5.5-.5h2.5a.5.5 0 010 1H11a.5.5 0 01-.5-.5zM7.22 8.09a.5.5 0 00-.14.69l2.31 3.48-1.23 1.85a2 2 0 00-2.51 2.64 2 2 0 103.34-2.08l1-1.51L11 14.67a2 2 0 10.84-.55l-1.24-1.86-.6-.9L7.9 8.23a.5.5 0 00-.7-.14zM12.5 17a1 1 0 110-2 1 1 0 010 2zm-5 0a1 1 0 110-2 1 1 0 010 2zm3.1-6.55l.6.9 1.72-2.57a.5.5 0 00-.14-.7.5.5 0 00-.7.15l-1.48 2.22z" fill={primaryFill} /></svg>;
}

const ScreenCut20Regular = wrapIcon(rawSvg({}), 'ScreenCut20Regular');
export default ScreenCut20Regular;
      