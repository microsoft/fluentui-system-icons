import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2v7a3 3 0 003 3h7v15a3 3 0 01-3 3H8a3 3 0 01-3-3V5a3 3 0 013-3h9zm2 .12V9a1 1 0 001 1h6.88a3 3 0 00-.76-1.3L20.3 2.89A3 3 0 0019 2.12z" fill={primaryFill} /></svg>;
}

const Document32Filled = wrapIcon(rawSvg({}), 'Document32Filled');
export default Document32Filled;
      