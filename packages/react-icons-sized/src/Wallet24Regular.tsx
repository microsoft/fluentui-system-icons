import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 13a.75.75 0 000 1.5h2a.75.75 0 000-1.5h-2zm3-7.25A2.75 2.75 0 0016.5 3H5.25a2.25 2.25 0 00-2.24 2.4L3 5.5v12.25C3 19.55 4.46 21 6.25 21h12.5a2.75 2.75 0 002.75-2.75v-9.5c0-1.35-.97-2.47-2.25-2.7v-.3zM4.5 5.25c0-.41.34-.75.75-.75H16.5c.69 0 1.25.56 1.25 1.25V6H5.25a.75.75 0 01-.75-.75zm.75 2.25h13.5c.69 0 1.25.56 1.25 1.25v9.5c0 .69-.56 1.25-1.25 1.25H6.25c-.97 0-1.75-.78-1.75-1.75V7.37c.23.08.49.13.75.13z" fill={primaryFill} /></svg>;
}

const Wallet24Regular = wrapIcon(rawSvg({}), 'Wallet24Regular');
export default Wallet24Regular;
      