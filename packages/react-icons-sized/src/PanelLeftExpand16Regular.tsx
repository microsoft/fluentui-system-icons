import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.65 9.15l.64-.65H8.5a.5.5 0 010-1h1.8l-.65-.65a.5.5 0 11.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7zM2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h2V4H4zm3 0v8h5a1 1 0 001-1V5a1 1 0 00-1-1H7z" fill={primaryFill} /></svg>;
}

const PanelLeftExpand16Regular = wrapIcon(rawSvg({}), 'PanelLeftExpand16Regular');
export default PanelLeftExpand16Regular;
      