import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 5c-2.66 0-5.26-.94-7.8-2.85a.75.75 0 00-.9 0C9.01 4.05 6.41 5 3.75 5a.75.75 0 00-.75.75V11c0 5 2.96 8.68 8.73 10.95.17.07.37.07.54 0C18.04 19.68 21 16 21 11V5.75a.75.75 0 00-.75-.75zm-3.5 4.3l-6 5.5a.75.75 0 01-1.03-.02l-2.5-2.5a.75.75 0 111.06-1.06l2 2 5.46-5.02a.75.75 0 011.02 1.1z" fill={primaryFill} /></svg>;
}

const ShieldTask24Filled = wrapIcon(rawSvg({}), 'ShieldTask24Filled');
export default ShieldTask24Filled;
      