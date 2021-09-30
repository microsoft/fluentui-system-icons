import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 11.17l.87-1a.5.5 0 01.76.66l-1.75 2a.5.5 0 01-.76 0l-1.75-2a.5.5 0 11.76-.65l.87 1V7.5a.5.5 0 011 0v3.67zM4 16a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4zm-1-2a1 1 0 001 1h12a1 1 0 001-1V9h-5.5V8H17V6a1 1 0 00-1-1H4a1 1 0 00-1 1v2h5.5v1H3v5z" fill={primaryFill} /></svg>;
}

const PanelTopExpand20Regular = wrapIcon(rawSvg({}), 'PanelTopExpand20Regular');
export default PanelTopExpand20Regular;
      