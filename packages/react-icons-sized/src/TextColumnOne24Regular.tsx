import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H5.75A.75.75 0 015 5.75z" fill={primaryFill} /><path d="M5 9.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H5.75A.75.75 0 015 9.75z" fill={primaryFill} /><path d="M5 13.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M5 17.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextColumnOne24Regular = wrapIcon(rawSvg({}), 'TextColumnOne24Regular');
export default TextColumnOne24Regular;
      