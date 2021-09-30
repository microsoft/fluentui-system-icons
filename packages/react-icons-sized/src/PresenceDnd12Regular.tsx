import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 0a6 6 0 100 12A6 6 0 006 0zM1.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" fill={primaryFill} /><path d="M3 6c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 013 6z" fill={primaryFill} /></svg>;
}

const PresenceDnd12Regular = wrapIcon(rawSvg({}), 'PresenceDnd12Regular');
export default PresenceDnd12Regular;
      