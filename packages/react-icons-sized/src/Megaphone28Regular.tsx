import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 7.35c0-1.8-1.71-3.12-3.46-2.65L4.04 9.63A2.75 2.75 0 002 12.29v3.42c0 1.25.84 2.34 2.05 2.66l2.95.79v.34a4.5 4.5 0 008.56 1.94l6.98 1.86A2.75 2.75 0 0026 20.65V7.35zm-3.07-1.2c.8-.22 1.57.38 1.57 1.2v13.3c0 .82-.78 1.42-1.57 1.2l-18.5-4.93a1.25 1.25 0 01-.93-1.2v-3.43c0-.57.39-1.07.93-1.21l18.5-4.93zm-8.86 14.9a3 3 0 01-5.57-1.5l5.57 1.5z" fill={primaryFill} /></svg>;
}

const Megaphone28Regular = wrapIcon(rawSvg({}), 'Megaphone28Regular');
export default Megaphone28Regular;
      