import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 22H5.8a3.8 3.8 0 01-2.78-6.39l1.14-1.22a3.06 3.06 0 00-.08-4.25L2.97 9.03a.75.75 0 011.06-1.06l1.11 1.11a4.56 4.56 0 01.11 6.34l-1.13 1.21A2.3 2.3 0 005.8 20.5h.67A23.84 23.84 0 017 15.45c.34-1.46.91-3 1.9-4.17a5.4 5.4 0 013.6-1.99V5.15A3.15 3.15 0 0115.64 2C16.4 2 17 2.6 17 3.35V4h1.64c.95 0 1.83.5 2.33 1.3l.62 1a2.75 2.75 0 01-2.09 4.19v9.26c0 1.24-1 2.25-2.25 2.25h-.75v-2.25A3.75 3.75 0 0012.74 16H11.5a.75.75 0 000 1.5h1.25c1.25 0 2.25 1 2.25 2.25V22H7.25z" fill={primaryFill} /></svg>;
}

const AnimalCat24Filled = wrapIcon(rawSvg({}), 'AnimalCat24Filled');
export default AnimalCat24Filled;
      