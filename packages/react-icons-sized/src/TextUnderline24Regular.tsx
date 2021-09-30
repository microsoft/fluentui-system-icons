import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 19h10.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h10.6-10.5zm10.5-15c.38 0 .7.28.74.65l.01.1v6c0 4.4-2.06 6.75-6 6.75-3.86 0-5.91-2.26-6-6.47V4.75a.75.75 0 011.5-.1v6.1C7.5 14.35 8.93 16 12 16c2.98 0 4.43-1.56 4.5-4.98V4.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const TextUnderline24Regular = wrapIcon(rawSvg({}), 'TextUnderline24Regular');
export default TextUnderline24Regular;
      