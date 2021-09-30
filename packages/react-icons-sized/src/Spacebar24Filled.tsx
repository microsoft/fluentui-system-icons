import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 11v2H4v-2a1 1 0 10-2 0v2c0 1.1.9 2 2 2h16a2 2 0 002-2v-2a1 1 0 10-2 0z" fill={primaryFill} /></svg>;
}

const Spacebar24Filled = wrapIcon(rawSvg({}), 'Spacebar24Filled');
export default Spacebar24Filled;
      