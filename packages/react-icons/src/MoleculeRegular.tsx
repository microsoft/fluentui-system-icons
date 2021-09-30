import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10a4 4 0 10-3.77-2.67L7.1 8.39a3.5 3.5 0 101.3 5.08l2.69 1.38a2.5 2.5 0 10.44-.9l-2.7-1.38a3.5 3.5 0 00-.82-3.51l1.66-.84A4 4 0 0013 10zm0-1a3 3 0 110-6 3 3 0 010 6zm-7.5 5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm9.5 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const MoleculeRegular = wrapIcon(rawSvg({}), 'MoleculeRegular');
export default MoleculeRegular;
      