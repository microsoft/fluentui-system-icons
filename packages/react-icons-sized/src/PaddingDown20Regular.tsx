import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.35 11.35l-4.5 4.5a.5.5 0 01-.7 0l-4.5-4.5a.5.5 0 01.7-.7L9 14.29V4.5a.5.5 0 011 0v9.8l3.65-3.65a.5.5 0 01.7.7zM3.5 3a.5.5 0 010-1h12a.5.5 0 010 1h-12zm0 15a.5.5 0 010-1h1a.5.5 0 010 1h-1zm3 0a.5.5 0 010-1h2a.5.5 0 010 1h-2zm4 0a.5.5 0 010-1h2a.5.5 0 010 1h-2zm4 0a.5.5 0 010-1h1a.5.5 0 010 1h-1z" fill={primaryFill} /></svg>;
}

const PaddingDown20Regular = wrapIcon(rawSvg({}), 'PaddingDown20Regular');
export default PaddingDown20Regular;
      