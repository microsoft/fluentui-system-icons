import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l1.4 1.41A2.99 2.99 0 003 6v8c0 .65.2 1.25.56 1.74l5.39-5.3c.14-.14.3-.25.46-.32l.64.63-.36.36a.51.51 0 00-.04.04l-5.38 5.3c.49.35 1.08.55 1.73.55h8c.6 0 1.15-.17 1.62-.47l.01-.01.1-.07 1.42 1.4a.5.5 0 00.7-.7l-15-15z" fill={primaryFill} /><path d="M13 7.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M5.22 3.1L16.9 14.78A3 3 0 0017 14V6a3 3 0 00-3-3H6a3 3 0 00-.78.1zM14 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const ImageOffFilled = wrapIcon(rawSvg({}), 'ImageOffFilled');
export default ImageOffFilled;
      