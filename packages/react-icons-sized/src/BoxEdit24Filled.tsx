import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.4 2.51a3.75 3.75 0 00-2.8 0l-2.2.89L18 7.13l3.37-1.3c-.14-.12-.3-.2-.46-.28l-7.5-3.04zM22 7.2l-9.25 3.57v6.85l5.64-5.65a3.29 3.29 0 013.61-.7V7.19zm-10.75 3.57v9.9l-.19.75-.04.22a3.75 3.75 0 01-.43-.14l-7.5-3.04C2.43 18.18 2 17.54 2 16.83V7.19l9.25 3.57zM2.63 5.83L12 9.45l3.92-1.52-9.55-3.7L3.1 5.54c-.17.07-.32.16-.46.28zm16.47 6.84l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const BoxEdit24Filled = wrapIcon(rawSvg({}), 'BoxEdit24Filled');
export default BoxEdit24Filled;
      