import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.16 2.19a1.96 1.96 0 011.68 0l4.87 2.3a.5.5 0 01.01.9L6.87 7.8c-.55.28-1.2.28-1.74 0L1 5.76V8a.5.5 0 01-1 0V5v-.03A.5.5 0 01.3 4.5l4.87-2.31zM2 7.37V9c0 .13.05.26.15.35l.02.03a3.45 3.45 0 00.28.24c.19.15.46.36.8.56.66.4 1.63.82 2.75.82s2.09-.42 2.76-.82a6.74 6.74 0 001.07-.8l.02-.02A.5.5 0 0010 9V7.37L7.32 8.7c-.83.41-1.8.41-2.64 0L2 7.37z" fill={primaryFill} /></svg>;
}

const HatGraduation12Filled = wrapIcon(rawSvg({}), 'HatGraduation12Filled');
export default HatGraduation12Filled;
      