import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.9 5.62c.07.21.1.43.1.64v11.48a2.25 2.25 0 01-2.9 2.16l-5.5-1.64A4 4 0 016 16.7V16l-2.4-.71A2.25 2.25 0 012 13.13v-2.26c0-1 .65-1.87 1.6-2.16l15.5-4.6c1.2-.36 2.45.32 2.8 1.51zM7.5 16.44v.06a2.5 2.5 0 004.62 1.32L7.5 16.44z" fill={primaryFill} /></svg>;
}

const Megaphone24Filled = wrapIcon(rawSvg({}), 'Megaphone24Filled');
export default Megaphone24Filled;
      