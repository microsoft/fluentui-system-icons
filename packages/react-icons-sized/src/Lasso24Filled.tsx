import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.7 2.27a10.03 10.03 0 014.6 0 1 1 0 01-.46 1.94 8.03 8.03 0 00-3.68 0 1 1 0 11-.46-1.94z" fill={primaryFill} /><path d="M15.88 3.82a1 1 0 011.38-.33c1.32.82 2.43 1.93 3.25 3.25a1 1 0 11-1.7 1.05 8.05 8.05 0 00-2.6-2.6 1 1 0 01-.33-1.37z" fill={primaryFill} /><path d="M8.12 3.82a1 1 0 01-.33 1.37 8.05 8.05 0 00-2.6 2.6 1 1 0 11-1.7-1.05A10.05 10.05 0 016.74 3.5a1 1 0 011.38.33z" fill={primaryFill} /><path d="M3.47 8.96a1 1 0 01.74 1.2 8.03 8.03 0 000 3.68 1 1 0 01-1.94.46 10.03 10.03 0 010-4.6 1 1 0 011.2-.74z" fill={primaryFill} /><path d="M20.53 8.96a1 1 0 011.2.74 10.02 10.02 0 010 4.6 1 1 0 01-1.94-.46 8.03 8.03 0 000-3.68 1 1 0 01.74-1.2z" fill={primaryFill} /><path d="M3.82 15.88a1 1 0 011.37.33 8.05 8.05 0 002.6 2.6 1 1 0 01-1.05 1.7 10.05 10.05 0 01-3.25-3.25 1 1 0 01.33-1.38z" fill={primaryFill} /><path d="M20.62 17.49a1 1 0 00-1.74-.98l-.01.02a3.82 3.82 0 01-.34.5c-.18.24-.43.54-.74.85A7.35 7.35 0 0013 16c-2.27 0-4 1.2-4 3s1.73 3 4 3c1.91 0 3.46-.63 4.64-1.41a10.98 10.98 0 011.19 1.8l.01.03a1 1 0 001.81-.85c-.11-.23 0 0 0 0v-.02l-.02-.03-.01-.02a8.04 8.04 0 00-.46-.8c-.23-.4-.56-.88-.98-1.38a10.41 10.41 0 001.4-1.76l.03-.05v-.01h.01v-.01zM13 18c1.23 0 2.29.48 3.17 1.14-.86.5-1.92.86-3.17.86-1.73 0-2-.8-2-1 0-.2.27-1 2-1z" fill={primaryFill} /></svg>;
}

const Lasso24Filled = wrapIcon(rawSvg({}), 'Lasso24Filled');
export default Lasso24Filled;
      