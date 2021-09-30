import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2v7a3 3 0 003 3h7v15a3 3 0 01-3 3H13.5v-5.9A7 7 0 005 13.96V5.01a3 3 0 013-3h9zm-6.5 24.55a6.76 6.76 0 001.5-1.02v4.52a.95.95 0 01-1.44.81L7.5 29l-3.06 1.86A.95.95 0 013 30.05v-4.52a6.75 6.75 0 004.49 1.72h.02c1.07 0 2.09-.25 2.99-.7zm-3-.55A5.48 5.48 0 012 20.5 5.5 5.5 0 117.5 26zM19 2.12V9a1 1 0 001 1h6.88a3 3 0 00-.76-1.3L20.3 2.89A3 3 0 0019 2.12z" fill={primaryFill} /></svg>;
}

const DocumentRibbon32Filled = wrapIcon(rawSvg({}), 'DocumentRibbon32Filled');
export default DocumentRibbon32Filled;
      