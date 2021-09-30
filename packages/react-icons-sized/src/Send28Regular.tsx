import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.79 2.77l21.07 10.08a1.25 1.25 0 010 2.26L3.8 25.18a1.25 1.25 0 01-1.75-1.45l2.66-9.75-2.66-9.75A1.25 1.25 0 013.8 2.77zm-.15 1.6l2.42 8.88H17c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01H6.05l-2.41 8.84 20.1-9.61-20.1-9.62z" fill={primaryFill} /></svg>;
}

const Send28Regular = wrapIcon(rawSvg({}), 'Send28Regular');
export default Send28Regular;
      