import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm4 11V5h8a1 1 0 011 1v8a1 1 0 01-1 1H8z" fill={primaryFill} /></svg>;
}

const PanelLeft20Filled = wrapIcon(rawSvg({}), 'PanelLeft20Filled');
export default PanelLeft20Filled;
      