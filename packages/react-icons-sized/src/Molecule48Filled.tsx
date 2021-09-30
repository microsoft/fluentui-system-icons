import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M32 24a10 10 0 10-8.55-4.8l-5.38 3.58a8 8 0 10.44 9.87l7.68 3.84a6.01 6.01 0 101.12-2.23l-7.68-3.84a8 8 0 00-.25-5.5l5.64-3.76A9.97 9.97 0 0032 24z" fill={primaryFill} /></svg>;
}

const Molecule48Filled = wrapIcon(rawSvg({}), 'Molecule48Filled');
export default Molecule48Filled;
      