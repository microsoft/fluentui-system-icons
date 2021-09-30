import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8.83l.87 1a.5.5 0 00.76-.66l-1.75-2a.5.5 0 00-.76 0l-1.75 2a.5.5 0 00.76.65l.87-1v3.68a.5.5 0 001 0V8.83zM4 16a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4zm-1-2a1 1 0 001 1h12a1 1 0 001-1V9h-3.83a1.5 1.5 0 00-.3-.5l-1.74-2a1.5 1.5 0 00-2.26 0l-1.75 2a1.5 1.5 0 00-.29.5H3v5z" fill={primaryFill} /></svg>;
}

const PanelTopContract20Filled = wrapIcon(rawSvg({}), 'PanelTopContract20Filled');
export default PanelTopContract20Filled;
      