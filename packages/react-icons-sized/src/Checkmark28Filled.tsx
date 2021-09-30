import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 19.59l-6.3-6.3a1 1 0 00-1.4 1.42l7 7a1 1 0 001.4 0l14-14a1 1 0 00-1.4-1.42L10.5 19.6z" fill={primaryFill} /></svg>;
}

const Checkmark28Filled = wrapIcon(rawSvg({}), 'Checkmark28Filled');
export default Checkmark28Filled;
      