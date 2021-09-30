import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 2a2 2 0 00-2 2v1.3c.46-.2.97-.3 1.5-.3h6c.53 0 1.04.1 1.5.3V4a2 2 0 00-2-2h-5zM9 6a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3v-2a1 1 0 001-1v-1a1 1 0 00-1-1V9a3 3 0 00-3-3H9zm0 13c-.53 0-1.04-.1-1.5-.3V20c0 1.1.9 2 2 2h5a2 2 0 002-2v-1.3c-.46.2-.97.3-1.5.3H9z" fill={primaryFill} /></svg>;
}

const Smartwatch24Filled = wrapIcon(rawSvg({}), 'Smartwatch24Filled');
export default Smartwatch24Filled;
      