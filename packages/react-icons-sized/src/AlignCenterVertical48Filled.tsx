import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.75 44c-.69 0-1.25-.56-1.25-1.25V40h-6.25A4.25 4.25 0 0112 35.75v-5.5C12 27.9 13.9 26 16.25 26h6.25v-4H12.25A4.25 4.25 0 018 17.75v-5.5C8 9.9 9.9 8 12.25 8H22.5V5.25a1.25 1.25 0 112.5 0V8h10.75C38.1 8 40 9.9 40 12.25v5.5C40 20.1 38.1 22 35.75 22H25v4h6.75C34.1 26 36 27.9 36 30.25v5.5C36 38.1 34.1 40 31.75 40H25v2.75c0 .69-.56 1.25-1.25 1.25z" fill={primaryFill} /></svg>;
}

const AlignCenterVertical48Filled = wrapIcon(rawSvg({}), 'AlignCenterVertical48Filled');
export default AlignCenterVertical48Filled;
      