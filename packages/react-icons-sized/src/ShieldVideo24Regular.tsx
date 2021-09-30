import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75c0-.41.34-.75.75-.75 2.66 0 5.26-.94 7.8-2.85.27-.2.63-.2.9 0C14.99 4.05 17.59 5 20.25 5c.41 0 .75.34.75.75V11l-.01.54a3.5 3.5 0 00-1.49-.9V6.48a14.36 14.36 0 01-7.5-2.8 14.36 14.36 0 01-7.5 2.8V11c0 4.26 2.45 7.38 7.5 9.44a21 21 0 001-.44v1.65l-.73.3a.75.75 0 01-.54 0C5.96 19.68 3 16 3 11V5.75zM16 15v-1a2.5 2.5 0 015 0v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h.5zm1.5-1v1h2v-1a1 1 0 10-2 0zm2 5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const ShieldVideo24Regular = wrapIcon(rawSvg({}), 'ShieldVideo24Regular');
export default ShieldVideo24Regular;
      