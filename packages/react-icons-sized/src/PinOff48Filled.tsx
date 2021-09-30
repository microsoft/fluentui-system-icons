import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29.52 31.3l12.1 12.08a1.25 1.25 0 001.76-1.76l-37-37a1.25 1.25 0 10-1.76 1.76l12.09 12.1-6.25 2.16a2.75 2.75 0 00-1.05 4.54L15.23 31 6 40.23V42h1.77L17 32.77l5.82 5.82a2.75 2.75 0 004.54-1.05l2.16-6.25zm11.7-7.51l-8.09 4.04-12.96-12.96 4.04-8.09a4.75 4.75 0 017.6-1.23l10.64 10.63a4.75 4.75 0 01-1.23 7.61z" fill={primaryFill} /></svg>;
}

const PinOff48Filled = wrapIcon(rawSvg({}), 'PinOff48Filled');
export default PinOff48Filled;
      