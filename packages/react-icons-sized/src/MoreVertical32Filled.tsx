import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 7a3 3 0 106 0 3 3 0 00-6 0zm0 9a3 3 0 106 0 3 3 0 00-6 0zm0 9a3 3 0 106 0 3 3 0 00-6 0z" fill={primaryFill} /></svg>;
}

const MoreVertical32Filled = wrapIcon(rawSvg({}), 'MoreVertical32Filled');
export default MoreVertical32Filled;
      