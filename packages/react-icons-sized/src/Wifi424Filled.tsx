import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.96 18.57a1.5 1.5 0 102.12-2.12 1.5 1.5 0 00-2.12 2.12z" fill={primaryFill} /></svg>;
}

const Wifi424Filled = wrapIcon(rawSvg({}), 'Wifi424Filled');
export default Wifi424Filled;
      