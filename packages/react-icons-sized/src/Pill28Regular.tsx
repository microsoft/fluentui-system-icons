import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.78 20.28a.75.75 0 10-1.06-1.06L8.74 21.2c-.4.4-1.07.4-1.48 0l-.48-.48a.75.75 0 00-1.06 1.06l.48.48c1 1 2.6 1 3.6 0l1.98-1.98zM24.25 3.75a6 6 0 00-8.47 0L3.74 15.75a6 6 0 008.48 8.5l12.04-12.02a6 6 0 000-8.49zm-13.96 7.6l6.36 6.36-5.49 5.48a4.5 4.5 0 01-6.36-6.36l5.49-5.48zm12.9-.18l-5.48 5.48-6.36-6.36 5.49-5.48a4.5 4.5 0 016.36 6.36z" fill={primaryFill} /></svg>;
}

const Pill28Regular = wrapIcon(rawSvg({}), 'Pill28Regular');
export default Pill28Regular;
      