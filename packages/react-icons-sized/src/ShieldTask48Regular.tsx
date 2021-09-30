import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M32.61 19.15a1.25 1.25 0 00-1.72-1.8L20.77 27l-3.64-3.63a1.25 1.25 0 00-1.76 1.76l4.5 4.5c.48.48 1.25.5 1.74.02l11-10.5zm-7.75-14.8a1.25 1.25 0 00-1.73 0c-2.75 2.64-6.68 4.08-10.03 4.84a35.66 35.66 0 01-5.86.81h-.02c-.68.02-1.22.57-1.22 1.25v9.5c0 4.84 1.24 9.66 4.1 13.77 2.86 4.13 7.29 7.47 13.53 9.42.24.08.5.08.74 0C36.94 40.02 42 30.5 42 21v-9.75c0-.68-.54-1.23-1.22-1.25h-.02a9.38 9.38 0 01-.41-.02l-1.25-.1c-1.06-.11-2.54-.32-4.2-.7-3.35-.75-7.28-2.19-10.04-4.83zM8.5 20.75v-8.32l.65-.07c1.14-.11 2.72-.33 4.5-.73 3.22-.74 7.21-2.1 10.35-4.7 3.14 2.6 7.13 3.96 10.35 4.7a38.15 38.15 0 005.15.8V21c0 8.41-4.34 16.8-15.5 20.44-5.56-1.82-9.39-4.8-11.85-8.34A21.46 21.46 0 018.5 20.75z" fill={primaryFill} /></svg>;
}

const ShieldTask48Regular = wrapIcon(rawSvg({}), 'ShieldTask48Regular');
export default ShieldTask48Regular;
      