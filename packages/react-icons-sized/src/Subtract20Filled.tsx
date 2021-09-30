import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 10c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" fill={primaryFill} /></svg>;
}

const Subtract20Filled = wrapIcon(rawSvg({}), 'Subtract20Filled');
export default Subtract20Filled;
      