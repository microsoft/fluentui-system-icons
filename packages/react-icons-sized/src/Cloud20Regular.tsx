import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0118 11.62 3.33 3.33 0 0114.72 15H5.28A3.33 3.33 0 012 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4zm0 1C7.89 5 6.55 6.32 6.35 8.35a1 1 0 01-1 .9h-.07A2.33 2.33 0 003 11.62 2.33 2.33 0 005.28 14h9.44A2.33 2.33 0 0017 11.62a2.33 2.33 0 00-2.28-2.37h-.07a1 1 0 01-1-.9C13.45 6.32 12.11 5 10 5z" fill={primaryFill} /></svg>;
}

const Cloud20Regular = wrapIcon(rawSvg({}), 'Cloud20Regular');
export default Cloud20Regular;
      