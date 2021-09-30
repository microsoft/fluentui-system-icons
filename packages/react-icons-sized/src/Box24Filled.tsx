import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.4 2.51a3.75 3.75 0 00-2.8 0l-2.2.89L18 7.13l3.37-1.3c-.14-.12-.3-.2-.46-.28l-7.5-3.04zM22 7.2l-9.25 3.57V21.7c.22-.05.44-.11.66-.2l7.5-3.04c.66-.27 1.09-.91 1.09-1.62V7.19zm-10.75 14.5V10.76L2 7.2v9.64c0 .7.43 1.35 1.1 1.62l7.5 3.04c.2.09.43.15.65.2zM2.63 5.83L12 9.45l3.92-1.52-9.55-3.7L3.1 5.54c-.17.07-.32.16-.46.28z" fill={primaryFill} /></svg>;
}

const Box24Filled = wrapIcon(rawSvg({}), 'Box24Filled');
export default Box24Filled;
      