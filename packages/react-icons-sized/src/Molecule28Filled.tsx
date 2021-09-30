import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 14a6 6 0 10-5.36-3.3l-3.36 2.35a4.5 4.5 0 10-.3 5.3l5.2 3.04a3.5 3.5 0 10.77-1.29l-5.23-3.05a4.5 4.5 0 00.16-2.59l3.6-2.52A5.99 5.99 0 0019 14z" fill={primaryFill} /></svg>;
}

const Molecule28Filled = wrapIcon(rawSvg({}), 'Molecule28Filled');
export default Molecule28Filled;
      