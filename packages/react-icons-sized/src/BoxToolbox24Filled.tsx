import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.4 2.51a3.75 3.75 0 00-2.8 0l-2.2.89L18 7.13l3.37-1.3c-.14-.12-.3-.2-.46-.28l-7.5-3.04zM22 7.2l-9.25 3.57v3.35l.25-.06V14a2.75 2.75 0 012.75-2.75h3.5A2.75 2.75 0 0122 13.99v-6.8zm-10.75 3.57v4.65c-.16.33-.25.7-.25 1.09v5.13a3.75 3.75 0 01-.4-.14l-7.5-3.04c-.67-.27-1.1-.91-1.1-1.62V7.19l9.25 3.57zM2.63 5.83L12 9.45l3.92-1.52-9.55-3.7L3.1 5.54c-.17.07-.32.16-.46.28zM14 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 011.5 0V18h3v-.25a.75.75 0 011.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1zM12 21.5v-2h2.5v.75a.75.75 0 001.5 0v-.75h3v.75a.75.75 0 001.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
}

const BoxToolbox24Filled = wrapIcon(rawSvg({}), 'BoxToolbox24Filled');
export default BoxToolbox24Filled;
      