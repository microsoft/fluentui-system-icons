import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v.2l6 3.23 6-3.23V5a2 2 0 00-2-2H4z" fill={primaryFill} /><path d="M14 6.34l-5.76 3.1a.5.5 0 01-.48 0L2 6.34V11c0 1.1.9 2 2 2h8a2 2 0 002-2V6.34z" fill={primaryFill} /></svg>;
}

const Mail16Filled = wrapIcon(rawSvg({}), 'Mail16Filled');
export default Mail16Filled;
      