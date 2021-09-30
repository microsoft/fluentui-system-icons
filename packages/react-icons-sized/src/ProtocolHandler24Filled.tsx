import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.48 17.73l-.77-.77 2.48-2.49a3.5 3.5 0 000-4.94L12.7 7.04l.77-.77a2.5 2.5 0 013.54 0l3.96 3.96a2.5 2.5 0 010 3.54l-3.96 3.96a2.5 2.5 0 01-3.54 0z" fill={primaryFill} /><path d="M14.48 13.77a2.5 2.5 0 000-3.54l-3.96-3.96a2.5 2.5 0 00-3.54 0l-3.96 3.96a2.5 2.5 0 000 3.54l3.96 3.96a2.5 2.5 0 003.54 0l3.96-3.96z" fill={primaryFill} /></svg>;
}

const ProtocolHandler24Filled = wrapIcon(rawSvg({}), 'ProtocolHandler24Filled');
export default ProtocolHandler24Filled;
      