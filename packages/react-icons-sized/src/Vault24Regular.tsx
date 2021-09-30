import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.58 13.52a2.99 2.99 0 000-3.04l1.2-1.2a.75.75 0 00-1.06-1.06l-1.2 1.2a2.99 2.99 0 00-3.04 0l-1.2-1.2a.75.75 0 10-1.06 1.06l1.2 1.2a2.99 2.99 0 000 3.04l-1.2 1.2a.75.75 0 101.06 1.06l1.2-1.2a2.99 2.99 0 003.04 0l1.2 1.2a.75.75 0 101.06-1.06l-1.2-1.2zM14 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /><path d="M6.5 7.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5z" fill={primaryFill} /><path d="M2 7.75A3.75 3.75 0 015.75 4h12.5A3.75 3.75 0 0122 7.75v8.5A3.75 3.75 0 0118.25 20H5.75A3.75 3.75 0 012 16.25v-8.5zM5.75 5.5c-1.24 0-2.25 1-2.25 2.25v8.5c0 1.24 1 2.25 2.25 2.25h12.5c1.24 0 2.25-1 2.25-2.25v-8.5c0-1.24-1-2.25-2.25-2.25H5.75z" fill={primaryFill} /></svg>;
}

const Vault24Regular = wrapIcon(rawSvg({}), 'Vault24Regular');
export default Vault24Regular;
      