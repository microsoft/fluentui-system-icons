import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.47 6.28a.75.75 0 011.06-1.06L12 6.69l1.47-1.47a.75.75 0 111.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2z" fill={primaryFill} /><path d="M3 11.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3 17.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextAddSpaceBefore24Regular = wrapIcon(rawSvg({}), 'TextAddSpaceBefore24Regular');
export default TextAddSpaceBefore24Regular;
      