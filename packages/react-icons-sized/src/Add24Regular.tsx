import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 3c.38 0 .7.28.74.65l.01.1V11h7.25a.75.75 0 01.1 1.5H12.5v7.25a.75.75 0 01-1.49.1V12.5H3.74a.75.75 0 01-.1-1.5H11V3.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const Add24Regular = wrapIcon(rawSvg({}), 'Add24Regular');
export default Add24Regular;
      