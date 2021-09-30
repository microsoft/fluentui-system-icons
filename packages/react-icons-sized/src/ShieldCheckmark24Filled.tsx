import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75c0-.41.34-.75.75-.75 2.66 0 5.26-.94 7.8-2.85.27-.2.63-.2.9 0C14.99 4.05 17.59 5 20.25 5c.41 0 .75.34.75.75V11c0 .34-.01.67-.04 1a6.5 6.5 0 00-8.33 9.8l-.36.15a.75.75 0 01-.54 0C5.96 19.68 3 16 3 11V5.75zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-2.15-2.35c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 3.65-3.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ShieldCheckmark24Filled = wrapIcon(rawSvg({}), 'ShieldCheckmark24Filled');
export default ShieldCheckmark24Filled;
      