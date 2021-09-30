import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.4 2.51a3.75 3.75 0 00-2.8 0l-2.2.89L18 7.13l3.37-1.3c-.14-.12-.3-.2-.46-.28l-7.5-3.04zM22 7.2l-9.25 3.57v2.3a6.48 6.48 0 019.25-.25V7.19zm-10.75 3.57v4.95a6.5 6.5 0 000 3.58v2.4a3.76 3.76 0 01-.66-.2l-7.5-3.04C2.43 18.18 2 17.54 2 16.83V7.19l9.25 3.57zM2.63 5.83L12 9.45l3.92-1.52-9.55-3.7L3.1 5.54c-.17.07-.32.16-.46.28zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const BoxDismiss24Filled = wrapIcon(rawSvg({}), 'BoxDismiss24Filled');
export default BoxDismiss24Filled;
      