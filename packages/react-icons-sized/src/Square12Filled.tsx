import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" fill={primaryFill} /></svg>;
}

const Square12Filled = wrapIcon(rawSvg({}), 'Square12Filled');
export default Square12Filled;
      