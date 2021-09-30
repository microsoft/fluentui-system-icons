import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.72 11.02a2 2 0 000-2.04l.63-.63a.5.5 0 00-.7-.7l-.63.63a2 2 0 00-2.04 0l-.63-.63a.5.5 0 00-.7.7l.63.63a2 2 0 000 2.04l-.63.63a.5.5 0 00.7.7l.63-.63a2 2 0 002.04 0l.63.63a.5.5 0 00.7-.7l-.63-.63zM12 11a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /><path d="M6 7.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /><path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5z" fill={primaryFill} /></svg>;
}

const Vault20Regular = wrapIcon(rawSvg({}), 'Vault20Regular');
export default Vault20Regular;
      