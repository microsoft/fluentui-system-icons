import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 12l8.49-8.73a.75.75 0 10-1.08-1.04l-9 9.25a.75.75 0 000 1.04l9 9.25a.75.75 0 101.08-1.04L4.29 12z" fill={primaryFill} /></svg>;
}

const IosArrowLtr24Regular = wrapIcon(rawSvg({}), 'IosArrowLtr24Regular');
export default IosArrowLtr24Regular;
      