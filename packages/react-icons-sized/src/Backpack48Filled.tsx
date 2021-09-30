import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.18 18.5a2.68 2.68 0 00-2.68 2.68c0 .18.14.32.32.32h10.36c.18 0 .32-.14.32-.32 0-1.48-1.2-2.68-2.68-2.68h-5.64z" fill={primaryFill} /><path d="M24 4a8 8 0 00-7.95 7.11A16 16 0 008 25v3h32v-3a16 16 0 00-8.05-13.89A8 8 0 0024 4zm0 5c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0110.1 0A15.98 15.98 0 0024 9zm-8 12.18A5.18 5.18 0 0121.18 16h5.64A5.18 5.18 0 0132 21.18 2.82 2.82 0 0129.18 24H18.82A2.82 2.82 0 0116 21.18z" fill={primaryFill} /><path d="M16 30.5v3.25a1.25 1.25 0 102.5 0V30.5H40v8.25c0 2.9-2.35 5.25-5.25 5.25h-21.5A5.25 5.25 0 018 38.75V30.5h8z" fill={primaryFill} /></svg>;
}

const Backpack48Filled = wrapIcon(rawSvg({}), 'Backpack48Filled');
export default Backpack48Filled;
      