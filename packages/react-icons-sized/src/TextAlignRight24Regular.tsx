import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5.75c0-.41.34-.75.75-.75h15.5a.75.75 0 010 1.5H5.75A.75.75 0 015 5.75z" fill={primaryFill} /><path d="M10 18.75c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5h-10.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M2.75 11.5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
}

const TextAlignRight24Regular = wrapIcon(rawSvg({}), 'TextAlignRight24Regular');
export default TextAlignRight24Regular;
      