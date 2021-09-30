import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8a.5.5 0 010 1H6a.5.5 0 010-1h5z" fill={primaryFill} /><path d="M14 8.5a5.5 5.5 0 10-1.98 4.23l4.13 4.12.07.06a.5.5 0 00.63-.76l-4.12-4.13A5.48 5.48 0 0014 8.5zm-10 0a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" fill={primaryFill} /></svg>;
}

const ZoomOutRegular = wrapIcon(rawSvg({}), 'ZoomOutRegular');
export default ZoomOutRegular;
      