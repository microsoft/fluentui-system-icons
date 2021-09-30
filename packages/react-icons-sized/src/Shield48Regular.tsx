import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.13 4.35a1.25 1.25 0 011.73 0c2.76 2.64 6.69 4.08 10.04 4.84a35.65 35.65 0 005.86.81h.02c.68.02 1.22.57 1.22 1.25V21c0 9.5-5.06 19.02-17.63 22.94-.24.08-.5.08-.74 0-6.24-1.95-10.67-5.29-13.53-9.42A23.95 23.95 0 016 20.75v-9.5c0-.68.54-1.23 1.22-1.25h.02a9.4 9.4 0 00.41-.02l1.25-.1c1.06-.11 2.54-.32 4.2-.7 3.35-.75 7.28-2.19 10.03-4.83zM8.5 12.43v8.32c0 4.41 1.13 8.72 3.65 12.35 2.46 3.55 6.29 6.52 11.85 8.34C35.16 37.8 39.5 29.4 39.5 21v-8.57l-.65-.07a38.15 38.15 0 01-4.5-.73c-3.22-.74-7.21-2.1-10.35-4.7-3.14 2.6-7.13 3.96-10.35 4.7a38.15 38.15 0 01-5.15.8z" fill={primaryFill} /></svg>;
}

const Shield48Regular = wrapIcon(rawSvg({}), 'Shield48Regular');
export default Shield48Regular;
      