import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.7 10.3a1 1 0 010 1.4L17.42 16l4.3 4.3a1 1 0 01-1.42 1.4L16 17.42l-4.3 4.3a1 1 0 01-1.4-1.42L14.58 16l-4.3-4.3a1 1 0 111.42-1.4L16 14.58l4.3-4.3a1 1 0 011.4 0zM16 2a14 14 0 100 28 14 14 0 000-28zM4 16a12 12 0 1124 0 12 12 0 01-24 0z" fill={primaryFill} /></svg>;
}

const DismissCircle32Regular = wrapIcon(rawSvg({}), 'DismissCircle32Regular');
export default DismissCircle32Regular;
      