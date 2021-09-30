import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 1c.83 0 1.5.67 1.5 1.5V4H2V2.5C2 1.67 2.67 1 3.5 1h5zm2 4a.5.5 0 010 1h-9a.5.5 0 010-1h9zM2 7v1.5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5V7H2z" fill={primaryFill} /></svg>;
}

const SplitHorizontal12Filled = wrapIcon(rawSvg({}), 'SplitHorizontal12Filled');
export default SplitHorizontal12Filled;
      