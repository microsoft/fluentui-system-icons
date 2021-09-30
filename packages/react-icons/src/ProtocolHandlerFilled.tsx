import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.59 5.41L2.4 8.6a2 2 0 000 2.82L5.6 14.6a2 2 0 002.82 0l3.18-3.18a2 2 0 000-2.82L8.4 5.4a2 2 0 00-2.82 0z" fill={primaryFill} /><path d="M11.59 14.59l-.88-.88 1.58-1.59a3 3 0 000-4.24l-1.58-1.59.88-.88a2 2 0 012.82 0L17.6 8.6a2 2 0 010 2.82L14.4 14.6a2 2 0 01-2.82 0z" fill={primaryFill} /></svg>;
}

const ProtocolHandlerFilled = wrapIcon(rawSvg({}), 'ProtocolHandlerFilled');
export default ProtocolHandlerFilled;
      