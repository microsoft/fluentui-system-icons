import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 6.05v-.3A2.75 2.75 0 0016.5 3H5.25a2.25 2.25 0 00-2.24 2.4L3 5.5v12.25C3 19.55 4.46 21 6.25 21h12.5a2.75 2.75 0 002.75-2.75v-9.5c0-1.35-.97-2.47-2.25-2.7zm-14-1.55H16.5c.69 0 1.25.56 1.25 1.25V6H5.25a.75.75 0 010-1.5zm11 8.5h2a.75.75 0 010 1.5h-2a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const Wallet24Filled = wrapIcon(rawSvg({}), 'Wallet24Filled');
export default Wallet24Filled;
      