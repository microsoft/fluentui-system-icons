import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.43 1.46a.5.5 0 00-.77 0c-.72.87-2.18 1.92-3.01 2.39a.5.5 0 00-.25.37L1.74 9H1.5a.5.5 0 100 1h9a.5.5 0 100-1h-.14L9.7 4.22a.5.5 0 00-.25-.37 12.87 12.87 0 01-3.02-2.4zM4.83 9c.41-.63.82-1.42 1.2-2.5.36 1 .75 1.77 1.21 2.5h-2.4z" fill={primaryFill} /></svg>;
}

const Tent12Filled = wrapIcon(rawSvg({}), 'Tent12Filled');
export default Tent12Filled;
      