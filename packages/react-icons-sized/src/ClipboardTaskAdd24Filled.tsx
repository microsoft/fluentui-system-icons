import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2h-3.5c-1.16 0-2.11.87-2.24 2H4.25C3.01 4 2 5 2 6.25v13.5C2 20.99 3 22 4.25 22h8.56a6.48 6.48 0 01-.85-7.9l-2.43 2.43c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06L9 14.94l4.97-4.97a.75.75 0 111.06 1.06l-.93.93a6.47 6.47 0 013.9-.94V6.25C18 5.01 17 4 15.75 4h-1.76a2.25 2.25 0 00-2.24-2zm-3.5 1.5h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
}

const ClipboardTaskAdd24Filled = wrapIcon(rawSvg({}), 'ClipboardTaskAdd24Filled');
export default ClipboardTaskAdd24Filled;
      