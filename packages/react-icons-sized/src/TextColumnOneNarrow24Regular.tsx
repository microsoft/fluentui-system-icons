import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" fill={primaryFill} /><path d="M8.75 9a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" fill={primaryFill} /><path d="M8 13.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M8.75 17a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" fill={primaryFill} /></svg>;
}

const TextColumnOneNarrow24Regular = wrapIcon(rawSvg({}), 'TextColumnOneNarrow24Regular');
export default TextColumnOneNarrow24Regular;
      