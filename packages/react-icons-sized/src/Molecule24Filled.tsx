import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 12a5 5 0 10-4.34-2.51l-2.71 1.8A3.99 3.99 0 002 14a4 4 0 007.18 2.43l3.89 1.94a3 3 0 10.67-1.34l-3.89-1.94a4 4 0 00-.11-2.52l2.86-1.9c.9.82 2.09 1.33 3.4 1.33z" fill={primaryFill} /></svg>;
}

const Molecule24Filled = wrapIcon(rawSvg({}), 'Molecule24Filled');
export default Molecule24Filled;
      