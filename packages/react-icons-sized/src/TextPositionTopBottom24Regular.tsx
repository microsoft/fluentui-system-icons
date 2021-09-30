import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 4.75z" fill={primaryFill} /><path d="M3 18.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9.5 11a2.5 2.5 0 015 0v4.75a.75.75 0 001.5 0V11a4 4 0 00-8 0v4.75a.75.75 0 001.5 0V11z" fill={primaryFill} /></svg>;
}

const TextPositionTopBottom24Regular = wrapIcon(rawSvg({}), 'TextPositionTopBottom24Regular');
export default TextPositionTopBottom24Regular;
      