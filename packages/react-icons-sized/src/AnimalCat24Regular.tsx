import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 3.5c-.85.08-1.5.79-1.5 1.65V10c0 .41-.34.75-.76.75-1.44 0-2.45.59-3.2 1.49a8.67 8.67 0 00-1.6 3.56 19.66 19.66 0 00-.47 4.7H15v-.75c0-1.24-1-2.25-2.25-2.25H11.5a.75.75 0 010-1.5h1.25a3.75 3.75 0 013.75 3.75v.75h.75c.42 0 .75-.34.75-.75v-10c0-.41.34-.75.75-.75h.5c.99 0 1.58-1.08 1.07-1.9l-.62-1c-.23-.38-.63-.6-1.06-.6h-2.39a.75.75 0 01-.75-.75V3.51zm-9.03 17A23.85 23.85 0 017 15.45c.34-1.46.91-3 1.9-4.17a5.4 5.4 0 013.6-1.99V5.15A3.15 3.15 0 0115.64 2C16.4 2 17 2.6 17 3.35V4h1.64c.95 0 1.83.5 2.33 1.3l.62 1a2.75 2.75 0 01-2.09 4.19v9.26c0 1.24-1 2.25-2.25 2.25H5.8a3.8 3.8 0 01-2.78-6.39l1.14-1.22a3.06 3.06 0 00-.08-4.25L2.97 9.03a.75.75 0 011.06-1.06l1.11 1.11a4.56 4.56 0 01.11 6.34l-1.13 1.21A2.3 2.3 0 005.8 20.5h.67z" fill={primaryFill} /></svg>;
}

const AnimalCat24Regular = wrapIcon(rawSvg({}), 'AnimalCat24Regular');
export default AnimalCat24Regular;
      