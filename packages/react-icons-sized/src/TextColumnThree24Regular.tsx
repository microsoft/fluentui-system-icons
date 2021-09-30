import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 013 5.75z" fill={primaryFill} /><path d="M9.5 5.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M16 5.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3 9.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 013 9.75z" fill={primaryFill} /><path d="M9.5 9.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M16 9.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3 13.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9.5 13.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M16 13.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3 17.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9.5 17.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M16 17.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextColumnThree24Regular = wrapIcon(rawSvg({}), 'TextColumnThree24Regular');
export default TextColumnThree24Regular;
      