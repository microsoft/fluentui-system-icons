import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 015 3.75zM1.22 5.72c.3-.3.77-.3 1.06 0l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 01-1.06-1.06l.97-.97-.97-.97a.75.75 0 010-1.06zM5 7.75c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 7.75zm0 4c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextIndentIncrease16Filled = wrapIcon(rawSvg({}), 'TextIndentIncrease16Filled');
export default TextIndentIncrease16Filled;
      