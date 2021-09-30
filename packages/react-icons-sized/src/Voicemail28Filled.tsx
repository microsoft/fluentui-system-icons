import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 14a2 2 0 114 0 2 2 0 01-4 0zm9 0a2 2 0 114 0 2 2 0 01-4 0zM5.75 4A3.75 3.75 0 002 7.75v12.5A3.75 3.75 0 005.75 24h16.5A3.75 3.75 0 0026 20.25V7.75A3.75 3.75 0 0022.25 4H5.75zm6.62 8a3.5 3.5 0 11-2.87-1.5h9a3.5 3.5 0 11-2.87 1.5h-3.26z" fill={primaryFill} /></svg>;
}

const Voicemail28Filled = wrapIcon(rawSvg({}), 'Voicemail28Filled');
export default Voicemail28Filled;
      