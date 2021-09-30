import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.27 3.69a1 1 0 111.46-1.38l8.5 9a1 1 0 010 1.38l-8.5 9a1 1 0 11-1.46-1.38L19.12 12l-7.85-8.31z" fill={primaryFill} /></svg>;
}

const IosArrowRtl24Filled = wrapIcon(rawSvg({}), 'IosArrowRtl24Filled');
export default IosArrowRtl24Filled;
      