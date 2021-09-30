import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a3 3 0 00-3 3v8.96c.63-.24 1.3-.4 2-.44V5a1 1 0 011-1h9v5a3 3 0 003 3h5v15a1 1 0 01-1 1H13.5v2H24a3 3 0 003-3V10.83a3 3 0 00-.88-2.12L20.3 2.88A3 3 0 0018.17 2H8zm16.59 8H20a1 1 0 01-1-1V4.41L24.59 10zM7 15.02a5.47 5.47 0 00-5 5.48 5.5 5.5 0 105-5.48zM4.44 30.86A.95.95 0 013 30.05v-4.52a6.75 6.75 0 009 0v4.52a.95.95 0 01-1.44.81L7.5 29l-3.06 1.86z" fill={primaryFill} /></svg>;
}

const DocumentRibbon32Regular = wrapIcon(rawSvg({}), 'DocumentRibbon32Regular');
export default DocumentRibbon32Regular;
      