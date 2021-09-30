import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 16a14 14 0 1128 0 14 14 0 01-28 0zm19.7-5.7a1 1 0 00-1.4 0L16 14.58l-4.3-4.3a1 1 0 10-1.4 1.42L14.58 16l-4.3 4.3a1 1 0 101.42 1.4L16 17.42l4.3 4.3a1 1 0 001.4-1.42L17.42 16l4.3-4.3a1 1 0 000-1.4z" fill={primaryFill} /></svg>;
}

const DismissCircle32Filled = wrapIcon(rawSvg({}), 'DismissCircle32Filled');
export default DismissCircle32Filled;
      