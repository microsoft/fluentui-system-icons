import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 8a1 1 0 00-1 .88L8 13.13a1 1 0 001.12 1.11l2.57-.3a2.3 2.3 0 11.27 4.56h-.15c-.7 0-1.37-.3-1.84-.83l-.72-.83a1 1 0 10-1.5 1.32l.72.82a4.44 4.44 0 003.34 1.52h.15a4.3 4.3 0 10-.51-8.55l-1.3.16.24-2.11h4.11a1 1 0 100-2h-5zm7.8 6.3a1 1 0 011.4 0l1.3 1.29 1.3-1.3a1 1 0 011.4 1.42L21.42 17l1.3 1.3a1 1 0 01-1.42 1.4L20 18.42l-1.3 1.3a1 1 0 01-1.4-1.42L18.58 17l-1.3-1.3a1 1 0 010-1.4zM6.5 19.24a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const Multiplier5X28Filled = wrapIcon(rawSvg({}), 'Multiplier5X28Filled');
export default Multiplier5X28Filled;
      