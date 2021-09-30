import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.63 12h-3.26a3.5 3.5 0 11-2.87-1.5h9a3.5 3.5 0 11-2.87 1.5zm2.87 0a2 2 0 100 4 2 2 0 000-4zm-9 0a2 2 0 100 4 2 2 0 000-4zM5.75 4A3.75 3.75 0 002 7.75v12.5A3.75 3.75 0 005.75 24h16.5A3.75 3.75 0 0026 20.25V7.75A3.75 3.75 0 0022.25 4H5.75zM3.5 7.75C3.5 6.5 4.51 5.5 5.75 5.5h16.5c1.24 0 2.25 1 2.25 2.25v12.5c0 1.24-1 2.25-2.25 2.25H5.75c-1.24 0-2.25-1.01-2.25-2.25V7.75z" fill={primaryFill} /></svg>;
}

const Voicemail28Regular = wrapIcon(rawSvg({}), 'Voicemail28Regular');
export default Voicemail28Regular;
      