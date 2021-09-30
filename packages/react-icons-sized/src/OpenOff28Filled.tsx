import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22l22.5 22.5a.75.75 0 01-1.06 1.06l-1.47-1.47c-.64.44-1.42.69-2.25.69H7a4 4 0 01-4-4V7c0-.83.25-1.6.7-2.25L2.21 3.28a.75.75 0 111.06-1.06zm18.5 20.62L5.16 6.22A2 2 0 005 7v14c0 1.1.9 2 2 2h14a2 2 0 00.78-.16zM6.25 3.07L8.18 5h3.32a1 1 0 100-2H7c-.26 0-.5.02-.75.07zm18.68 18.68L23 19.82V16.5a1 1 0 112 0V21c0 .26-.02.5-.07.75zM15.5 4a1 1 0 011-1H24a1 1 0 011 1v7.5a1 1 0 11-2 0V6.41l-5.8 5.8a1 1 0 11-1.4-1.42L21.58 5H16.5a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const OpenOff28Filled = wrapIcon(rawSvg({}), 'OpenOff28Filled');
export default OpenOff28Filled;
      