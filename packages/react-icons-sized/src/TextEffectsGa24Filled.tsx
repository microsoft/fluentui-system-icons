import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 10.62a11.24 11.24 0 01-1.08 3.07 6.55 6.55 0 01-2.17 2.35c-.94.6-2.1.96-3.5.96a1 1 0 110-2 4.2 4.2 0 004.07-2.56c.23-.45.4-.94.54-1.44.18-.66.3-1.34.35-2H5a1 1 0 010-2h6a1 1 0 011 1c0 .36-.01.75-.05 1.15v.01c-.04.47-.1.96-.2 1.46zM7.52 11c-.1.26-.21.5-.33.73-.26.45-.54.75-.83.94-.29.18-.7.33-1.36.33a3 3 0 100 6 8.19 8.19 0 007.41-4.33A13.95 13.95 0 0014 8v10a3 3 0 106 0v-5.04a3 3 0 000-5.92V5a3 3 0 10-6 0v3a3 3 0 00-3-3H5a3 3 0 000 6h2.52zm11.98 0H18v7a1 1 0 11-2 0V5a1 1 0 112 0v4h1.5a1 1 0 110 2z" fill={primaryFill} /></svg>;
}

const TextEffectsGa24Filled = wrapIcon(rawSvg({}), 'TextEffectsGa24Filled');
export default TextEffectsGa24Filled;
      