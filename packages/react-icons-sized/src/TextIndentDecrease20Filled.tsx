import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 016 4.75z" fill={primaryFill} /><path d="M6.75 9a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75z" fill={primaryFill} /><path d="M6.75 14a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" fill={primaryFill} /><path d="M3.47 11.78a.75.75 0 001.06-1.06l-.97-.97.97-.97a.75.75 0 00-1.06-1.06l-1.5 1.5c-.3.3-.3.77 0 1.06l1.5 1.5z" fill={primaryFill} /></svg>;
}

const TextIndentDecrease20Filled = wrapIcon(rawSvg({}), 'TextIndentDecrease20Filled');
export default TextIndentDecrease20Filled;
      