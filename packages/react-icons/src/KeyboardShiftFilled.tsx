import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.14 2.53a1.5 1.5 0 00-2.28 0l-6.62 7.8A1 1 0 003 11.98h3V17a1 1 0 001 1h6a1 1 0 001-1v-5.02h3a1 1 0 00.76-1.65l-6.62-7.8z" fill={primaryFill} /></svg>;
}

const KeyboardShiftFilled = wrapIcon(rawSvg({}), 'KeyboardShiftFilled');
export default KeyboardShiftFilled;
      