import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.73 17.73l-1.02-1.02 1.06-1.06 1.02 1.02a1 1 0 001.42 0l3.96-3.96a1 1 0 000-1.42l-3.96-3.96a1 1 0 00-1.42 0l-1.02 1.02L12.7 7.3l1.02-1.02a2.5 2.5 0 013.54 0l3.96 3.96a2.5 2.5 0 010 3.54l-3.96 3.96a2.5 2.5 0 01-3.54 0z" fill={primaryFill} /><path d="M6.73 6.27l-3.96 3.96a2.5 2.5 0 000 3.54l3.96 3.96a2.5 2.5 0 003.54 0l3.96-3.96a2.5 2.5 0 000-3.54l-3.96-3.96a2.5 2.5 0 00-3.54 0zm-2.9 5.02l3.96-3.96a1 1 0 011.42 0l3.96 3.96a1 1 0 010 1.42l-3.96 3.96a1 1 0 01-1.42 0l-3.96-3.96a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
}

const ProtocolHandler24Regular = wrapIcon(rawSvg({}), 'ProtocolHandler24Regular');
export default ProtocolHandler24Regular;
      