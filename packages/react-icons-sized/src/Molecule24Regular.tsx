import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 12a5 5 0 10-4.34-2.51l-2.71 1.8A3.99 3.99 0 002 14a4 4 0 007.18 2.43l3.89 1.94a3 3 0 10.67-1.34l-3.89-1.94a4 4 0 00-.11-2.52l2.86-1.9c.9.82 2.09 1.33 3.4 1.33zm0-1.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm-10 6a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM17.5 19a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const Molecule24Regular = wrapIcon(rawSvg({}), 'Molecule24Regular');
export default Molecule24Regular;
      