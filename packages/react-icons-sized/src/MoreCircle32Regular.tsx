import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4zm8-2a2 2 0 11-4 0 2 2 0 014 0zm6 0a14 14 0 11-28 0 14 14 0 0128 0zm-2 0a12 12 0 10-24 0 12 12 0 0024 0z" fill={primaryFill} /></svg>;
}

const MoreCircle32Regular = wrapIcon(rawSvg({}), 'MoreCircle32Regular');
export default MoreCircle32Regular;
      