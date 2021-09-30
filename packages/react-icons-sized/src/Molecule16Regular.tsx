import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8a3 3 0 10-2.7-1.7L5.94 7.45a2.5 2.5 0 10.76 3.2l2.3 1.15L9 12a2 2 0 10.35-1.13L7 9.69a2.54 2.54 0 00-.34-1.46l2.23-1.11A3 3 0 0011 8zm0-1a2 2 0 110-4 2 2 0 010 4zm-6.5 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5 1a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const Molecule16Regular = wrapIcon(rawSvg({}), 'Molecule16Regular');
export default Molecule16Regular;
      