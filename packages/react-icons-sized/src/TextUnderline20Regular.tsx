import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3.5a.5.5 0 00-1 0v6.45A5.02 5.02 0 0010 15c2.77 0 5-2.26 5-5.05V3.5a.5.5 0 00-1 0v6.45C14 12.2 12.2 14 10 14s-4-1.8-4-4.05V3.5zm-1 13c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TextUnderline20Regular = wrapIcon(rawSvg({}), 'TextUnderline20Regular');
export default TextUnderline20Regular;
      