import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 13h18a1 1 0 01.12 2H3a1 1 0 01-.12-2H21 3zm0-4h18a1 1 0 01.12 2H3a1 1 0 01-.12-2H21 3z" fill={primaryFill} /></svg>;
}

const ReOrder24Filled = wrapIcon(rawSvg({}), 'ReOrder24Filled');
export default ReOrder24Filled;
      