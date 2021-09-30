import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.07 9.44a.5.5 0 101 .15l.08-.59h1.24l-.07.44a.5.5 0 101 .15L12.4 9h.6a.5.5 0 000-1h-.46l.22-1.5h.74a.5.5 0 000-1h-.59l.14-.93a.5.5 0 00-1-.14L11.9 5.5h-1.24l.14-.93a.5.5 0 00-1-.14L9.66 5.5H9a.5.5 0 000 1h.5L9.28 8H8.5a.5.5 0 000 1h.64l-.07.44zm2.68-2.94L11.53 8H10.3l.22-1.5h1.24z" fill={primaryFill} /><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const DocumentPageTopRight20Regular = wrapIcon(rawSvg({}), 'DocumentPageTopRight20Regular');
export default DocumentPageTopRight20Regular;
      