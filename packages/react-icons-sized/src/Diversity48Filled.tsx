import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31 6a5 5 0 00-5 5v6a5 5 0 005 5h6a5 5 0 005-5v-6a5 5 0 00-5-5h-6zM16.9 7.8a3.24 3.24 0 00-5.8 0l-4.74 9.43A3.28 3.28 0 009.26 22h9.49c2.43 0 4-2.59 2.9-4.77L16.9 7.8zM8.77 27.94a8.04 8.04 0 00-1.43 1.63l.04.05 11.05 11.04c.8-.53 1.5-1.2 2.05-1.97L9.56 27.34a8 8 0 00-.79.6zm3.21-1.68l9.68 10.05a8 8 0 00-9.68-10.05zm4 15.5l-9.73-9.74a8.02 8.02 0 009.73 9.73zm20-15.26a4.22 4.22 0 00-3.97 0l-3.9 2.08A3.95 3.95 0 0026 32.06v3.88c0 1.45.81 2.78 2.12 3.48l3.9 2.08c1.23.67 2.73.67 3.97 0l3.9-2.08A3.95 3.95 0 0042 35.94v-3.88c0-1.45-.81-2.78-2.12-3.48l-3.9-2.08z" fill={primaryFill} /></svg>;
}

const Diversity48Filled = wrapIcon(rawSvg({}), 'Diversity48Filled');
export default Diversity48Filled;
      