import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 5.05a2.5 2.5 0 012.5 2.5v.84h1.17a.83.83 0 01.83.83v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-9a2.5 2.5 0 01-2.5-2.5v-5a2.5 2.5 0 012.5-2.5h9zM4.5 7a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const Battery120Filled = wrapIcon(rawSvg({}), 'Battery120Filled');
export default Battery120Filled;
      