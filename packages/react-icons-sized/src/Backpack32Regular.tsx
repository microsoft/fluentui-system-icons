import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 12a4 4 0 00-4 4c0 1.1.9 2 2 2h8a2 2 0 002-2 4 4 0 00-4-4h-4zm-2 4c0-1.1.9-2 2-2h4a2 2 0 012 2h-8zm4-14a4 4 0 00-4 4v.83A10 10 0 006 16v9a5 5 0 005 5h10a5 5 0 005-5v-9a10 10 0 00-6-9.17V6a4 4 0 00-4-4zm8 18H8v-4a8 8 0 1116 0v4zm-12 5a1 1 0 102 0v-3h10v3a3 3 0 01-3 3H11a3 3 0 01-3-3v-3h4v3zm4-19c-.68 0-1.35.07-2 .2V6a2 2 0 114 0v.2c-.65-.13-1.32-.2-2-.2z" fill={primaryFill} /></svg>;
}

const Backpack32Regular = wrapIcon(rawSvg({}), 'Backpack32Regular');
export default Backpack32Regular;
      