import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.86 4.35a1.25 1.25 0 00-1.73 0c-2.75 2.64-6.68 4.08-10.03 4.84a35.66 35.66 0 01-5.86.81h-.02c-.68.02-1.22.57-1.22 1.25v9.5c0 4.84 1.24 9.66 4.1 13.77 2.86 4.13 7.29 7.47 13.53 9.42.24.08.5.08.74 0C36.94 40.02 42 30.5 42 21v-9.75c0-.68-.54-1.23-1.22-1.25h-.02a9.38 9.38 0 01-.41-.02l-1.25-.1c-1.06-.11-2.54-.32-4.2-.7-3.35-.75-7.28-2.19-10.04-4.83z" fill={primaryFill} /></svg>;
}

const Shield48Filled = wrapIcon(rawSvg({}), 'Shield48Filled');
export default Shield48Filled;
      