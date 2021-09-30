import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v4c0 1.1.9 2 2 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4z" fill={primaryFill} /><path d="M4 12.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const Tv16Filled = wrapIcon(rawSvg({}), 'Tv16Filled');
export default Tv16Filled;
      