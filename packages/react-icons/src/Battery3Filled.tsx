import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.83 7a.84.84 0 00-.83.84v4.32c0 .47.37.84.83.84h1.33c.47 0 .84-.37.84-.84V7.84A.84.84 0 006.16 7H4.83zM2 7.55a2.5 2.5 0 012.5-2.5h9a2.5 2.5 0 012.5 2.5v.84h1.17a.83.83 0 01.83.83v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-9a2.5 2.5 0 01-2.5-2.5v-5z" fill={primaryFill} /></svg>;
}

const Battery3Filled = wrapIcon(rawSvg({}), 'Battery3Filled');
export default Battery3Filled;
      