import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 2.68A2 2 0 0012 2H8a2 2 0 00-2 2v.17A3 3 0 017 4h6.04c.06-.48.23-.92.47-1.32zM13.05 5H7a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2v-2a1 1 0 001-1V9a1 1 0 00-1-1v-.34A3.5 3.5 0 0113.04 5zM7 16a3 3 0 01-1-.17V16c0 1.1.9 2 2 2h4a2 2 0 002-2v-.17a3 3 0 01-1 .17H7zM19 4.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const SmartwatchDotFilled = wrapIcon(rawSvg({}), 'SmartwatchDotFilled');
export default SmartwatchDotFilled;
      