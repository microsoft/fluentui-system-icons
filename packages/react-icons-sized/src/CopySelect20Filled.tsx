import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3a1 1 0 00-1 1v.5a.5.5 0 01-1 0V4c0-1.1.9-2 2-2h.5a.5.5 0 010 1H8z" fill={primaryFill} /><path d="M7 12a1 1 0 001 1h.5a.5.5 0 010 1H8a2 2 0 01-2-2v-.5a.5.5 0 011 0v.5z" fill={primaryFill} /><path d="M7 6.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3z" fill={primaryFill} /><path d="M16 3a1 1 0 011 1v.5a.5.5 0 001 0V4a2 2 0 00-2-2h-.5a.5.5 0 000 1h.5z" fill={primaryFill} /><path d="M16 13a1 1 0 001-1v-.5a.5.5 0 011 0v.5a2 2 0 01-2 2h-.5a.5.5 0 010-1h.5z" fill={primaryFill} /><path d="M17.5 6a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M10.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M10 13.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4 6h1v6.5A2.5 2.5 0 007.5 15H14v1a2 2 0 01-2 2H5.5A3.5 3.5 0 012 14.5V8c0-1.1.9-2 2-2z" fill={primaryFill} /></svg>;
}

const CopySelect20Filled = wrapIcon(rawSvg({}), 'CopySelect20Filled');
export default CopySelect20Filled;
      