import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.76 9.3a.75.75 0 00-1.02-1.1l-5.47 5.01-1.99-1.99a.75.75 0 00-1.06 1.06l2.5 2.5c.28.28.74.3 1.04.02l6-5.5zM20.25 5c-2.66 0-5.26-.94-7.8-2.85a.75.75 0 00-.9 0C9.01 4.05 6.41 5 3.75 5a.75.75 0 00-.75.75V11c0 5 2.96 8.68 8.73 10.95.17.07.37.07.54 0C18.04 19.68 21 16 21 11V5.75a.75.75 0 00-.75-.75zM4.5 6.48a14.36 14.36 0 007.5-2.8 14.36 14.36 0 007.5 2.8V11c0 4.26-2.45 7.38-7.5 9.44-5.05-2.06-7.5-5.18-7.5-9.44V6.48z" fill={primaryFill} /></svg>;
}

const ShieldTask24Regular = wrapIcon(rawSvg({}), 'ShieldTask24Regular');
export default ShieldTask24Regular;
      