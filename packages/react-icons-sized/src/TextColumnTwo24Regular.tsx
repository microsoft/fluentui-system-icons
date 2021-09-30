import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 013 5.75z" fill={primaryFill} /><path d="M3 9.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 013 9.75z" fill={primaryFill} /><path d="M3 13.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3 17.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M13 5.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M13 9.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M13 13.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M13 17.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextColumnTwo24Regular = wrapIcon(rawSvg({}), 'TextColumnTwo24Regular');
export default TextColumnTwo24Regular;
      