import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.5A2.5 2.5 0 014.5 3h1a.5.5 0 010 1h-1C3.67 4 3 4.67 3 5.5v1a.5.5 0 01-1 0v-1zm12-2c0-.28.22-.5.5-.5h1A2.5 2.5 0 0118 5.5v1a.5.5 0 01-1 0v-1c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 01-.5-.5zM2.5 13c.28 0 .5.22.5.5v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 010 1h-1A2.5 2.5 0 012 14.5v-1c0-.28.22-.5.5-.5zm15 0c.28 0 .5.22.5.5v1a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1c.83 0 1.5-.67 1.5-1.5v-1c0-.28.22-.5.5-.5zm-12-7c.28 0 .5.22.5.5v7a.5.5 0 01-1 0v-7c0-.28.22-.5.5-.5zm3.5.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm2.5-.5c.28 0 .5.22.5.5v7a.5.5 0 01-1 0v-7c0-.28.22-.5.5-.5zm3.5.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" fill={primaryFill} /></svg>;
}

const BarcodeScannerRegular = wrapIcon(rawSvg({}), 'BarcodeScannerRegular');
export default BarcodeScannerRegular;
      