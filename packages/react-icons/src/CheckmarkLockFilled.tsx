import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 018 8.33A3 3 0 0012.5 12v.06A2 2 0 0011 14v3.94A8 8 0 1110 2zm3.36 5.65a.5.5 0 00-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 00-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 00-.06-.63zM15.5 10a2 2 0 012 2v1h.5a1 1 0 011 1v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4a1 1 0 011-1h.5v-1c0-1.1.9-2 2-2zm-.65 6.37a.75.75 0 101.3-.74.75.75 0 00-1.3.74zM15.5 11a1 1 0 00-1 1v1h2v-1a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const CheckmarkLockFilled = wrapIcon(rawSvg({}), 'CheckmarkLockFilled');
export default CheckmarkLockFilled;
      