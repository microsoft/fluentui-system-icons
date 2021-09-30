import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.7 8.5l.65.65a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5a.5.5 0 01.7.7l-.64.65h1.79a.5.5 0 010 1H9.7zM4 3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 9V4h5a1 1 0 011 1v6a1 1 0 01-1 1H7z" fill={primaryFill} /></svg>;
}

const PanelRightExpand16Filled = wrapIcon(rawSvg({}), 'PanelRightExpand16Filled');
export default PanelRightExpand16Filled;
      