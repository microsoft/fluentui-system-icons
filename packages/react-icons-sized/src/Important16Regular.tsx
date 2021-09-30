import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.2 8.83a.2.2 0 01-.4 0l-.86-4.56a1.07 1.07 0 112.12 0L8.2 8.83zM8 2a2.07 2.07 0 00-2.04 2.46l.86 4.56a1.2 1.2 0 002.36 0l.86-4.56A2.07 2.07 0 008 2z" fill={primaryFill} /><path d="M8 13a.5.5 0 110-1 .5.5 0 010 1zm0 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const Important16Regular = wrapIcon(rawSvg({}), 'Important16Regular');
export default Important16Regular;
      