import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.83 2.44a1 1 0 00-1.66 1.12l4.8 7.11-2.33 3.68A3.99 3.99 0 003 18a4 4 0 107.2-2.4l1.98-3.12 1.89 2.8A3.99 3.99 0 0017 22a4 4 0 10-1.25-7.8l-3.62-5.38-4.3-6.38zM5 18a2 2 0 114 0 2 2 0 01-4 0zm10 0a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /><path d="M14.52 8.79l3.33-5.26a1 1 0 00-1.7-1.07L13.3 6.98l1.22 1.81z" fill={primaryFill} /></svg>;
}

const Cut24Filled = wrapIcon(rawSvg({}), 'Cut24Filled');
export default Cut24Filled;
      