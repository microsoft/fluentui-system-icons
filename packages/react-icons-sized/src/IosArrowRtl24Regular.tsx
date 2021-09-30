import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.7 12l-8.49-8.73a.75.75 0 111.08-1.04l9 9.25c.28.29.28.75 0 1.04l-9 9.25a.75.75 0 11-1.08-1.04l8.5-8.73z" fill={primaryFill} /></svg>;
}

const IosArrowRtl24Regular = wrapIcon(rawSvg({}), 'IosArrowRtl24Regular');
export default IosArrowRtl24Regular;
      