import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.84 3.55a3.98 3.98 0 00.06 4.98.5.5 0 00.78-.63 2.99 2.99 0 01-.13-3.64l4.19 4.19c-.44.3-.96.5-1.53.54l.4-.39a.5.5 0 10-.71-.7L4.65 9.15a.5.5 0 000 .7L5.9 11.1a.5.5 0 00.7-.7l-.4-.4a3.98 3.98 0 002.25-.84l1.7 1.7a.5.5 0 00.7-.71l-9-9a.5.5 0 10-.7.7l1.69 1.7zM8.9 6.78l.78.78a3.99 3.99 0 00-.78-4.31.5.5 0 00-.72.68 2.99 2.99 0 01.72 2.85zM4.44 2.32l1.72 1.72 1.2-1.19a.5.5 0 000-.7L6.1.9a.5.5 0 00-.7.7l.4.4c-.48.03-.94.14-1.36.32z" fill={primaryFill} /></svg>;
}

const ArrowSyncOff12Regular = wrapIcon(rawSvg({}), 'ArrowSyncOff12Regular');
export default ArrowSyncOff12Regular;
      