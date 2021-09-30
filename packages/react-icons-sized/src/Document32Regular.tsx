import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a3 3 0 00-3 3v22a3 3 0 003 3h16a3 3 0 003-3V10.83a3 3 0 00-.88-2.12L20.3 2.88A3 3 0 0018.17 2H8zM7 5a1 1 0 011-1h9v5a3 3 0 003 3h5v15a1 1 0 01-1 1H8a1 1 0 01-1-1V5zm17.59 5H20a1 1 0 01-1-1V4.41L24.59 10z" fill={primaryFill} /></svg>;
}

const Document32Regular = wrapIcon(rawSvg({}), 'Document32Regular');
export default Document32Regular;
      