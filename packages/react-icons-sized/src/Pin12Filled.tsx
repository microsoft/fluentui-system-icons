import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.05 1.44a1.5 1.5 0 00-2.38.34L4.14 4.61l-2.33.93a.5.5 0 00-.16.81L3.29 8l-2.14 2.15L1 11l.85-.15L4 8.71l1.65 1.64a.5.5 0 00.81-.16l.94-2.34 2.82-1.52a1.5 1.5 0 00.34-2.38l-2.5-2.51z" fill={primaryFill} /></svg>;
}

const Pin12Filled = wrapIcon(rawSvg({}), 'Pin12Filled');
export default Pin12Filled;
      