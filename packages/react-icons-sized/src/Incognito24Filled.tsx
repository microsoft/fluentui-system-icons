import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 11.75A4.75 4.75 0 1113 18h-2a4.75 4.75 0 11.22-2h1.56a4.75 4.75 0 014.72-4.25zm-11 2a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm11 0a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM15.51 3c1.22 0 2.29.8 2.64 1.96l1 3.35c.8.13 1.57.29 2.33.47a1 1 0 11-.46 1.94A39.37 39.37 0 0012 9.75c-3.26 0-6.27.33-9.02.97a1 1 0 01-.46-1.94c.76-.18 1.53-.34 2.33-.47l1-3.35A2.75 2.75 0 018.5 3h7.02z" fill={primaryFill} /></svg>;
}

const Incognito24Filled = wrapIcon(rawSvg({}), 'Incognito24Filled');
export default Incognito24Filled;
      