import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.41 2.52a2.39 2.39 0 00-3.2.2 2.55 2.55 0 000 3.54L5.76 9.9c.15.15.38.15.53 0l3.51-3.6c.95-.98.95-2.56 0-3.54a2.4 2.4 0 00-3.46 0L6 3.08l-.34-.35a2.5 2.5 0 00-.25-.22zm1.64.92a1.4 1.4 0 012.02 0c.57.6.57 1.56 0 2.15L6.01 8.73 2.93 5.57a1.55 1.55 0 010-2.14 1.4 1.4 0 012.01 0l.34.35a1 1 0 001.43 0l.34-.34z" fill={primaryFill} /></svg>;
}

const Heart12Regular = wrapIcon(rawSvg({}), 'Heart12Regular');
export default Heart12Regular;
      