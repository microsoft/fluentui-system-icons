import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3a5 5 0 00-3.87 8.16l7.03-7.03A4.98 4.98 0 008 3zm3.87 1.84l-7.03 7.03a5 5 0 007.04-7.04zM2 8a6 6 0 1112 0A6 6 0 012 8z" fill={primaryFill} /></svg>;
}

const Prohibited16Regular = wrapIcon(rawSvg({}), 'Prohibited16Regular');
export default Prohibited16Regular;
      