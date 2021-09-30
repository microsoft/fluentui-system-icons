import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8a3 3 0 013-3h16a3 3 0 013 3v10a3 3 0 01-3 3h-8v-2h8a1 1 0 001-1V8a1 1 0 00-1-1H9a1 1 0 00-1 1H7a4 4 0 00-1 .13V8zm23 17H17v-2h12a1 1 0 110 2zM9 25a1 1 0 100-2 1 1 0 000 2zM3 13a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V13zm3-1a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V13a1 1 0 00-1-1H6z" fill={primaryFill} /></svg>;
}

const PhoneLaptop32Regular = wrapIcon(rawSvg({}), 'PhoneLaptop32Regular');
export default PhoneLaptop32Regular;
      