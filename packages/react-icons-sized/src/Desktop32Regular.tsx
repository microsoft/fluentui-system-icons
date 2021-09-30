import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3A3.25 3.25 0 002 6.25v15.5C2 23.55 3.46 25 5.25 25h6.76v2h-3a1 1 0 100 2h14a1 1 0 100-2h-3v-2h6.74c1.8 0 3.25-1.46 3.25-3.25V6.25C30 4.45 28.54 3 26.75 3H5.25zm12.76 22v2h-4v-2h4zM4 6.25C4 5.56 4.56 5 5.25 5h21.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H5.25C4.56 23 4 22.44 4 21.75V6.25z" fill={primaryFill} /></svg>;
}

const Desktop32Regular = wrapIcon(rawSvg({}), 'Desktop32Regular');
export default Desktop32Regular;
      