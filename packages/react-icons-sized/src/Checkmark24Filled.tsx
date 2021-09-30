import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 16.59l-3.8-3.8a1 1 0 00-1.4 1.42l4.5 4.5a1 1 0 001.4 0l11-11a1 1 0 00-1.4-1.42L8.5 16.6z" fill={primaryFill} /></svg>;
}

const Checkmark24Filled = wrapIcon(rawSvg({}), 'Checkmark24Filled');
export default Checkmark24Filled;
      