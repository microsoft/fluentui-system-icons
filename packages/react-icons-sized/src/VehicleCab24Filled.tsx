import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.27 2a.75.75 0 00-.75.74V4.5h-.67c-1.43 0-2.69.93-3.1 2.3l-.07.2h-.93a.75.75 0 000 1.5h.53l-.2.83c-.65.4-1.08 1.1-1.08 1.92v8.5c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75V18.5h8v1.25c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75v-8.5c0-.82-.43-1.53-1.08-1.92l-.2-.83h.53a.75.75 0 000-1.5h-.94l-.06-.18a3.25 3.25 0 00-3.11-2.32h-.66V2.74a.75.75 0 00-.75-.75H9.27zM7.85 6h8.29c.77 0 1.45.5 1.68 1.25l.2.7L18.3 9H5.7l.25-1.05.22-.71C6.4 6.5 7.08 6 7.85 6zM4.5 18.5h2v1.25c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25V18.5zm13 0h2v1.25c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25V18.5zM8 13a1 1 0 11-2 0 1 1 0 012 0zm9 1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const VehicleCab24Filled = wrapIcon(rawSvg({}), 'VehicleCab24Filled');
export default VehicleCab24Filled;
      