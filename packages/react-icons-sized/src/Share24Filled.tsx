import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 4h3.46a.75.75 0 01.1 1.5H6.75c-1.2 0-2.17.93-2.25 2.1v9.65c0 1.2.92 2.17 2.1 2.24l.15.01h9.5c1.19 0 2.16-.93 2.24-2.1v-.65a.75.75 0 011.5-.1v.6c0 2-1.56 3.64-3.54 3.74l-.2.01h-9.5c-2 0-3.64-1.57-3.75-3.55v-9.7c0-2 1.57-3.64 3.55-3.74l.2-.01h3.46-3.46zm7.75 2.54V3.75c0-.62.7-.96 1.19-.61l.08.07 6 5.75c.27.27.3.7.07 1l-.08.08-5.99 5.75a.75.75 0 01-1.26-.43v-2.91h-.33c-2.66-.01-4.93 1.08-6.87 3.3-.5.56-1.42.13-1.3-.62C6.84 10 9.6 7.1 14.2 6.57l.3-.03V3.75v2.8z" fill={primaryFill} /></svg>;
}

const Share24Filled = wrapIcon(rawSvg({}), 'Share24Filled');
export default Share24Filled;
      