import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H4.75A.75.75 0 014 5.75z" fill={primaryFill} /><path d="M6 18.75c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M2.75 11.5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
}

const TextAlignCenter24Regular = wrapIcon(rawSvg({}), 'TextAlignCenter24Regular');
export default TextAlignCenter24Regular;
      