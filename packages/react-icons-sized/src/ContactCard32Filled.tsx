import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v17.5C2 26.55 3.46 28 5.25 28h21.5c1.8 0 3.25-1.46 3.25-3.25V7.25C30 5.45 28.54 4 26.75 4H5.25zM18 13a1 1 0 011-1h6a1 1 0 010 2h-6a1 1 0 01-1-1zm1 4h6a1 1 0 010 2h-6a1 1 0 110-2zm-6-4a2 2 0 11-4 0 2 2 0 014 0zm-6 4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 0 0 3.5-4 3.5s-4-3.5-4-3.5z" fill={primaryFill} /></svg>;
}

const ContactCard32Filled = wrapIcon(rawSvg({}), 'ContactCard32Filled');
export default ContactCard32Filled;
      