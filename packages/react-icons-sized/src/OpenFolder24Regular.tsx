import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3h10.5c2 0 3.64 1.57 3.75 3.55v4.7a.75.75 0 01-1.49.1v-4.6c0-1.19-.93-2.16-2.1-2.24h-.16L6.75 4.5c-1.18 0-2.15.9-2.25 2.06v10.69c0 1.2.93 2.17 2.1 2.25h4.65a.75.75 0 01.1 1.5h-4.6c-2 0-3.64-1.57-3.75-3.55V6.55A3.75 3.75 0 016.55 3l.2-.01zm3 6h6.5a.75.75 0 01.1 1.5h-4.79l7.22 7.22c.27.27.3.68.08.98l-.08.08a.75.75 0 01-.97.07l-.09-.07-7.22-7.22v4.7c0 .37-.28.68-.65.73l-.1.01a.75.75 0 01-.74-.65l-.01-.1V9.73a.5.5 0 010-.07l.03-.11.03-.1a.72.72 0 01.16-.23l.04-.04.08-.06.06-.04.1-.04.07-.02.06-.01.1-.01h6.52-6.5z" fill={primaryFill} /></svg>;
}

const OpenFolder24Regular = wrapIcon(rawSvg({}), 'OpenFolder24Regular');
export default OpenFolder24Regular;
      