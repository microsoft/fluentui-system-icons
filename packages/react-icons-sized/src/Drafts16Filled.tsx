import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.98 2a2.62 2.62 0 00-3.71 0l-.78.78 3.7 3.71.8-.79a2.62 2.62 0 00-.01-3.7z" fill={primaryFill} /><path d="M2.8 9.49l5.98-6 3.71 3.7-5.98 6a1.5 1.5 0 01-.55.36l-3.97 1.41a.75.75 0 01-.96-.96l1.42-3.96c.08-.2.2-.4.35-.55z" fill={primaryFill} /><path d="M1.5 2h7.36l-1 1H1.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M1.5 4h5.36l-1 1H1.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M1.5 6h3.37l-1 1H1.5a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const Drafts16Filled = wrapIcon(rawSvg({}), 'Drafts16Filled');
export default Drafts16Filled;
      