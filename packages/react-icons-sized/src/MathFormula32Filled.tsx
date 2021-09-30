import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.66 4.84a2.28 2.28 0 00-3.46 1.73l-.24 2.52H17a1.25 1.25 0 010 2.5h-4.28l-1.43 14.84a4.5 4.5 0 01-7.32 3.05l-.51-.41a1.25 1.25 0 011.58-1.94l.5.41a2 2 0 003.26-1.36l1.4-14.58H8.14a1.25 1.25 0 010-2.5h2.32l.27-2.77a4.78 4.78 0 017.24-3.63l.94.58a1.25 1.25 0 01-1.3 2.13l-.94-.57zm10.97 11.39a1.25 1.25 0 00-1.76-1.77l-4.4 4.4-1.37-2.9a3.2 3.2 0 00-4.8-1.2l-.8.58a1.25 1.25 0 001.5 2.01l.79-.59a.7.7 0 011.05.27l1.76 3.7-5.23 5.24a1.25 1.25 0 001.76 1.76l4.6-4.6 1.5 3.17a3.2 3.2 0 005.06 1l.3-.28a1.25 1.25 0 00-1.68-1.85l-.3.28a.7.7 0 01-1.11-.22l-1.89-3.98 5.02-5.02z" fill={primaryFill} /></svg>;
}

const MathFormula32Filled = wrapIcon(rawSvg({}), 'MathFormula32Filled');
export default MathFormula32Filled;
      