import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 7.5h1.8l-.66-.65a.5.5 0 01.71-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 11-.7-.7l.64-.65H8.5a.5.5 0 010-1zM2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm10-1H7v8h5a1 1 0 001-1V5a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const PanelLeftExpand16Filled = wrapIcon(rawSvg({}), 'PanelLeftExpand16Filled');
export default PanelLeftExpand16Filled;
      