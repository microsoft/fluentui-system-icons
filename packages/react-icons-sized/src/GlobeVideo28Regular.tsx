import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 14a12 12 0 1123.99.5c-.5 0-1.03.15-1.49.5l-.05.04a10.63 10.63 0 00-.25-3.54h-4.33c.07.65.11 1.32.12 2h-1.5c-.01-.69-.06-1.36-.13-2H8.64a22.18 22.18 0 00.23 6.5h2.63v1.5H9.22c.24.86.54 1.64.88 2.31.46.92.94 1.56 1.4 1.98V24c0 .73.22 1.4.6 1.97A12 12 0 011 14zM13 3.5c-.78 0-1.9.67-2.9 2.69A14.85 14.85 0 008.87 10h8.26c-.28-1.47-.7-2.77-1.23-3.81-1-2.02-2.12-2.69-2.9-2.69zm3.35.55a14.37 14.37 0 012.3 5.95h4.06a10.53 10.53 0 00-6.36-5.95zm-6.7 19.9a13.03 13.03 0 01-1.98-4.45H4.05a10.53 10.53 0 005.6 4.45zM7.35 18a23.07 23.07 0 01-.22-6.5H2.8a10.52 10.52 0 00.49 6.5h4.05zm0-8a14.37 14.37 0 012.3-5.95C6.76 5.02 4.45 7.2 3.29 10h4.05zm7.08 15.92A2 2 0 0113 24v-7c0-1.1.9-2 2-2h5a2 2 0 012 2v1l2.4-1.8a1 1 0 011.6.8v7a1 1 0 01-1.6.8L22 23v1a2 2 0 01-2 2h-5a2 2 0 01-.57-.08z" fill={primaryFill} /></svg>;
}

const GlobeVideo28Regular = wrapIcon(rawSvg({}), 'GlobeVideo28Regular');
export default GlobeVideo28Regular;
      