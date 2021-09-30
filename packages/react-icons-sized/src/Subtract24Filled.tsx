import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 13h16a1 1 0 100-2H4a1 1 0 100 2z" fill={primaryFill} /></svg>;
}

const Subtract24Filled = wrapIcon(rawSvg({}), 'Subtract24Filled');
export default Subtract24Filled;
      