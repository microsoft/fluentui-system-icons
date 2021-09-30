import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 30a14 14 0 100-28 14 14 0 000 28zm-6-12a2 2 0 110-4 2 2 0 010 4zm8-2a2 2 0 11-4 0 2 2 0 014 0zm4 2a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /></svg>;
}

const MoreCircle32Filled = wrapIcon(rawSvg({}), 'MoreCircle32Filled');
export default MoreCircle32Filled;
      