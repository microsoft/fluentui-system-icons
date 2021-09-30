import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.55 2.15c.26-.2.63-.2.9 0a18.61 18.61 0 006.28 2.75 25.9 25.9 0 003.28.6h.05c.4.04.69.36.69.75V13c0 .42-.02.84-.07 1.27-.45-.3-.93-.56-1.44-.76l.01-.51V6.92a23.14 23.14 0 01-2.89-.57c-1.89-.47-4.28-1.3-6.35-2.68a17.6 17.6 0 01-4.27 2.05 27.66 27.66 0 01-5.24 1.2v5.83c0 3.49 1.9 7.48 6 10.07 1.03.64 2.2 1.2 3.5 1.64l.1-.04c.28.45.6.87.97 1.25l-.84.3a.75.75 0 01-.46 0C6.47 23.61 3 17.83 3 12.74v-6.5c0-.39.3-.72.69-.75h.02a8.7 8.7 0 00.43-.04l1.23-.19C6.4 5.1 7.8 4.8 9.26 4.3c1.5-.5 3.02-1.2 4.29-2.15zM27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-2.65-2.85a.5.5 0 00-.7 0L19 22.29l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ShieldCheckmark28Regular = wrapIcon(rawSvg({}), 'ShieldCheckmark28Regular');
export default ShieldCheckmark28Regular;
      